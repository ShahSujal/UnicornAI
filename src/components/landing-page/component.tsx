import React from "react";
import LandingPage from "../spline/landing-page";
import Image from "next/image";
import NavBar from "../navbar";
import { Calendar, Mail } from "lucide-react";
import AnimatedCrad from "../cards-animated";

const Component = () => {

  return (
    <main className=" w-full min-h-screen bg-black">
      <LandingPage />
      <div className=" flex flex-row relative justify-center items-center w-full min-h-screen ">
        <NavBar/>
        <div className=" w-1/2 z-10 h-screen flex flex-col justify-center items-center">
          <h1 className=" text-[80px] text-[#fcecec] font-serif">
            In "future" together
          </h1>
          <p className=" text-lg font-serif text-[#e1d1d1] text-center">
            Our mission is to empower individuals and businesses to confidently
            and securely conduct peer-to-peer transactions through our platform.
            We achieve this by offering a compliant and reliable escrow service,
            verifying user identities through robust know-your-customer (KYC)
            processes, and providing over-the-counter (OTC) trading
            capabilities. Our goal is to create a seamless and secure
            environment for our users to buy and sell assets or products with
            each other.
          </p>
        </div>

      
        <div className=" flex justify-center items-center w-[80%] h-[80%] absolute ">
          <div
            className=" absolute top-0 left-0 w-full h-full "
            style={{
              background:
                "radial-gradient(circle at center, transparent 50%, rgba(0, 0, 0, 1) 80%)",
            }}
          ></div>
          <video
            className=" w-full h-full  object-cover"
            src="/images/fluid.mp4"
            autoPlay
            loop
            muted
          />
        </div>
      </div>
      <div className=" flex justify-center items-end w-full min-h-[60vh]">
     <h1 className=" text-[175px] font-paps font-medium text-white">
      Services
     </h1>
        </div>
   <AnimatedCrad/>

      <div className=" flex flex-row relative justify-center items-center w-full min-h-screen ">
        <div className=" w-[40%] z-10 h-screen flex flex-col justify-center items-center">
          <h1 className="text-[40px] font-fragment text-center text-[#d0cfcf] font-medium">
            Revolutionize Your Buisness Experience with Unicorn Ai
          </h1>
          <p className=" text-sm font-serif text-[#888888] text-center">
            Our mission is to empower individuals and businesses to confidently
            and securely conduct peer-to-peer transactions 
          </p>
        </div>

        <video
            className=" w-1/2 h-full  object-cover"
            src="/images/boll.mp4"
            autoPlay
            loop
            muted
          />
      </div>
    </main>
  );
};

export default Component;
