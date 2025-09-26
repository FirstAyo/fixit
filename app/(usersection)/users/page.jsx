import NavBar from "@/app/components/NavBar";
import React from "react";

export default function UserDashboard() {
  return (
    <>
      <div>
        <NavBar />
        <div className="w-[90%] mx-auto">
          <input type="text" placeholder="Search for a service, handyman" className="w-full mx-auto py-3 rounded-md px-4 bg-gray-100" />
        </div>
      </div>
    </>
  );
}
