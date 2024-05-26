import { MouseEventHandler } from "react";

interface ButtonProps {
  text: string;
  type?: "normal" | "logitech" | "secondary";
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}

export function Button({ text, type = "normal", onClick }: ButtonProps) {
  const buttonClass = () => {
    const colorDictionary = {
      logitech:
        "bg-[#00b5ea] hover:bg-[#0085ac] text-[#1a1a1a] text-base md:text-xl py-2 px-4 md:py-3 md:px-6",
      normal:
        "bg-[#5438ff] hover:bg-[#3722ba] text-white text-base py-2 px-4 md:py-3 md:px-6",
      secondary:
        "bg-white text-[#5438ff] border border-[#5438ff] py-2 px-4 md:py-3 md:px-6",
    };

    return colorDictionary[type];
  };

  return (
    <button className={`uppercase font-bold ${buttonClass()}`} onClick={onClick}>{text}</button>
  );
}
