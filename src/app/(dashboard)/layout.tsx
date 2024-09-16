import SideBar from "@/components/sidebar";
import { getUserDatils } from "@/lib/actions/user-actions";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = async (props: Props) => {
  const user = await getUserDatils();
  if (!user?.user) {
    return redirect("/auth/sign-in");
  }
  return (
    <div className="flex h-screen w-full">
    <SideBar domains={user.domain} />
    <div className="w-full min-h-screen overflow-y-auto flex flex-col pl-20 md:pl-4">
      {props.children}
    </div>
  </div>
  )
};

export default layout;
