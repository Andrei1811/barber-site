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
        <div className="bg-dark-800/80 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-4 overflow-hidden border border-dark-700/50">
            <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                    <div>
                        <h3 className="text-xl font-semibold text-white">{name}</h3>
                        {description && <p className="text-gray-400 text-sm mt-1">{description}</p>}
                        <div className="flex items-center mt-2">
                            <Clock className="h-4 w-4 text-blue-500 mr-1" />
                            <span className="text-gray-400 text-sm">{duration}</span>
                        </div>
                    </div>
                    <div className="bg-blue-600/10 px-3 py-1.5 rounded-full border border-blue-600/20">
                        <span className="text-xl font-bold text-white">{price} lei</span>
                    </div>
                </div>
                <Button
                    onClick={() => window.open(BOOKING_URL, "_blank")}
                    className="w-full mt-3 bg-white hover:bg-gray-100 text-gray-900 py-2.5 rounded-md font-medium transition-colors"
                >
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
                <div className="flex items-center justify-center mb-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-100 flex items-center justify-center">
                            <Scissors className="h-6 w-6 text-blue-500 mr-2" />
                            Servicii
                        </h2>
                        <div className="h-1 w-16 bg-blue-600 mx-auto mt-3 rounded-full"></div>
                    </div>
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