type ContactButtonProps = {
  href?: string;
  label?: string;
  className?: string;
};

export default function ContactButton({
  href = 'mailto:sweetgump@naver.com',
  label = 'Contact Me',
  className = '',
}: ContactButtonProps) {
  return (
    <a
      href={href}
      className={`contact-pill inline-block shrink-0 rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-white transition-transform duration-300 hover:scale-105 sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base ${className}`}
    >
      {label}
    </a>
  );
}
