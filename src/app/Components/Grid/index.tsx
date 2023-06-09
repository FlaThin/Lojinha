"use client"

import { Card } from "../Card";

export type ItemsProps = {
  title: String,
  price: Number,
  isFavorite: Boolean,
  image: String
}

export function Grid(){

   const data = [
    {
      title: "Iphone 14",
      image: "/iphone.png",
      isFavorite: false,
      price: 1300
    },
    {
      title: "PS4",
      image: "/iphone.png",
      isFavorite: true,
      price: 2000
    },
    {
      title: "Xbox",
      image: "/iphone.png",
      isFavorite: false,
      price: 4000
    },
    {
      title: "Xbox",
      image: "/iphone.png",
      isFavorite: false,
      price: 4000
    },
   ]



  return(
    <div className="grid grid-cols-2 gap-[6px]">
      {data?.map(element => <Card card={element} key={1}/>)}
    </div>
  )
}