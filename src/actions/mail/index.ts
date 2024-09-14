'use server'

import { client } from '@/lib/prisma'
import { currentUser } from '@clerk/nextjs'
import nodemailer from 'nodemailer'

const emailTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sale Announcement</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
            color: #333;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
             background: linear-gradient(135deg, green 0%, red 100%);
            text-align: center;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .logo {
            max-width: 150px;
            margin: 0 auto 20px;
            border-radius:50%;
        }
        .highlight {
            color: #e74c3c;
            font-size: 1.5em;
        }
        .info {
            font-size: 1.2em;
            margin: 20px 0;
        }
        .discount {
            font-size: 2em;
            font-weight: bold;
            color: #2ecc71;
        }
    </style>
</head>
<body>
    <div class="container">
        <img src="https://images.unsplash.com/photo-1597242051386-c0a24ceae025?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Unicorn Logo" class="logo">
        <h1>Exciting News!</h1>
        <p class="info">We are thrilled to announce our biggest sale of the year!</p>
        <p class="highlight">Starting on November 20th</p>
        <p class="info">Enjoy up to</p>
        <p class="discount">50% OFF</p>
        <p class="info">on a wide range of products. Don't miss out on this incredible opportunity to save big!</p>
        <p>Stay tuned for more details and get ready to shop till you drop!</p>
        <p>Best Regards,</p>
        <p>The Unicorn Team</p>
    </div>
</body>
</html>
`;

export const onGetAllCustomers = async (id: string) => {
  try {
    const customers = await client.user.findUnique({
      where: {
        clerkId: id,
      },
      select: {
       
        domains: {
          select: {
            customer: {
              select: {
                id: true,
                email: true,
                Domain: {
                  select: {
                    name: true,
                  },
                },
                
              },
            },
          },
        },
      },
    })

    if (customers) {
      return customers
    }
  } catch (error) {}
}

export const onGetAllCampaigns = async (id: string) => {
  try {
    const campaigns = await client.user.findUnique({
      where: {
        clerkId: id,
      },
      select: {
        campaign: {
          select: {
            name: true,
            id: true,
            customers: true,
            createdAt: true,
          },
        },
      },
    })

    if (campaigns) {
      return campaigns
    }
  } catch (error) {
    console.log(error)
  }
}

export const onCreateMarketingCampaign = async (name: string) => {
  try {
    const user = await currentUser()
    if (!user) return null

    const campaign = await client.user.update({
      where: {
        clerkId: user.id,
      },
      data: {
        campaign: {
          create: {
            name,
          },
        },
      },
    })

    if (campaign) {
      return { status: 200, message: 'You campaign was created' }
    }
  } catch (error) {
    console.log(error)
  }
}

export const onSaveEmailTemplate = async (
  template: string,
  campainId: string
) => {
  try {
    const newTemplate = await client.campaign.update({
      where: {
        id: campainId,
      },
      data: {
        template,
      },
    })

    return { status: 200, message: 'Email template created' }
  } catch (error) {
    console.log(error)
  }
}

export const onAddCustomersToEmail = async (
  customers: string[],
  id: string
) => {
  try {
    console.log(customers, id)
    const customerAdd = await client.campaign.update({
      where: {
        id,
      },
      data: {
        customers,
      },
    })

    if (customerAdd) {
      return { status: 200, message: 'Customer added to campaign' }
    }
  } catch (error) {}
}

export const onBulkMailer = async (email: string[], campaignId: string) => {
  try {

    console.log(email);
    
    const user = await currentUser()
    if (!user) return null

    console.log(user);
    
   // const template = await client.campaign.findUnique({
    //   where: {
    //     id: campaignId,
    //   },
    //   select: {
    //     name: true,
    //     template: true,
    //   },
    // })
    //get the template for this campaign
    const template = await {
      name:"hello from email template ",
      template:"hey this is a very test email"
    }
 

    console.log(template);
    

    if (template && template.template) {
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.NODE_MAILER_EMAIL,
          pass: process.env.NODE_MAILER_GMAIL_APP_PASSWORD,
        },
      })

      console.log(transporter);
      
      const mailOptions = {
        to: email,
        subject: template.name,
        // text:template.template,
        html: emailTemplate
      }

      console.log(mailOptions);
      
    const result = await transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error)
        } else {
          console.log('Email sent: ' + info.response)
        }
      })

      console.log(result);
      


      const creditsUsed = await client.user.update({
        where: {
          clerkId: user.id,
        },
        data: {
          subscription: {
            update: {
              credits: { decrement: email.length },
            },
          },
        },
      })

      console.log(creditsUsed);
      
      if (creditsUsed) {
        return { status: 200, message: 'Campaign emails sent' }
      }
    }
  } catch (error) {
    console.log(error)
  }
}

export const onGetAllCustomerResponses = async (id: string) => {
  try {
    const user = await currentUser()
    if (!user) return null
    const answers = await client.user.findUnique({
      where: {
        clerkId: user.id,
      },
      select: {
        domains: {
          select: {
            customer: {
              select: {
                questions: {
                  where: {
                    customerId: id,
                    answered: {
                      not: null,
                    },
                  },
                  select: {
                    question: true,
                    answered: true,
                  },
                },
              },
            },
          },
        },
      },
    })

    if (answers) {
      return answers.domains
    }
  } catch (error) {
    console.log(error)
  }
}


export const onGetEmailTemplate = async (id: string) => {
  try {
    const template = await client.campaign.findUnique({
      where: {
        id,
      },
      select: {
        template: true,
      },
    });

    if (template) {
      return template.template;
    }
  } catch (error) {
    console.log(error);
  }
};
