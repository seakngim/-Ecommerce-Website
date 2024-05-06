import { decrement, increment } from "@/redux/feature/action/counterSlice ";
import { useAppDispatch, useAppSelector } from "@/redux/hook ";
import React from "react";
type PropType = {
  title: string;
  image: string;
  price: number;
  seller: string;
  category: string;
  quantity: number;
  desc: string;
  onClick: () => void;
};

export default function ProductDetail({
  title,
  image,
  seller,
  category,
  quantity,
  desc,
  price,
  onClick,
}: PropType) {
  const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => state.counter.value);

  return (
    <section className="overflow-hidden rounded-lg shadow-2xl md:grid md:grid-cols-3">
      <img
        alt={title}
        src={image}
        className="h-32 w-full object-cover md:h-full"
      />

      <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
        <p className="text-sm font-semibold uppercase tracking-widest">
          {title}
        </p>

        <h2 className="mt-6 font-black ">
          <span className="text-4xl font-black sm:text-5xl uppercase lg:text-6xl">
            Special Price ${price}
          </span>
          <p className="mt-2 block text-sm">
            Seller: <span>{seller}</span>
          </p>
          <p className="mt-2 block text-sm">
            Category: <span>{category}</span>
          </p>
          {/* <p className="mt-2 block text-sm">
            In stock: <span>{quantity}</span>
          </p>
          <p className="mt-2 block text-sm">
            Quantity:
            <button onClick={() => dispatch(decrement())}>-</button>
            <p>{counter}</p>
            <button onClick={() => dispatch(increment())}>+</button>
          </p> */}
          <p className="mt-2 block text-sm">{desc}</p>
        </h2>

        <div className="flex gap-4">
          <a
            className="mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white"
            href="#"
          >
            Add to Cart
          </a>
          <a
            className="mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white"
            href="#"
          >
            By Now
          </a>
        </div>

        <p className="mt-8 text-xs font-medium uppercase text-gray-400">
          Offer valid until 24th March, 2021 *
        </p>
      </div>
    </section>
  );
}
