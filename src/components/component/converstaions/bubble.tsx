import React from "react";
import { cn, extractUUIDFromString, getMonthName } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  message: {
    role: "assistant" | "user";
    content: string;
    link?: string;
  };
  createdAt?: Date;
};

const Bubble = ({ message, createdAt }: Props) => {
  let d = new Date();
  const image = extractUUIDFromString(message.content);
  console.log(message.link);

  return (
    <div
      className={cn(
        "flex gap-2 items-end",
        message.role == "assistant" ? "self-start" : "self-end flex-row-reverse"
      )}
    >
      {message.role == "assistant" ? (
        <Avatar className="w-5 h-5">
          <AvatarImage src="https://images.unsplash.com/photo-1646038572815-43fe759e459b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      ) : (
        <Avatar className="w-5 h-5">
          <AvatarImage src="https://images.unsplash.com/photo-1702731798357-22bd8ca4a484?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ3fHxncmFkaWVudHxlbnwwfHwwfHx8MA%3D%3D" alt="@shadcn" />
        </Avatar>
      )}
      <div
        className={cn(
          "flex flex-col gap-3 min-w-[200px] rounded-2xl max-w-[300px] p-4 rounded-t-md",
          message.role == "assistant"
            ? "bg-muted rounded-r-md"
            : " bg-gradient-to-tr from-[#d9b1ff] to-[#b9acff] via-[#ffc7f6]"
        )}
      >
        {createdAt ? (
          <div className="flex gap-2 text-xs text-gray-600">
            <p>
              {createdAt.getDate()} {getMonthName(createdAt.getMonth())}
            </p>
            <p>
              {createdAt.getHours()}:{createdAt.getMinutes()}
              {createdAt.getHours() > 12 ? "PM" : "AM"}
            </p>
          </div>
        ) : (
          <p className="text-xs">
            {`${d.getHours()}:${d.getMinutes()} ${
              d.getHours() > 12 ? "pm" : "am"
            }`}
          </p>
        )}
        {image ? (
          <div className="relative aspect-square">
            <Image src={`https://ucarecdn.com/${image[0]}/`} fill alt="image" />
          </div>
        ) : (
          <p className="text-sm">
            {message.content.replace("(complete)", " ")}
            {message.link && (
              <Link
                className="underline font-bold pl-2"
                href={message.link}
                target="_blank"
              >
                Your Link
              </Link>
            )}
          </p>
        )}
      </div>
    </div>
  );
};

export default Bubble;
