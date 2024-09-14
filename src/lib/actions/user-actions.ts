import { currentUser } from "@clerk/nextjs";
import { client } from "../prisma";
import { onGetAllAccountDomains } from "@/actions/settings";

export const getUserDatils = async () => {
  try {
    const user = await currentUser();
    if (!user) {
      return null;
    }
    const platformUser = await client.user.findUnique({
      where: {
        clerkId: user.id,
      },
      select: {
        fullname: true,
        id: true,
        type: true,
      },
    });
    if (user) {
        const domains = await onGetAllAccountDomains()
        return { user: user, domain: domains?.domains }
      }
  } catch (error) {}
};

export const getUserClients = async () => {
    try {
      const user = await currentUser()
      if (user) {
        const clients = await client.customer.count({
          where: {
            Domain: {
              User: {
                clerkId: user.id,
              },
            },
          },
        })
        if (clients) {
          return clients
        }
      }
    } catch (error) {
      console.log(error)
    }
  }