import NavBar from "@/app/components/NavBar";
import ServicesCard from "@/app/components/ServicesCard";
import React from "react";
import data from "../../data/services.json";
import CategoryList from "@/app/components/CategoryList";

export default function UserDashboard() {
  return (
    <>
      <div>
        <NavBar />
        <div className="w-[90%] mx-auto">
          <div>
            <input
              type="text"
              placeholder="Search for a service, handyman"
              className="w-full mx-auto py-3 rounded-md px-4 bg-gray-100"
            />
          </div>
          <ServicesCard
            items={data}
            limit={5}
            title="Recommded for you"
            horizontal
          />
          <CategoryList />
        </div>
      </div>
    </>
  );
}
