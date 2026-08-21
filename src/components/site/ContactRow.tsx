import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  MAPS_URL,
  WHATSAPP_URL,
} from "@/lib/site-data";
import {
  FacebookIcon,
  InstagramIcon,
  MapPinIcon,
  WhatsAppIcon,
} from "./BrandIcons";

const contacts = [
  { label: "WhatsApp", href: WHATSAPP_URL, Icon: WhatsAppIcon },
  { label: "Instagram", href: INSTAGRAM_URL, Icon: InstagramIcon },
  { label: "Facebook", href: FACEBOOK_URL, Icon: FacebookIcon },
  { label: "Localização", href: MAPS_URL, Icon: MapPinIcon },
];

export function ContactRow({ compact }: { compact?: boolean }) {
  return (
    <div className="mx-auto w-full max-w-lg">
      {!compact && <p className="eyebrow text-center">Entre em contato</p>}
      <div className={`grid grid-cols-4 gap-2.5 ${compact ? "mt-0" : "mt-3"}`}>
        {contacts.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col items-center gap-1.5 rounded-2xl border border-border bg-card/60 px-2 backdrop-blur-sm transition-all duration-300 hover:border-gold/50 hover:bg-card active:scale-[0.97] ${compact ? "py-2.5" : "py-3"}`}
          >
            <Icon className="size-6" />
            <span className="text-[0.62rem] font-medium tracking-wide text-muted-foreground">
              {label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
