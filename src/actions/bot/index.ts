"use server";

import { client } from "@/lib/prisma";
import { extractEmailsFromString, extractURLfromString } from "@/lib/utils";
import { onRealTimeChat } from "../conversation";
import { clerkClient } from "@clerk/nextjs";
import { onMailer } from "../mailer";
// import OpenAi from 'openai'
import { GoogleGenerativeAI } from "@google/generative-ai";
// const openai = new OpenAi({
//   apiKey: process.env.OPEN_AI_KEY,
// })

const generativeAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);
const model = generativeAI.getGenerativeModel({ model: "gemini-1.0-pro" });

export const onStoreConversations = async (
  id: string,
  message: string,
  role: "assistant" | "user"
) => {
  await client.chatRoom.update({
    where: {
      id,
    },
    data: {
      message: {
        create: {
          message,
          role,
        },
      },
    },
  });
};

export const onGetCurrentChatBot = async (id: string) => {
  try {
    const chatbot = await client.domain.findUnique({
      where: {
        id,
      },
      select: {
        helpdesk: true,
        name: true,
        chatBot: {
          select: {
            id: true,
            welcomeMessage: true,
            icon: true,
            textColor: true,
            background: true,
            helpdesk: true,
          },
        },
      },
    });

    if (chatbot) {
      return chatbot;
    }
  } catch (error) {
    console.log(error);
  }
};

let customerEmail: string | undefined;

