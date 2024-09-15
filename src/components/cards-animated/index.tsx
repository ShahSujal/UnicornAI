"use client";
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import EmailIcon from '@/icons/email-icon';
import { Bell, Calendar, CalendarClock, Mail, MessagesSquareIcon } from 'lucide-react';

const AnimatedCrad = () => {
  return (
    <div className="flex w-full flex-row justify-center items-center h-[140vh] bg-black">
      <div className="w-[350px] h-screen flex mt-44 mx-5 flex-col">
        <TorchEffectCard title={"Email Marketing"} icon={<Mail width={20} height={20}/>} />
        <TorchEffectCard  title={"ChatBot"} icon={<MessagesSquareIcon width={20} height={20}/>}/>
      </div>
      <div className="w-[350px] h-screen flex mx-5 flex-col">
        <TorchEffectCard  title={"Appoinments"} icon={<CalendarClock width={20} height={20}/>} />
        <TorchEffectCard  title={"Notification"} icon={<Bell width={20} height={20}/>} />
      </div>
    </div>
  );
};
export default AnimatedCrad;
type TorchEffectCardProps = {
  title: string;
  icon: React.ReactNode;
}
const TorchEffectCard = ({title,icon}:TorchEffectCardProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 140, y: 130 }); // Center of a 300x300 card
  const [isHovered, setIsHovered] = useState(false); // Initially set to false

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 123, y: 123 }); // Reset to center
  };

  return (
    <div
      className="w-[300px] h-[300px] relative cursor-pointer flex justify-center items-center overflow-hidden my-9 rounded-xl bg-[#2b2b2b] transition "
      style={{
        boxShadow: isHovered ? 'none': '3px 3px 95px rgba(200, 200, 200, 0.1)' ,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 border-4 border-transparent rounded-xl">
        <div className="absolute inset-0 border-4 border-blue-500 rounded-xl animate-pulse"></div>
      </div>
      <Image
        src="/images/adobe.jpg"
        height={1080}
        width={1080}
        alt=""
        className={`rounded-xl absolute top-0 duration-1000 transition object-cover mix-blend-multiply w-[550px] h-[550px] ${
          isHovered ? 'saturate-100' : 'saturate-200 opacity-100'
        }`}
      />
      <motion.div
        className="absolute inset-0 flex justify-center items-center"
        style={{
          WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1), rgba(0,0,0,0.2), transparent)',
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskPosition: `${mousePosition.x - 115}px ${mousePosition.y - 115}px`,
          WebkitMaskSize: '270px 270px',
        }}
        animate={{
          WebkitMaskPosition: `${mousePosition.x - 115}px ${mousePosition.y - 115}px`,
        }}
        transition={{ type: 'tween', ease: 'easeOut', duration: isHovered ? 0.1 : 2 }}
      >
        <Image
          src="/images/adobe.jpg"
          height={1080}
          width={1080}
          alt=""
          className="rounded-xl absolute top-0 object-cover animate-pulse w-[550px] h-[550px]"
          style={{ filter: 'brightness(200%) saturate(200%)' }}
        />
        <div
          className={`text-xl absolute font-bold flex justify-center items-center flex-col z-40 transition-colors duration-300  text-white `}
          style={{textShadow: '8px 8px 10px rgba(255,255,255,0.5)'}}
        >
          {icon}
         {title}
        </div>
      </motion.div>
    </div>
  );
};