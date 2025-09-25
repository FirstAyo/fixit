import Image from "next/image";
import React from "react";

export default function UserProfile({ name, location, profilePic }) {
  return (
    <>
      <div className="flex items-center gap-3">
        <div className="">
          <Image
            src={profilePic}
            width={30}
            height={30}
            alt="test image"
            className="w-16 h-16 rounded-full object-fill"
          />
        </div>
        <div>
          <h2 className="font-bold">{name}</h2>
          <p className="text-sm text-center">{location}</p>
        </div>
      </div>
    </>
  );
}
