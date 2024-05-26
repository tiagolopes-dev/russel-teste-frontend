'use client'
import image from "@/assets/mouse.png";
import { Button } from "@/components/Button";
import { Products } from "@/types";
import Image from "next/image";
import { useParams } from 'next/navigation'
import { useEffect, useState } from "react";


export default function Product() {
  const { id } = useParams()
  const [product, setProduct] = useState({} as Products);

  useEffect(() => {
    
    async function fetchProducts() {
      try {
        const response = await fetch("/products.json");
        const data = (await response.json()) as Products[];

        const product = data.find(product => product.key === id)

        if(!product) return;
       
        setProduct(product);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);


  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-10 mt-8 md:mt-0 p-4 md:px-16 h-screen">
      <div className="w-full h-[270px] md:w-[624px] md:h-[476px] relative object-cover">
        <Image
          src={product.image}
          fill
          className="object-cover"
          alt="Imagem do prduto"
        />
      </div>
      <div>
        <p className="text-2xl font-bold mb-4 text-[#1A1A1A]">
           {product.description}
        </p>
        <p className="text-base md:mb-4">
          Vendido e entregue por
          <span className="text-[#00B5EA]"> Logitech Brasil</span>{" "}
          <span className="hidden md:inline"> | </span>
          <span className="hidden md:inline md:ml-1 text-[#5438FF] font-bold">
            Em estoque
          </span>
        </p>
        <span className="block md:hidden md:ml-1 mb-4 text-[#5438FF] font-bold">
          Em estoque
        </span>
        <p className="text-base line-through">{product.previousPrice}</p>
        <p className="text-[#5438FF] text-5xl font-bold">{product.currentprice}</p>
        <p className="text-base mb-4 text-[#1A1A1A]">à vista no PIX</p>

        <div className="flex flex-col md:flex-row gap-4">
          <Button text="COMPRAR" type="normal" />
          <Button text="ADICIONAR AO CARRINHO" type="secondary" />
        </div>
      </div>
    </div>
  );
}
