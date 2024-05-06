import React from "react";

type PropType = {
  title: string;
  image: string;
  price: number;
  onClick: () => void;
};

export default function CardProductComponent({
  title,
  image,
  price,
  onClick,
}: PropType) {
  return (
    <a
      href="#"
      className="group relative max-w-sm block overflow-hidden rounded-t-lg"
    >
      <button className="absolute end-4 top-4 z-10 rounded-full bg-white px-4 py-1.5 text-gray-900 transition hover:text-gray-900/75">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="h-4 w-4 text-[#2372B7]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
      </button>
      <div className="border-t border-x hover:border-t hover:border-x border-gray-100 rounded-t-lg">
        <img
         onClick={onClick}
          src={image}
          alt={title}
          className="h-64 w-96 object-cover transition duration-500 group-hover:scale-105 sm:h-72"
        />
      </div>

      <div className="relative border border-gray-100 bg-white p-6 rounded-b-lg">
        <h3 className="text-lg font-medium uppercase text-gray-900">{title}</h3>
        <p className="mt-1.5 text-sm text-gray-700">${price}</p>
      </div>
    </a>
  );
}
