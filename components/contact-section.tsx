import { MapPin, Phone, Clock, Mail } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact-section" className="w-full py-16 bg-dark-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-100 mb-12">Vizitează-ne</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-dark-700 p-4 rounded-full mb-4">
              <MapPin className="h-8 w-8 text-gray-300" />
            </div>
            <h3 className="text-xl font-semibold text-gray-100 mb-2">Locație</h3>
                      <p className="text-gray-400"> Strada Nicolae Iorga 52</p>
            <p className="text-gray-400">Sibiu, România</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-dark-700 p-4 rounded-full mb-4">
              <Phone className="h-8 w-8 text-gray-300" />
            </div>
            <h3 className="text-xl font-semibold text-gray-100 mb-2">Telefon</h3>
            <p className="text-gray-400">0774 482 133</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-dark-700 p-4 rounded-full mb-4">
              <Clock className="h-8 w-8 text-gray-300" />
            </div>
            <h3 className="text-xl font-semibold text-gray-100 mb-2">Program</h3>
            <p className="text-gray-400">Luni-Vineri: 9:00 - 19:00</p>
            <p className="text-gray-400">Sâmbătă: 10:00 - 17:00</p>
            <p className="text-gray-400">Duminică: Închis</p>
          </div>

          
        </div>
      </div>
    </section>
  )
}
