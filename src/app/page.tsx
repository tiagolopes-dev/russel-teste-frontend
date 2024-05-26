"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import { Banner } from "@/components/Banner";
import { Cards } from "@/components/Cards";

import { Products } from "@/types/index";

export default function Home() {
  const [logitechProducts, setlogitechProducts] = useState([] as Products[]);
  const [products, setProducts] = useState([] as Products[]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/products.json");
        const data = (await response.json()) as Products[];

        const logitechProducts = data.filter((product) => product.isLogitech);
        const products = data.filter((product) => !product.isLogitech);

        setlogitechProducts(logitechProducts);
        setProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);
  
  return (
    <>
      <div className="bg-[#020202] p-4 md:p-10">
        <div className="mb-8">
        <Banner/>  
        </div>
        

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-10">
          {logitechProducts.map((product) => (
            <Cards content={product} type="logitech" key={product.key} />
          ))}
        </div>
      </div>

      <div className="p-4 md:p-10">
        <div className="flex gap-2 mb-6 items-center">
          <p className="text-2xl">Placas de vídeo</p>

          <div className="bg-[#5438FF4D] p-1">
            <p className="text-xs text-[#5438FF]">HARDWARE</p>
          </div>
        </div>

        <div className="flex md:grid md:grid-cols-5 gap-4 md:gap-10 overflow-x-auto">
          {products.map((product) => (
            <Cards content={product} type="normal" key={product.key} />
          ))}
        </div>
      </div>
    </>
  );
}
