import { Instagram, Calendar } from "lucide-react"

export function SocialLinks() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-2">
      <a
              href="https://www.instagram.com/mihai_hanea/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-dark-400 p-3 rounded-full hover:bg-dark-300 transition-colors"
        aria-label="Instagram"
      >
        <Instagram className="h-6 w-6 text-white" />
      </a>
      <a
              href="https://mero.ro/p/golden-studio?page=select_services&workerIds=66144b65007e4275c30e1bcc&absp=search_autocomplete&campaignId=&campaignSource="
        target="_blank"
        rel="noopener noreferrer"
        className="bg-dark-400 p-3 rounded-full hover:bg-dark-300 transition-colors"
        aria-label="Book Appointment"
      >
        <Calendar className="h-6 w-6 text-white" />
      </a>
    </div>
  )
}
