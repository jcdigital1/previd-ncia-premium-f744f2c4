type Props = { className?: string };

export function WhatsAppIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#25D366"
        d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.74.46 3.44 1.32 4.94L2 22l5.36-1.4a9.9 9.9 0 0 0 4.68 1.2c5.44 0 9.84-4.4 9.84-9.84S17.48 2 12.04 2Z"
      />
      <path
        fill="#fff"
        d="M9.3 7.2c-.2-.46-.4-.46-.6-.47h-.5c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.27s.97 2.63 1.1 2.81c.14.18 1.9 3.04 4.66 4.14 2.3.9 2.76.72 3.26.68.5-.05 1.6-.66 1.83-1.3.22-.63.22-1.18.16-1.29-.07-.11-.25-.18-.52-.31-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.9-.86 1.08-.16.18-.32.2-.59.07-.27-.14-1.15-.43-2.19-1.35-.81-.72-1.35-1.61-1.51-1.88-.16-.27-.02-.42.11-.56.14-.13.32-.36.47-.54.14-.18.2-.31.29-.5.09-.18.05-.34-.02-.47-.07-.14-.6-1.44-.8-1.9Z"
      />
    </svg>
  );
}

export function InstagramIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="ig-grad" cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#FDDB92" />
          <stop offset="25%" stopColor="#F58529" />
          <stop offset="50%" stopColor="#DD2A7B" />
          <stop offset="75%" stopColor="#8134AF" />
          <stop offset="100%" stopColor="#515BD4" />
        </radialGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#ig-grad)" />
      <circle cx="12" cy="12" r="4.6" fill="none" stroke="#fff" strokeWidth="1.7" />
      <circle cx="17.2" cy="6.9" r="1.2" fill="#fff" />
    </svg>
  );
}

export function FacebookIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#1877F2" />
      <path
        fill="#fff"
        d="M13.6 12.9h2l.35-2.4h-2.35V9.2c0-.7.2-1.15 1.2-1.15h1.2V5.9c-.6-.07-1.25-.12-1.85-.12-1.95 0-3.3 1.1-3.3 3.15v1.57H8.7v2.4h2.15V22h2.75Z"
      />
    </svg>
  );
}

export function MapPinIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#EA4335"
        d="M12 2.2c-3.7 0-6.7 3-6.7 6.7 0 4.8 6.7 12.9 6.7 12.9s6.7-8.1 6.7-12.9c0-3.7-3-6.7-6.7-6.7Z"
      />
      <circle cx="12" cy="8.9" r="2.7" fill="#fff" />
    </svg>
  );
}

export function GoogleIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M21.6 12.2c0-.7-.06-1.36-.18-2H12v3.8h5.4a4.63 4.63 0 0 1-2 3.04v2.5h3.24c1.9-1.74 2.96-4.3 2.96-7.34Z"
      />
      <path
        fill="#34A853"
        d="M12 22c2.7 0 4.96-.9 6.64-2.44l-3.24-2.5c-.9.6-2.05.96-3.4.96-2.6 0-4.8-1.76-5.6-4.12H3.06v2.6A10 10 0 0 0 12 22Z"
      />
      <path
        fill="#FBBC05"
        d="M6.4 13.9a6 6 0 0 1 0-3.82V7.5H3.06a10 10 0 0 0 0 9l3.34-2.6Z"
      />
      <path
        fill="#EA4335"
        d="M12 5.9c1.47 0 2.78.5 3.82 1.5l2.85-2.85C16.95 2.98 14.7 2 12 2A10 10 0 0 0 3.06 7.5l3.34 2.58C7.2 7.72 9.4 5.9 12 5.9Z"
      />
    </svg>
  );
}
