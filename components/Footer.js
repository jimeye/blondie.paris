import { Facebook, Instagram, Twitter } from 'lucide-react'
import Logo from './Logo'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white text-gray-600 border-t border-gray-300">
      <div className="container mx-auto pt-4 pb-8 md:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-4">
              BLONDIE PARIS
              <div className="w-20 h-0.5 bg-[#FFB6C1] mt-2"></div>
            </h3>
            <p className="text-sm">Bureau de relations presse</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Contact
              <div className="w-20 h-0.5 bg-[#FFB6C1] mt-2"></div>
            </h3>
            <p className="text-sm">123 Rue de la Paix</p>
            <p className="text-sm">75000 Paris</p>
            <p className="text-sm">01 23 45 67 89</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Services
              <div className="w-20 h-0.5 bg-[#FFB6C1] mt-2"></div>
            </h3>
            <p className="text-sm">Relations presse</p>
            <p className="text-sm">Événements</p>
            <p className="text-sm">Communication</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">
              © 2025 BLONDIE-PARIS
              <div className="w-20 h-0.5 bg-[#FFB6C1] mt-2"></div>
            </h3>
            <p className="text-sm">Tous droits réservés</p>
            <p className="text-sm">Website design by <a href="tel:+330608251223" className="hover:text-[#FFB6C1] transition-colors">JOSEPH-STUDIO.COM</a></p>
            <p className="text-sm">Tous droits réservés</p>
          </div>
        </div>
      </div>
    </footer>
  )
} 