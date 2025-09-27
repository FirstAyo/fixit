import React from "react";
import houseIcon from "../../public/images/home.png";
import painterIcon from "../../public/images/paint-roller.png";
import electricalIcon from "../../public/images/plug.png";
import furnitureIcon from "../../public/images/sofa.png";
import carpentryIcon from "../../public/images/hammer.png";
import plumbingIcon from "../../public/images/tap.png";
import moreIcon from "../../public/images/more.png";
import assembleIcon from "../../public/images/tool.png";
import Link from "next/link";
import Image from "next/image";

export default function CategoryList() {
  const categories = [
    { id: 1, name: "House", url: "/", image: houseIcon },
    { id: 2, name: "Carpentry", url: "/", image: carpentryIcon },
    { id: 3, name: "Electrical", url: "/", image: electricalIcon },
    { id: 4, name: "Plumbing", url: "/", image: plumbingIcon },
    { id: 5, name: "Furniture", url: "/", image: furnitureIcon },
    { id: 6, name: "Painting", url: "/", image: painterIcon },
    { id: 7, name: "Assembling", url: "/", image: assembleIcon },
    { id: 8, name: "More", url: "/", image: moreIcon },
  ];

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1>Categories</h1>
        <Link href="/">See All</Link>
      </div>
      <div className="my-10">
        <ul className="grid grid-cols-4 gap-5">
          {categories.map((category) => (
            <li key={category.id}>
              <Link
                href={category.url}
                className="flex flex-col items-center gap-3"
              >
                <div className="bg-gray-200 p-3 rounded-full">
                  <Image src={category.image} width={40} height={40} className="p-1"/>{" "}
                </div>
                <p>{category.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
