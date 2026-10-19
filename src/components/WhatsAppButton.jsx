
import { MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const phoneNumber = "919348026657";

const message =
  "Hi! I visited your Datafolio portfolio and would like to connect with you about a potential opportunity.";

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact me on WhatsApp"
      title="Chat with me on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366]"
    >
      <FaWhatsapp size={27} />
    </a>
  );
}
