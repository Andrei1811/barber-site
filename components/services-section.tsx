"use client"

import { Scissors, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ServiceProps {
  name: string
  price: number
  duration: string
  description?: string
}

const BOOKING_URL =
  "https://mero.ro/p/golden-studio?page=select_services&workerIds=66144b65007e4275c30e1bcc&absp=search_autocomplete&campaignId=&campaignSource="

function Service({ name, price, duration, description }: ServiceProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start border-b border-dark-400 py-6">
      <div className="flex-1 mb-4 md:mb-0">
        <h3 className="text-xl font-medium text-white">{name}</h3>
        {description && <p className="text-gray-400 text-sm mt-1">{description}</p>}
        <div className="flex items-center mt-2">
          <Clock className="h-4 w-4 text-gray-500 mr-1" />
          <span className="text-gray-400 text-sm">{duration}</span>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-xl font-semibold text-white mb-2">{price} lei</span>
        <Button onClick={() => window.open(BOOKING_URL, "_blank")} className="bg-blue-600 hover:bg-blue-700 text-white">
          Programează
        </Button>
      </div>
    </div>
  )
}

export function ServicesSection() {
  const services = [
    {
      name: "Tuns",
      price: 70,
      duration: "40 min",
    },
    {
      name: "Tuns+Barbă",
      price: 80,
      duration: "1 h",
    },
    {
      name: "Aranjat Barbă",
      price: 30,
      duration: "30 min",
    },
  ]

  return (
    <section id="services-section" className="w-full py-16 bg-dark-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <Scissors className="h-6 w-6 text-gray-300 mr-2" />
          <h2 className="text-3xl font-bold text-center text-gray-100">Servicii</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          {services.map((service, index) => (
            <Service key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
