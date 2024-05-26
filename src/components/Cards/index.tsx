import Image from "next/image";
import Mouse from "@/assets/mouse.png";
import imageLogitech from "@/assets/imagelogitech.png";
import { Button } from "../Button";
import { Products } from "@/types";
import { useRouter } from "next/navigation";

interface CardsProps {
  type?: "normal" | "logitech";
  content: Products;
}

export function Cards({ content, type = "normal" }: CardsProps) {
  const router = useRouter()

  const goToProductPage = (productId: string) => {
    router.push(`/product/${productId}`)
  }

  const cardClass = () => {
    const colorDictionary = {
      logitech: "bg-gradient-to-br from-[#020202] to-[#00161D]",
      normal: "bg-[#FAFAFA] hover:bg-[#E8E8E8]",
    };
    
    return colorDictionary[type];
  };

  return (
    <div
      className={`flex flex-col pointer p-4 md:p-6 ${cardClass()}`}
    >
      <div className="w-full relative md:h-[200px] h-[144px] object-cover mb-4">
        <Image alt="Mouse" className=" rounded object-cover" src={content.image} fill={true} quality={100} />
      </div>

      {type === "logitech" && (
        <div className="flex gap-2 mb-4">
          <Image
            alt="LogoLogitech"
            src={imageLogitech}
            className="h-4 w-4 md:h-6 md:w-6"
          />
          <p className="text-[#00B5EA] text-sm md:text-lg uppercase">
            logitech
          </p>
        </div>
      )}

      <p
        className={`font-bold line-clamp-2
          ${
            type === "logitech"
              ? "text-[#EFEFEF] text-sm mb-4 md:text-base"
              : "text-[#1A1A1A] text-sm mb-4 md:text-base"
          }
        `}
      >
        {content.description}
      </p>

      <p
        className={`line-through
            ${
              type === "logitech"
                ? "text-[#EFEFEF] text-xs md:text-base"
                : "text-[#1A1A1A] text-xs md:text-sm"
            }
          `}
      >
        {content.previousPrice}
      </p>

      <p
        className={`font-bold
          ${
            type == "logitech"
              ? "text-[#00B5EA] text-lg md:text-[32px] mb-4"
              : "text-[#1A1A1A] text-lg md:text-lg"
          }
        `}
      >
        {content.currentprice}
      </p>

      {type === "normal" && (
        <p className="text-[#5438FF] mb-[25px] text-sm">{content.discount}</p>
      )}
      
      <Button text="comprar" type={type} onClick={() => goToProductPage(content.key)} />
    </div>
  );
}