export const onAiChatBotAssistant = async (
  id: string,
  chat: { role: "assistant" | "user"; content: string }[],
  author: "user",
  message: string
) => {
  try {
    const chatBotDomain = await client.domain.findUnique({
      where: {
        id,
      },
      select: {
        name: true,
        filterQuestions: {
          where: {
            answered: null,
          },
          select: {
            question: true,
          },
        },
      },
    });

    // console.log("🟡 ChatBotDomain", chatBotDomain);

    if (chatBotDomain) {
      const extractedEmail = extractEmailsFromString(message);
      // console.log("🟡 Extracted Email", extractedEmail);

      if (extractedEmail) {
        customerEmail = extractedEmail[0];
      }

      // console.log("🟡 Customer Email", customerEmail);

      if (customerEmail) {
        const checkCustomer = await client.domain.findUnique({
          where: {
            id,
          },
          select: {
            User: {
              select: {
                clerkId: true,
              },
            },
            name: true,
            customer: {
              where: {
                email: {
                  startsWith: customerEmail,
                },
              },
              select: {
                id: true,
                email: true,
                questions: true,
                chatRoom: {
                  select: {
                    id: true,
                    live: true,
                    mailed: true,
                  },
                },
              },
            },
          },
        });

        if (checkCustomer && !checkCustomer.customer.length) {
          const newCustomer = await client.domain.update({
            where: {
              id,
            },
            data: {
              customer: {
                create: {
                  email: customerEmail,
                  questions: {
                    create: chatBotDomain.filterQuestions,
                  },
                  chatRoom: {
                    create: {},
                  },
                },
              },
            },
          });
          if (newCustomer) {
            console.log("new customer made");
            const response = {
              role: "assistant",
              content: `Welcome aboard ${
                customerEmail.split("@")[0]
              }! I'm glad to connect with you. Is there anything you need help with?`,
            };
            return { response };
          }
        }
        if (checkCustomer && checkCustomer.customer[0].chatRoom[0].live) {
          await onStoreConversations(
            checkCustomer?.customer[0].chatRoom[0].id!,
            message,
            author
          );

          onRealTimeChat(
            checkCustomer.customer[0].chatRoom[0].id,
            message,
            "user",
            author
          );

          if (!checkCustomer.customer[0].chatRoom[0].mailed) {
            const user = await clerkClient.users.getUser(
              checkCustomer.User?.clerkId!
            );

            onMailer(user.emailAddresses[0].emailAddress);

            //update mail status to prevent spamming
            const mailed = await client.chatRoom.update({
              where: {
                id: checkCustomer.customer[0].chatRoom[0].id,
              },
              data: {
                mailed: true,
              },
            });

            if (mailed) {
              return {
                live: true,
                chatRoom: checkCustomer.customer[0].chatRoom[0].id,
              };
            }
          }
          return {
            live: true,
            chatRoom: checkCustomer.customer[0].chatRoom[0].id,
          };
        }

        await onStoreConversations(
          checkCustomer?.customer[0].chatRoom[0].id!,
          message,
          author
        );
        const chatCompletion = await model.generateContent(`
user message is ${message}

     Your role is 'assistant'. Respond to the customer's questions using the answers provided. Ensure your responses match the exact wording of the questions dynamically. If the customer's question is a general greeting like "hi" or "hello," respond appropriately to acknowledge it. 

Only use "realtime" if the customer's question is inappropriate or irrelevant. The assistant should consider a question out of context if it does not align with the topics of the provided questions and answers or if it is inappropriate.

The array of questions and answers are:

1. Where is your company located?
   - Answer: Our company is located in San Francisco, 14 East Town.

2. What type of services are you providing?
   - Answer: We are selling T-shirts, jeans, and fashionable items.

3. What is your CEO's name?
   - Answer: Our CEO's name is Mr. Sujal Shah.

4. Can I book an appointment with your service staff?
   - Answer: Yeah, sure you can book an appointment with this link: http://localhost:3000/portal/${id}/appointment/${checkCustomer?.customer[0].id}

If the customer's question is not in the array, respond with a relevant answer or ask for clarification if needed. If the question is out of context or inappropriate, respond with: "This is beyond me, and I will get a real user to continue the conversation." Add the keyword "(realtime)" at the end.

Complete your responses within 10 words.



  
          `);

        // const chatCompletion = await openai.chat.completions.create({
        //   messages: [
        //     {
        //       role: 'assistant',
        //       content: `
        //       You will get an array of questions that you must ask the customer.

        //       Progress the conversation using those questions.

        //       Whenever you ask a question from the array i need you to add a keyword at the end of the question (complete) this keyword is extremely important.

        //       Do not forget it.

        //       only add this keyword when your asking a question from the array of questions. No other question satisfies this condition

        //       Always maintain character and stay respectfull.

        //       The array of questions : [${chatBotDomain.filterQuestions
        //         .map((questions) => questions.question)
        //         .join(', ')}]

        //       if the customer says something out of context or inapporpriate. Simply say this is beyond you and you will get a real user to continue the conversation. And add a keyword (realtime) at the end.

        //       if the customer agrees to book an appointment send them this link http://localhost:3000/portal/${id}/appointment/${
        //         checkCustomer?.customer[0].id
        //       }
        //localhost:3000/portal/90aee390-3326-4c08-aaa0-e6014d39a676/appointment/4901362e-7298-4e34-9f1d-fe39df2793f6
        //       if the customer wants to buy a product redirect them to the payment page http://localhost:3000/portal/${id}/payment/${
        //         checkCustomer?.customer[0].id
        //       }
        //   `,
        //     },
        //     ...chat,
        //     {
        //       role: 'user',
        //       content: message,
        //     },
        //   ],
        //   model: 'gpt-3.5-turbo',
        // })

        // if (chatCompletion.includes('(realtime)')) {
     if (chatCompletion.response.text().includes("(realtime)")) {
          const realtime = await client.chatRoom.update({
            where: {
              id: checkCustomer?.customer[0].chatRoom[0].id,
            },
            data: {
              live: true,
            },
          });

          if (realtime) {
            const response = {
              role: "assistant",
              // content: chatCompletion.replace(
              content: chatCompletion.response.text().replace("(realtime)", ""),
            };

            await onStoreConversations(
              checkCustomer?.customer[0].chatRoom[0].id!,
              response.content,
              "assistant"
            );

            return { response };
          }
        }
        if (chat[chat.length - 1].content.includes("(complete)")) {
          const firstUnansweredQuestion =
            await client.customerResponses.findFirst({
              where: {
                customerId: checkCustomer?.customer[0].id,
                answered: null,
              },
              select: {
                id: true,
              },
              orderBy: {
                question: "asc",
              },
            });
          if (firstUnansweredQuestion) {
            await client.customerResponses.update({
              where: {
                id: firstUnansweredQuestion.id,
              },
              data: {
                answered: message,
              },
            });
          }
        }

        if (chatCompletion) {
          const generatedLink = extractURLfromString(
            // chatCompletion as string
            chatCompletion.response.text() as string
          );

          if (generatedLink) {
            const link = generatedLink[0];
            const response = {
              role: "assistant",
              content: `Great! you can follow the link to proceed`,
              link: link.slice(0, -1),
            };

            await onStoreConversations(
              checkCustomer?.customer[0].chatRoom[0].id!,
              `${response.content} ${response.link}`,
              "assistant"
            );

            return { response };
          }

          const response = {
            role: "assistant",
            // content: chatCompletion,
            content: chatCompletion.response.text(),
          };

          await onStoreConversations(
            checkCustomer?.customer[0].chatRoom[0].id!,
            `${response.content}`,
            "assistant"
          );

          return { response };
        }
      }
      // console.log("No customer");
      const chatCompletion = await `
             To provide you with the best assistance, please reply with your email address. We'll verify it and get started 🦄
      `;

      if (chatCompletion) {
        const response = {
          role: "assistant",
          // content: "Hello, I'm the assistant of sales. I can help you with your queries. How can I help you today?",
          content: chatCompletion,
        };

        return { response };
      }
    }
  } catch (error) {
    console.log(error);
  }
};
