import Image from "next/image"
import { ItemsProps } from "../Grid"
import { TiHeartFullOutline } from "react-icons/ti"

type CardProps = {
  card: ItemsProps
}

export function Card({card} : CardProps){

  const { title, price, isFavorite, image } = card;

  return (
    <div className="flex p-3 rounded-3xl bg-zinc-100 flex-col relative items-center">
      <Image src="/iphone.png" width={300} height={500} alt="" className="px-6"/>
      <h3 className="text-xs text-[#524F49]">{title}</h3>
      <span className="text-sm font-medium">R${String(price)}</span>

      <span className={`p-2 flex justify-end items-center rounded-full text-xs ${isFavorite ? "bg-[#4edb86] text-white" : "bg-white"}  absolute right-3 top-3`}>
        <TiHeartFullOutline/>
      </span>
    </div>
  )
}