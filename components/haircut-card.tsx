"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

interface HaircutCardProps {
  name: string
  price: number
  image: string
  description: string
}

const BOOKING_URL =
  "https://mero.ro/p/golden-studio?page=select_services&workerIds=66144b65007e4275c30e1bcc&absp=search_autocomplete&campaignId=&campaignSource="

export function HaircutCard({ name, price, image, description }: HaircutCardProps) {
  return (
    <div className="bg-dark-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:translate-y-[-5px]">
      <div className="relative aspect-square">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-100">{name}</h3>
        <p className="text-gray-400 mb-3">{price} lei</p>
        <p className="text-gray-300 text-sm mb-5">{description}</p>
        <Button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          onClick={() => window.open(BOOKING_URL, "_blank")}
        >
          Programează
        </Button>
      </div>
    </div>
  )
}
