import { NextResponse, NextRequest } from "next/server";
import { z } from "zod";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { client } from "@/lib/prisma";

const schema = z.object({
  message: z.string().min(3).max(255),
  api: z.string().min(10),
  email: z.string().email(),
});

export async function POST(req: NextRequest, res: NextResponse) {
  const generativeAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);
  const model = generativeAI.getGenerativeModel({ model: "gemini-1.0-pro" });

  const apiKey = req.headers.get("apiKey");
  if (!apiKey) {
    return NextResponse.json({ success: false, error: "Invalid API Key" });
  }
  const data = await req.json();

  // Validate the input data
  const { error } = schema.safeParse(data);
  if (error) {
    return NextResponse.json({
      success: false,
      error: error.errors,
    });
  }

  try {
    const customerDetails = await client.domain.findFirst({
      where: {
        id: data.api,
      },
      include: {
        filterQuestions: true,
      },
    });
    if (!customerDetails) {
      return NextResponse.json({ success: false, error: "Invalid API Key" });
    }

    const botreply = await model.generateContent(`
        user message is ${data.message}
        
        Your role is 'assistant'. Respond to the customer's questions using the answers provided. Ensure your responses match the exact wording of the questions dynamically. If the customer's question is a general greeting like "hi" or "hello," respond appropriately to acknowledge it. 
        
        Only use "realtime" if the customer's question is inappropriate or irrelevant. The assistant should consider a question out of context if it does not align with the topics of the provided questions and answers or if it is inappropriate.
        
        The array of questions and answers are:
        
        ${customerDetails.filterQuestions
          .map((question) => {
            return `${question.question} - ${question.answered}`;
          }).join("\n")}
        
        If the customer's question is not in the array, respond with a relevant answer or ask for clarification if needed. If the question is out of context or inappropriate, respond with: "This is beyond me, and I will get a real user to continue the conversation." Add the keyword "(realtime)" at the end.
        
        Complete your responses within 10 words.`);

    if (!botreply.response.text) {
      return NextResponse.json({
        success: false,
        error: "Something went wrong!",
      });
    }
    if (botreply.response.text().includes("(realtime)")) {
      return NextResponse.json({
        success: true,
        botreply: "I will contact my costumer care he will get back you",
        realtime: true,
      });
    }

    return NextResponse.json({
      success: true,
      botreply: botreply.response.text,
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: error });
  }
}
