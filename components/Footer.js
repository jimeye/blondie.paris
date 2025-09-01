import Logo from './Logo'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-white to-[#FFB6C1]/5 text-[#394140] border-t border-[#FFB6C1] menu-font">
      <div className="container mx-auto pt-2 pb-4 md:pb-6 ml-5 lg:ml-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-5">
          <div>
            <h3 className="text-lg font-semibold mb-2">
              BLONDIE PARIS
              <div className="w-20 h-0.5 bg-[#FFB6C1] mt-2"></div>
            </h3>
            <p className="text-sm normal-case">Bureau de relations presse</p>
            <p className="text-sm normal-case">Conseil en relations publiques<br />et communication</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Contact
              <div className="w-20 h-0.5 bg-[#FFB6C1] mt-2"></div>
            </h3>
            <div className="flex items-center space-x-4 mt-2 mb-2">
              <a href="tel:+33609496329" className="text-[#394140] hover:text-[#FFB6C1] transition-colors" aria-label="Téléphoner">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.1 5.18 2 2 0 0 1 5.11 3h3a2 2 0 0 1 2 1.72c.12.86.31 1.7.57 2.5a2 2 0 0 1-.45 2.11L9 10a16 16 0 0 0 5 5l.67-.23a2 2 0 0 1 2.11.45c.8.26 1.64.45 2.5.57A2 2 0 0 1 22 16.92z"/></svg>
              </a>
              <a href="https://wa.me/33609496329" target="_blank" rel="noopener noreferrer" className="text-[#394140] hover:text-[#FFB6C1] transition-colors" aria-label="WhatsApp">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.472-.148-.672.149-.198.297-.768.966-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.372-.025-.521-.074-.149-.672-1.613-.921-2.207-.242-.58-.487-.5-.672-.51l-.572-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.007-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/><path d="M20.52 3.48A11.96 11.96 0 0 0 12 0C5.373 0 0 5.373 0 12c0 2.116.55 4.104 1.515 5.83L0 24l6.324-1.645A11.96 11.96 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.18-1.237-6.082-3.48-8.52zM12 21.818a9.818 9.818 0 1 1 0-19.636 9.818 9.818 0 0 1 0 19.636z"/></svg>
              </a>
              <a href="mailto:nathalie@blondie.paris" className="text-[#394140] hover:text-[#FFB6C1] transition-colors" aria-label="Email">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v16H4z"/><path d="m22 6-10 7L2 6"/></svg>
              </a>
            </div>
            <p className="text-sm normal-case">Website design by <a href="tel:+330608251223" className="hover:text-[#FFB6C1] transition-colors">JOSEPH-STUDIO.COM</a></p>
            <p className="text-sm normal-case">© 2025 BLONDIE.PARIS - Tous droits réservés</p>
          </div>
        </div>
      </div>
    </footer>
  )
} 