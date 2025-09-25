import Link from "next/link";
import React from "react";
import appleIcon from "../../public/images/apple.png";
import fbIcon from "../../public/images/facebook.png";
import googleIcon from "../../public/images/google.png";
import Image from "next/image";

export default function UserLogin() {
  const socialIcons = [googleIcon, fbIcon, appleIcon];
  return (
    <div className="mx-auto md:w-[60%] flex flex-col justify-center items-center my-28">
      <div className="w-[90%] mx-auto md:w-[60%] flex flex-col gap-5">
        <div>
          <h2 className="text-4xl font-bold leading-12 text-center">
            Welcome Back
          </h2>
          <p className="text-center py-1 text-gray-500">Login to your account</p>
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your Email address"
            required
            className="px-4 py-3 border rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            required
            className="px-4 py-3 border rounded-lg"
          />
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <input type="radio" name="radio" id="radio" />
            <label htmlFor="radio">Remember me</label>
          </div>
          <div>
            <Link href="/">Forgot password?</Link>
          </div>
        </div>
        <button className="text-white bg-black py-3 rounded-lg my-5">
          <Link href="/">Log in</Link>
        </button>
      </div>

      <p className="my-5">
        Don't have an account?{" "}
        <span>
          <Link href="/register" className="font-bold underline">
            Sign Up
          </Link>
        </span>
      </p>

      <div className="grid grid-cols-3 justify-center items-center gap-2 w-[90%] md:w-[60%]">
        <hr className="text-gray-400" />
        <p className="text-center">or continue with</p>
        <hr className="text-gray-400" />
      </div>

      <Link href="/" className="grid grid-cols-3 gap-5 w-[90%] md:w-[60%] my-5">
        {socialIcons.map((socialIcon, index) => (
          <div
            key={index}
            className="border py-2 w-full flex justify-center rounded-lg"
          >
            <Image src={socialIcon} width={30} height={30} alt="test image" />
          </div>
        ))}
      </Link>
    </div>
  );
}
