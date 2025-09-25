"use client";

import React, { useState } from "react";
// import { useRouter } from "next/navigation";
import RoleSelect from "./RoleSelect";
import customerIcon from "../../public/images/users.svg";
import handymanIcon from "../../public/images/tools.svg";
import handymanImage from "../../public/images/handyman.png";
import Image from "next/image";
import SmallCards from "./SmallCards";
import acceptIcon from "../../public/images/accept.png";
import starIcon from "../../public/images/star.png";
import suitcaseIcon from "../../public/images/suitcase.png";
import TopRightCorner from "./TopRightCorner";
import GreenSwoosh from "./GreenSwoosh";
import BlueFooter from "./BlueFooter";
import Link from "next/link";

export default function Welcome() {
  const [value, setValue] = useState("customer");
  // const router = useRouter();

  // function handleContinue() {
  //   const path = value === "customer" ? "/login" : "/handyman";
  //   router.push(path);
  // }
  return (
    <>
      <div className="flex flex-col justify-center items-center md:flex-row md:w-[90%] md:h-[50%] lg:w-[60%] lg:h-[75%] md:border mx-auto my-10 md:my-20">
        <TopRightCorner />
        <h2 className="text-center text-4xl font-bold md:hidden py-5">
          Fix<span className="text-gray-500">It</span>
        </h2>
        <div className="w-[95%] h-96 flex justify-center relative md:hidden">
          <Image
            src={handymanImage}
            width={1000}
            height={1000}
            alt="Handyman image"
            className="w-64 h-auto object-fit pt-5"
          />
          <SmallCards
            top="top-5"
            left="left-0"
            right="right-80"
            bottom="bottom-75"
            image={suitcaseIcon}
          />
          <SmallCards
            top="top-60"
            left="left-10"
            right="right-70"
            bottom="bottom-20"
            image={acceptIcon}
          />
          <SmallCards
            top="top-30"
            left="left-55"
            right="right-10"
            bottom="bottom-50"
            image={starIcon}
          />
        </div>
        <GreenSwoosh />
        <div className="hidden md:block h-full w-[40%] bg-black"></div>
        <div className="w-[90%] md:w-[60%] flex flex-col justify-center py-8 md:px-5">
          <h1 className="text-4xl font-bold text-center md:text-left">
            Welcome!
          </h1>
          <p className="text-gray-600 text-center md:text-left">
            Choose your role to continue
          </p>
          <div className="flex flex-col gap-3 my-10">
            <RoleSelect
              text="I am a customer"
              images={customerIcon}
              bgColor="bg-gray-100"
              textColor="text-gray-900"
              selected={value === "customer"}
              onSelect={() => setValue("customer")}
            />
            <RoleSelect
              text="I am a handyman"
              images={handymanIcon}
              bgColor="bg-gray-100"
              textColor="text-gray-900"
              selected={value === "handyman"}
              onSelect={() => setValue("handyman")}
            />
          </div>
          <Link href="/login">
            <button className="w-[100%] border rounded-md md:w-[75%] py-3 bg-black text-white">
              Continue
            </button>
          </Link>
        </div>
      </div>
      <BlueFooter />
    </>
  );
}
