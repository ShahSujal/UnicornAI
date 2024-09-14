"use client";
import PersonIcon from "@/icons/person-icon";
import PremiumBadge from "@/icons/premium-badge";
import Image from "next/image";
import React from "react";
import { GraphhChart } from "./graph";
// import { PlanUsage } from "@/components/dashboard/plan-usage";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plans } from "@prisma/client";
import { PlanUsage } from "./plan-usage";

type Props = {
  clients: number | undefined;
  bookings:
    | {
        id: string;
        date: Date;
        slot: string;
        email: string;
        customerId: string | null;
        domainId: string | null;
        createdAt: Date;
      }[]
    | undefined;
  plan:
    | {
        plan: Plans | undefined;
        credits: number | undefined;
        domains: number | undefined;
      }
    | undefined;
  user:
    | {
        id: string;
        fullname: string;
        type: string;
      }
    | undefined;
};
const DashBoard = (props: Props) => {
  // console.log({
  //   props
  // });

  return (
    <main className="overflow-y-auto w-full chat-window flex-1 h-0">
      <div className=" flex justify-between items-center flex-row h-[90px] w-full ">
        <h1 className="text-black font-semibold text-2xl ml-4">Dashboard</h1>
        <div className=" w-[160px] h-[full] flex justify-center items-center flex-row  p-1 rounded-3xl border-black mr-3">
          <Link href={"/settings"}>
          <h1 className=" text-black font-semibold text-xl pr-2">Sujal Shah</h1>
          
          </Link>
          <Image
            src={
              "https://images.unsplash.com/photo-1604076850742-4c7221f3101b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="profile"
            width={60}
            height={60}
            className="rounded-full w-6 h-6 object-cover"
          />
        </div>
      </div>
      <div className=" w-full min-h-screen bg-[#efeeee] flex justify-center items-center flex-row max-md:flex-col ">
        {/* Title */}

        <div className=" w-2/3 min-h-screen">
          <div className=" flex justify-center items-center flex-row w-full h-[400px]">
            <div className=" bg-[#fff] w-[40%] justify-around items-center h-full flex flex-col  rounded-2xl">
              <div className=" flex justify-between w-full p-4 items-center flex-row ">
                <h1 className=" text-2xl text-black font-semibold  pr-2">
                  Profile
                </h1>
                <PremiumBadge />
              </div>
           <div className=" w-full h-44 relative flex justify-center items-center ">
           <Image
                src={
                  "https://images.unsplash.com/photo-1604076913837-52ab5629fba9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt="profile"
                width={400}
                height={400}
                className="rounded-full w-44 h-44 blur-lg object-cover"
              />
              <h1 className="text-[80px] absolute ">
                👋
              </h1>

           </div>

              <h1 className=" text-black font-semibold text-xl pr-2">
                Good Evening, {props.user?.fullname}{" "}
              </h1>
            </div>

            <div className="  w-[50%] justify-around items-center h-full flex flex-col  rounded-2xl">
              <div className=" w-[80%] justify-between items-center h-[45%] flex flex-row  rounded-2xl">
                <div className=" bg-gradient-to-tr from-[#e3b0f3] to-[#baa9ff] via-[#ffacc1] w-[45%] justify-center items-center h-[95%] flex flex-col  rounded-2xl">
                  {/* <div className=" flex justify-between w-full p-4 items-center flex-row ">
                  <h1 className=" text-xl text-white font-semibold  pr-2">
                    Total Clients
                  </h1>
                  <PersonIcon />
                </div> */}

                  <h1 className=" text-white font-semibold text-[42px] pr-2">
                    {props.clients}
                  </h1>
                  <h1 className=" text-white font-semibold text-[15px] ">
                    Users
                  </h1>
                </div>
                <div className=" bg-gradient-to-tr from-[#e3b0f3] to-[#baa9ff] via-[#ffacc1] w-[45%] justify-center items-center h-[95%] flex flex-col  rounded-2xl">
                  <h1 className=" text-white font-semibold text-[42px] pr-2">
                    {props.bookings?.length}
                  </h1>
                  <h1 className=" text-white font-semibold text-[15px] ">
                    Booking
                  </h1>
                </div>
              </div>

              <div className=" bg-gradient-to-tr from-[#b4d0ff] to-[#95c0ff] via-[#b9e6ed] w-10/12 justify-center items-center h-[45%]  flex flex-col  rounded-2xl">
                <div className=" flex justify-center w-full  items-center flex-row ">
                  
                  {/* <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width={40}
                    height={40}
                  >
                   
                    <path d="M11.176 0s-.681 1.938-.867 2.527C9.844 2.202 8.386 1.194 7.78.775c.14.806.356 2.124.403 2.403-.124-.093-.821-.698-1.875-1.194.589.682 1.008 1.736 1.271 2.588a10.566 10.566 0 0 1 5.238-1.379c.977 0 1.94.14 2.854.403.093-.884.279-1.968.682-2.758-.915.728-1.474 1.503-1.551 1.596-.031-.186-.093-1.52-.17-2.434-.372.403-1.8 2.016-2.063 2.264C12.384 1.938 11.176 0 11.176 0zm1.674 3.86c-1.674 0-3.3.386-4.696 1.115.713.046 1.224.668 1.395 1.164-.558-.45-1.442-.667-1.985-.078-.511.589-.464 1.688.047 2.572-1.193-.605-1.194-2.185-.775-2.867A10.392 10.392 0 0 0 3.61 9.594l1.07.172c-1.24 1.426-2.107 3.953-2.107 5.146l1.75-.543c-.31 1.054-.401 4.602.653 6.385 0 0 1.38-.96 2.945-3.363.65 2.17.356 3.985 0 5.767 2.82 1.581 6.09.696 8.012-.683l.357 1.35c2.248-1.489 3.488-3.628 3.72-6.124l.837.93c1.286-3.829.28-6.883-1.565-9.502l-.078.637-.79-.87s.17-.077.31-.263c.03-.078-.046-.495-.371-.774-.31.078-.56.264-.684.45a3.222 3.222 0 0 0-.93-.543c.062.077.604.79.65 1.007.466.388 1.102.837 1.52 1.395-.34-.403-1.984-.497-2.728-.078 0 0-.744-.868-1.426-1.473-.14-.511.326-.96.326-.96s-.48-.03-.93.42c-.682-.512-1.55-.745-1.55-.745-.961.14-1.612.82-1.612.82.217.14.512.327.776.42.511.217 1.006.139 1.332.139.263 0 .636.078.636.078s.635.495 1.565 1.565c-1.426-.574-2.915.062-3.969-.45-1.24-.62-1.146-1.595-1.146-1.595s-.836-.11-.836-.141c0 0 .618-.82 1.548-1.1l-.464-.402c.558-.465 1.534-1.085 3.115-1.24 0 0 .683.262 2.11 1.285.232-.326.308-1.008.308-1.008.728.248 2.217 1.333 2.806 1.984-.325-.759-.559-1.223-.636-2.013-.357-.357-1.24-1.101-3.069-1.551.295.605.264 1.115.264 1.115-.34-.45-1.055-1.146-1.55-1.332-.295-.015-.605-.047-.93-.047zm3.271 7.068a4.323 4.323 0 0 0 1.256.697v1.348c-.465.403-1.985 1.675-3.008 1.566-.573-1.1-1.115-2.107-1.115-2.107s1.565-1.318 2.867-1.504zm2.975.031c.465 1.131.59 2.48.078 3.379-.28-.605-.636-.947-1.008-1.35v-1.347s.418-.264.93-.682zm-.977 3.395c.465.511.559 1.068.559 1.068-.202 1.131-.836 1.846-1.301 2.14.046-.821-.172-1.519-.172-1.519-.34.372-1.13.743-1.596.836l-.697-1.3c.822-.032 2.201-1.194 2.201-1.194l1.006-.031z" />
                  </svg> */}
                </div>

                <h1 className=" text-white font-bold text-[36px]">
                  {props.plan?.plan}
                </h1>
                <h1 className=" text-2xl text-gray-600 font-semibold uppercase  ">
                    plan
                  </h1>
                {/* <h1 className=" text-white font-semibold text-2xl ">Users</h1> */}
              </div>
            </div>
          </div>

          <div className="grid gap-4 w-full p-6 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
            <Card className="xl:col-span-3" x-chunk="dashboard-01-chunk-4">
              <CardHeader className="flex flex-row items-center">
                <div className="grid gap-2">
                  <CardTitle>Appointments</CardTitle>
                  <CardDescription>
                    Recent Appointments on your domain.
                  </CardDescription>
                </div>
                <Button asChild size="sm" className="ml-auto gap-1">
                  <Link href="#">
                    View All
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer</TableHead>
                      {/* <TableHead className="hidden xl:table-column">
                        Type
                      </TableHead>
                      <TableHead className="hidden xl:table-column">
                        Status
                      </TableHead>
                      <TableHead className="hidden xl:table-column">
                        Date
                      </TableHead> */}
                      <TableHead className="text-right">Join Link</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {props.bookings?.map((item) => {
                      return (
                        <TableRow key={item.customerId}>
                          <TableCell>
                            <div className="font-medium">{item.email}</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              {item.date.toDateString()}
                            </div>
                          </TableCell>
                          {/* <TableCell className="hidden xl:table-column">
                        Sale
                      </TableCell>
                      <TableCell className="hidden xl:table-column">
                        <Badge className="text-xs" variant="outline">
                          Approved
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                     
                      </TableCell> */}
                          <TableCell className="text-right">
                            <Button>Join</Button>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className=" w-1/3 h-full flex flex-col">
          <div className=" w-full h-[430px] rounded-2xl ">
            <GraphhChart />
          </div>

          <div className=" w-full p-2 rounded-2xl h-[400px] bg-white  mt-10">
            <PlanUsage
              plan={props.plan?.plan || "PRO"}
              credits={props.plan?.credits || 0}
              domains={props.plan?.domains || 0}
              clients={props.clients || 0}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashBoard;
