import Image from "next/image";
import React from "react";

export default function RoleSelect({
  text,
  images,
  bgColor = "bg-gray-100",
  textColor = "text-gray-900",
  selected = false,
  onSelect,
}) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={onSelect}
      className={[
        "md:w-[75%] rounded-md px-4 py-3 flex items-center justify-between transition border-2",
        bgColor,
        textColor,
        selected
          ? "bg-white border-gray-900 shadow-sm"
          : "border-transparent hover:bg-gray-200",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className="flex items-center gap-2">
        <Image
          src={images}
          alt="role icon"
          width={20}
          height={20}
          className="h-5 w-5"
        />
        <span className="text-sm">{text}</span>
      </span>

      {selected && (
        <span className="text-xs px-2.5 py-1 rounded-full border bg-green-50 border-green-200 text-green-600">
          Selected
        </span>
      )}
    </button>
  );
}
