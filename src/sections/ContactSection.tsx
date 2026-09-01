import { Mail, Linkedin, GraduationCap, ArrowUpRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
import { PROFILE } from '../data/content';

const LINKS = [
  { icon: Mail, label: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { icon: Linkedin, label: 'LinkedIn', href: PROFILE.linkedin },
  {
    icon: GraduationCap,
    label: 'Udemy · Power BI Desktop',
    href: 'https://www.udemy.com/course/power-bi-desktop/',
  },
  {
    icon: GraduationCap,
    label: 'Udemy · Power Automate Desktop',
    href: 'https://www.udemy.com/course/power-automate-desktop-class/',
  },
  {
    icon: GraduationCap,
    label: 'Udemy · 경영정보시각화능력 실기',
    href: 'https://www.udemy.com/course/power-bi-exam/',
  },
];

export default function ContactSection() {
  return (
    <footer
      id="contact"
      className="relative z-10 bg-[#0C0C0C] px-5 pb-14 pt-24 sm:px-8 sm:pt-32 md:px-10 md:pt-40"
    >
      <FadeIn
        as="h2"
        delay={0}
        y={40}
        className="hero-heading text-center font-black uppercase leading-none tracking-tight"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Let&apos;s talk
      </FadeIn>

      <FadeIn
        as="p"
        delay={0.15}
        y={20}
        className="mx-auto mt-8 max-w-[560px] text-center font-light leading-relaxed text-[#D7E2EA]/80"
        style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.15rem)' }}
      >
        데이터 · 자동화 · AI 기반 프로젝트나 교육, 특히 &lsquo;안전한 시민개발자 확산&rsquo;에 관심
        있으시면 편하게 이야기 나눠요.
      </FadeIn>

      <FadeIn delay={0.3} y={20} className="mt-10 flex justify-center">
        <ContactButton />
      </FadeIn>

      <div className="mx-auto mt-16 grid max-w-3xl gap-2 sm:mt-20">
        {LINKS.map((link, i) => (
          <FadeIn key={link.label} delay={i * 0.06} y={16}>
            <a
              href={link.href}
              target={link.href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 rounded-2xl border border-[#D7E2EA]/15 px-5 py-4 transition-colors duration-300 hover:border-[#D7E2EA]/40 hover:bg-white/5"
            >
              <span className="flex items-center gap-3 text-sm text-[#D7E2EA] sm:text-base">
                <link.icon size={18} className="shrink-0 opacity-70" />
                {link.label}
              </span>
              <ArrowUpRight
                size={18}
                className="shrink-0 text-[#D7E2EA] opacity-50 transition-transform duration-300 group-hover:translate-x-1 group-hover:opacity-100"
              />
            </a>
          </FadeIn>
        ))}
      </div>

      <p className="mt-16 text-center text-xs font-light uppercase tracking-[0.2em] text-[#D7E2EA]/35">
        © {new Date().getFullYear()} {PROFILE.nameKo} · {PROFILE.company}
      </p>
    </footer>
  );
}
