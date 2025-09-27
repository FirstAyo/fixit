"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import rightArrow from "../../public/images/arrow-right.png";

export default function ServicesCard({
  items = [],
  limit,
  title = "",
  horizontal = false, // <- NEW: opt-in for horizontal scrolling
  gridCols = "lg:grid-cols-3", // optional: control grid columns
  showArrows = true, // optional: show arrow buttons in horizontal mode
}) {
  const list = limit ? items.slice(0, limit) : items;
  const scrollerRef = useRef(null);

  const scrollByCards = (dir = 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("li");
    const delta = (card?.offsetWidth || 300) + 16; // card width + gap
    el.scrollBy({ left: dir * delta * 2, behavior: "smooth" });
  };

  // Classes/layout switch
  const wrapperClass = horizontal
    ? `overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden relative`
    : ``;

  const listClass = horizontal
    ? `flex flex-nowrap gap-4 snap-x snap-mandatory px-1 list-none py-1`
    : `grid ${gridCols} gap-5 px-1 list-none py-1`;

  const itemClass = horizontal
    ? `flex-none w-72 snap-start shadow-xl relative rounded-xl bg-white`
    : `shadow-xl relative rounded-xl bg-white`;

  return (
    <div className="mt-20 mb-5">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-semibold">{title}</h2>

        {horizontal && showArrows && (
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scrollByCards(-1)}
              className="px-3 py-1 border rounded-lg"
              aria-label="Scroll left"
            >
              ←
            </button>
            <button
              onClick={() => scrollByCards(1)}
              className="px-3 py-1 border rounded-lg"
              aria-label="Scroll right"
            >
              →
            </button>
          </div>
        )}
      </div>

      <div
        ref={scrollerRef}
        className={wrapperClass}
        aria-label="Service cards"
      >
        {/* Edge fades only in horizontal mode */}
        {horizontal && (
          <>
            <div className="pointer-events-none absolute left-0 top-0 h-full w-6 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-6 bg-gradient-to-l from-white to-transparent" />
          </>
        )}

        <ul className={listClass}>
          {list.map((service) => (
            <li key={service.id} className={itemClass}>
              <Link href="/">
                <Image
                  src={service.image}
                  width={288}
                  height={192}
                  alt={service.title}
                  unoptimized
                  className={`w-full h-48 object-cover rounded-t-xl`}
                />
                <div className="p-5 flex flex-col gap-2">
                  <h3 className="font-semibold">{service.title}</h3>
                  <div className="flex gap-3 items-center">
                    <Image
                      src={service.handyman.avatar}
                      width={30}
                      height={30}
                      alt={service.handyman.name}
                      unoptimized
                      className="rounded-full"
                    />
                    <p className="text-sm">{service.handyman.name}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="font-medium">{service.cost.display}/hr</p>
                    <Image
                      src={rightArrow}
                      width={20}
                      height={20}
                      alt=""
                      className="opacity-70"
                    />
                  </div>
                </div>
              </Link>

              <p className="bg-amber-500 text-white absolute top-3 left-3 px-3 py-1 rounded-lg text-xs">
                {service.category}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
