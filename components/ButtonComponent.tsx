import { Button } from "flowbite-react";
import React from "react";

type PropType = {
  name: string;
  // className: string;
};
export default function ButtonComponent({ name }: PropType) {
  return (
    <button
      className="mt-1.5 inline-block bg-[#2372B7] px-5 py-3 text-xs font-medium uppercase tracking-wide text-white rounded-lg"
    >
      {name}
    </button>
  );
}