import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  LOGO_URL,
  MAPS_URL,
  WHATSAPP_URL,
} from "@/lib/site-data";

const links = [
  { label: "WhatsApp", href: WHATSAPP_URL },
  { label: "Instagram", href: INSTAGRAM_URL },
  { label: "Facebook", href: FACEBOOK_URL },
  { label: "Localização", href: MAPS_URL },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink px-5 py-14 sm:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <img
          src={LOGO_URL}
          alt="Jéssica Rodrigues Advocacia"
          loading="lazy"
          className="mx-auto h-24 w-auto object-contain"
        />
        <p className="mt-4 font-display text-xl">Jéssica Rodrigues Advocacia</p>
        <p className="eyebrow mt-2">Advocacia Previdenciária | INSS</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Atendimento em todo o Brasil
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs text-muted-foreground">
          {links.map((link, i) => (
            <span key={link.label} className="flex items-center gap-3">
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold"
              >
                {link.label}
              </a>
              {i < links.length - 1 ? (
                <span aria-hidden="true" className="text-gold/50">
                  •
                </span>
              ) : null}
            </span>
          ))}
        </div>

        <div className="gold-rule mx-auto mt-8 w-full max-w-xs" />
        <p className="mx-auto mt-6 max-w-xl text-[0.7rem] leading-relaxed text-muted-foreground/80">
          As informações apresentadas neste site possuem caráter exclusivamente
          informativo e não substituem uma análise jurídica individualizada.
        </p>
      </div>
    </footer>
  );
}
