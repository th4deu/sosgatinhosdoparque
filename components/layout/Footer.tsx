import Link from 'next/link'
import { NAV_LINKS, ONG_INFO } from '@/lib/constants'
import Container from '@/components/ui/Container'
import { CatIcon, LocationIcon, EmailIcon, InstagramIcon } from '@/components/ui/Icons'

export default function Footer() {
  return (
    <footer className="bg-verde-dark text-white">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <CatIcon className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-lg">
                {ONG_INFO.shortName}
              </span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              {ONG_INFO.description}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Navegação</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <LocationIcon className="w-5 h-5" />
                <span>{ONG_INFO.location.city}, {ONG_INFO.location.state}</span>
              </li>
              <li className="flex items-center gap-2">
                <EmailIcon className="w-5 h-5" />
                <a href={`mailto:${ONG_INFO.email}`} className="hover:text-white">
                  {ONG_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href={ONG_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-white/60 mt-4">
              {ONG_INFO.social.instagramHandle}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-6 text-center text-sm text-white/60">
          <p>
            &copy; {new Date().getFullYear()} {ONG_INFO.name}. Todos os direitos reservados.
          </p>
          <p className="mt-1">
            Feito com amor pelos gatinhos de BH
          </p>
        </div>
      </Container>
    </footer>
  )
}
