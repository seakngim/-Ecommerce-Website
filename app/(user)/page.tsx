"use client";
import ButtonComponent from "@/components/ButtonComponent ";
import CardComponent from "@/components/CardComponent ";
import CardProductComponent from "@/components/CardProductComponent ";
import PaginationComponent from "@/components/PaginationComponent ";
import { BASE_URL } from "@/lip/constants ";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // fetch categories
    fetch(`${BASE_URL}/api/file/category`)
      .then((res) => res.json())
      .then((data) => setCategories(data.results));

    // fetch products
    fetch(`${BASE_URL}/api/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data.results));
  }, []);

  return (
    <main className="container mx-auto">
      {/* heading */}
      <section className="px-4 sm:px-6 lg:px-8">
        <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-5">
          <li>
            <CardComponent
              button="Shop Now"
              title="Casual Trainers"
              image="https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            />
          </li>
          <li>
            <CardComponent
              button="Shop Now"
              title="Winter Jumpers"
              image="https://images.unsplash.com/photo-1624623278313-a930126a11c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            />
          </li>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-span-2 lg:row-start-1">
            <CardComponent
              button="Shop Now"
              title="Skinny Jeans Blue"
              image="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
            />
          </div>
          <div className="lg:col-span-3 lg:col-start-3 lg:row-span-1 lg:row-start-2 p-5">
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl uppercase">
              Product Collection
            </h2>

            <p className="mt-4 py-4 text-gray-500 ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              praesentium cumque iure dicta incidunt est ipsam, officia dolor
              fugit natus?
            </p>
            <div className="flex gap-2 mt-4">
              <ButtonComponent name="Shop Now" />
              <ButtonComponent name="Contact Us" />
            </div>
          </div>
        </ul>
      </section>

      {/* Categories */}
      <section className="text-center py-10 px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold text-[#2372B7] sm:text-3xl uppercase">
          Our Categories
        </h2>
          <Marquee
            gradient
            pauseOnHover={false} // Changed from true to false
            className="overflow-hidden"
          >
            <div className="flex justify-center mt-10 gap-2 pl-2">
              {categories.map((category: any, index: number) => (
                <div
                  key={index}
                  className="text-gray-500 border border-[#2372B7] hover:shadow-xl"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-20 w-40 object-cover transition duration-500 group-hover:scale-105 "
                  />
                </div>
              ))}
            </div>
          </Marquee>
      </section>

      {/* Popular Product */}
      <section className="text-center py-10 flex flex-col items-center ">
        <h2 className="text-xl font-bold text-[#2372B7] sm:text-3xl uppercase pb-4">
          Popular Products
        </h2>
        <div className="flex flex-wrap justify-center mt-4 mb-8 gap-4">
          {products.map((products: any, index: number) => (
            <CardProductComponent
            onClick={() => router.push(`/${products.id}`)}
              key={index}
              title={products.name}
              price={products.price}
              image={products.image}
            />
          ))}
        </div>
        <PaginationComponent />
      </section>
    </main>
  );
}
