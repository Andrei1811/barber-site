import { HaircutCard } from "@/components/haircut-card"
import { BarberShopBanner } from "@/components/barber-shop-banner"
import { ServicesSection } from "@/components/services-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  const haircuts = [
    {
      id: 1,
      name: "Fade Clasic",
      price: 70,
      image: "/fade_clasic.jpg",
      description: "Fade curat cu textură în partea de sus, perfect pentru orice ocazie",
    },
    {
      id: 2,
      name: "Pompadour Modern",
      price: 70,
        image: "/pombadour_modern.jpg",
      description: "Volum stilat în partea de sus cu laterale fade pentru un look îndrăzneț",
    },
    {
      id: 3,
      name: "Crop Texturat",
      price: 70,
      image: "/crop_texturat.jpg",
      description: "Partea de sus scurtă și texturată cu laterale curate, stil ușor de întreținut",
    },
    {
      id: 4,
        name: "Creative Fade",
      price: 70,
        image: "/tuns_modern.jpg",
        description: "Tunsoare modernă cu volum natural și design artistic ras pe laterale, pentru un look fresh.",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Full-screen Banner */}
      <BarberShopBanner />

      {/* Popular Styles Section */}
      <section id="styles-section" className="w-full py-16 bg-dark-900">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-100">Stiluri Populare</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {haircuts.map((haircut) => (
              <HaircutCard key={haircut.id} {...haircut} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Contact Section */}
      <ContactSection />
    </main>
  )
}
