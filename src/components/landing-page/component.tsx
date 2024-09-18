import React from "react";
import LandingPage from "../spline/landing-page";
import Image from "next/image";
import NavBar from "../navbar";
import AnimatedCrad from "../cards-animated";
import Link from "next/link";

const Component = () => {
  return (
    <main className=" w-full min-h-screen bg-black">
      <LandingPage />
      <div className=" flex flex-row relative justify-center items-center w-full min-h-screen ">
        <NavBar />
        <div className=" w-1/2 z-10 h-screen flex flex-col justify-center items-center">
          <h1 className=" text-[80px] text-[#fcecec] font-serif">
            In &quot;future&quot; together
          </h1>
          <p className=" text-lg font-serif text-[#e1d1d1] text-center">
            Unicorn AI revolutionizes the way businesses engage with their
            audience through its cutting-edge platform. Our state-of-the-art
            features include advanced email marketing tools, allowing users to
            effortlessly launch targeted campaigns and drive impactful
            interactions with their product users. Additionally, Unicorn AI
            empowers businesses with an intelligent AI chatbot that seamlessly
            integrates into their platform. This dynamic assistant not only
            responds to user queries with precision but also enhances user
            experience by providing relevant and timely information. Whether
            you&apos;re aiming to boost your marketing efforts or provide
            exceptional customer support, Unicorn AI offers a comprehensive
            solution designed to elevate your digital strategy. Embrace the
            future of AI-driven communication and watch your business thrive
            with Unicorn AI.
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
      <AnimatedCrad />

      <div className=" flex justify-center items-center w-full h-screen">
        <Image
          src={"/images/demo.png"}
          width={1000}
          priority
          height={1000}
          alt=""
          className=" w-10/12 h-auto object-cover  rounded-3xl"
        />
      </div>

      <div className=" flex flex-row relative justify-center items-center w-full min-h-screen ">
        <div className=" w-[40%] z-10 h-screen flex flex-col justify-center items-center">
          <h1 className="text-[40px] font-fragment text-center text-[#d0cfcf] font-medium">
            Revolutionize Your Buisness Experience with Unicorn Ai
          </h1>
          <p className=" text-sm z-10 font-serif text-[#888888] text-center">
            Our mission is to empower individuals and businesses to confidently
            and securely conduct peer-to-peer transactions
          </p>
        </div>

        <video
          className=" w-1/2 h-full  object-cover"
          src="/images/flash.mp4"
          autoPlay
          loop
          muted
        />
      </div>

      <div className=" w-full h-screen relative flex justify-center items-center flex-col ">
        <h1 className="text-[180px] font-fragment max-[1700px]:text-[100px] max-sm:text-[75px] text-white z-10">
          Let&apos;s talk
        </h1>
        <h4 className=" text-gray-300 text-xl font-fragment font-extralight z-10">
          don&apos;t hesitate to reach out
        </h4>
        <Link href="https://github.com/ShahSujal" target="_blank" className="z-10 mt-5">
          <button className=" w-44 backdrop-blur-2xl text-white font-fragment font-bold h-8 rounded-2xl bg-[#77777748]">
            Connect
          </button>
        </Link>
        <video
          className=" w-full h-full absolute top-0 left-0  object-cover"
          src="/images/ai.mp4"
          autoPlay
          loop
          muted
        />
      </div>
    </main>
  );
};

export default Component;
