import Image from "next/image";
import React from "react";

export default function SmallCards({ top, bottom, right, left, image }) {
  return (
    <div
      className={`flex bg-gray-100 justify-center items-center gap-3 rounded-xl w-40 py-1 absolute ${top} ${bottom} ${right} ${left}`}
    >
      <div>
        <Image src={image} width={40} height={40} alt="accept icon" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-2xl font-bold">100+</p>
        <p className="">Services</p>
      </div>
    </div>
  );
}
