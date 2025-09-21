"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import RoleSelect from "./RoleSelect";
import customerIcon from "../../public/images/users.svg";
import handymanIcon from "../../public/images/tools.svg";
import Image from "next/image";

export default function Welcome() {
  const [value, setValue] = useState("customer");
  const router = useRouter();

  function handleContinue() {
    const path = value === "customer" ? "/users" : "/handyman";
    router.push(path);
  }
  return (
    <>
      <div className=" md:w-[90%] md:h-[50%] lg:w-[60%] lg:h-[75%] border mx-auto my-20 flex">
        <div>
          <Image />
        </div>
        <div className="hidden md:block w-[40%] bg-black"></div>
        <div className="w-[60%] flex flex-col justify-center p-8">
          <h1 className="text-4xl font-bold">Welcome!</h1>
          <p className="text-gray-600">Choose your role to continue</p>
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
          <button
            onClick={handleContinue}
            className="border rounded-md w-[75%] p-2 bg-black text-white"
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
}
