"use client"
import ProductDetail from "@/components/ProductDetail ";
import { BASE_URL } from "@/lip/constants ";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function page() {
    const router = useRouter();
    const [product, setProduct] = useState([]);
    useEffect(() => {    
        // fetch product
        fetch(`${BASE_URL}/api/products/`)
          .then((res) => res.json())
          .then((data) => setProduct(data.results));
      }, []);
  return (
    <main className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      {product.map((product: any, index) => (
        <ProductDetail
        key={index}
          title={product.name}
          price={product.price}
          image={product.image}
          seller={product.seller}
          category={product.category}
          quantity={product.quantity}
          desc={product.desc}
          onClick={() => router.push(`/${product.id}`)}
        />
      ))}
    </main>
  );
}
