"use client";

import { useState } from "react";
import homeIcon from "../../public/images/home.png";
import menuIcon from "../../public/images/menu.png";
import servicesIcon from "../../public/images/briefcase.png";
import logoutIcon from "../../public/images/logout.png";
import bookingsIcon from "../../public/images/calendar.png";
import messagesIcon from "../../public/images/mail.png";
import bookmarksIcon from "../../public/images/bookmark.png";
import supportIcon from "../../public/images/support.png";
import UserProfile from "./UserProfile";
import profilePic from "../../public/images/profile-pic.png";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  const menuItems = [
    { id: 1, option: "Home", link: "/", img: homeIcon },
    { id: 2, option: "Services", link: "/", img: servicesIcon },
    { id: 3, option: "Bookings", link: "/", img: bookingsIcon },
    { id: 4, option: "Messages", link: "/", img: messagesIcon },
    { id: 5, option: "Bookmarks", link: "/", img: bookmarksIcon },
    { id: 6, option: "Help & Support", link: "/", img: supportIcon },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 w-full bg-white py-3 z-50 shadow-md">
        <div className="">
          <div
            className={
              isOpen
                ? "hidden"
                : "w-[90%] mx-auto grid grid-cols-2 gap-3 items-center"
            }
          >
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsOpen((v) => !v)}
                className="border py-1 px-3 rounded-xl"
                aria-expanded={isOpen}
                aria-controls="main-menu"
              >
                Menu
              </button>
              <Link href="/">
                <h2 className="text-center text-2xl font-bold">
                  Fix<span className="text-gray-500">It</span>
                </h2>
              </Link>
            </div>
            <div className="flex justify-end items-center">
              <UserProfile profilePic={profilePic} />
            </div>
          </div>

          <div
            id="main-menu"
            className={isOpen ? "flex flex-col gap-5" : "hidden"}
          >
            <div>
              <div className={isOpen ? "flex flex-col gap-5" : "hidden"}>
                <div className="w-[90%] mx-auto flex justify-between items-center">
                  <UserProfile
                    name="Priscilla Daniel"
                    location="Lagos, Nigeria"
                    profilePic={profilePic}
                  />
                  <button
                    onClick={() => setIsOpen((v) => !v)}
                    className="border py-1 px-3 rounded-xl"
                    aria-expanded={isOpen}
                    aria-controls="main-menu"
                  >
                    Menu
                  </button>
                </div>
                <hr className="text-gray-400" />
              </div>
            </div>
            <nav className="w-[90%] mx-auto flex flex-col justify-between h-[70vh]">
              <ul className="flex flex-col gap-1">
                {menuItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 py-3">
                    <Image
                      src={item.img}
                      width={30}
                      height={30}
                      alt="menu image"
                      className="w-5 h-5"
                    />
                    <li className="text-xl text-gray-700">{item.option}</li>
                  </div>
                ))}
              </ul>
              <Link href="\login" className="flex items-center gap-3 py-3">
                <Image
                  src={logoutIcon}
                  width={30}
                  height={30}
                  alt="menu image"
                  className="w-5 h-5"
                />
                <button className="text-left text-red-500 cursor-pointer">Logout</button>
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
