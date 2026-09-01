import FadeIn from '../components/FadeIn';
import Magnet from '../components/Magnet';
import ContactButton from '../components/ContactButton';
import { NAV_LINKS, PROFILE } from '../data/content';

export default function HeroSection() {
  return (
    <section
      className="relative flex h-screen flex-col bg-[#0C0C0C]"
      style={{ overflowX: 'clip' }}
    >
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="relative z-20 flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
          >
            {link.label}
          </a>
        ))}
      </FadeIn>

      <div className="relative z-20 overflow-hidden px-4 md:px-6">
        <FadeIn
          as="h1"
          delay={0.15}
          y={40}
          className="hero-heading mt-6 w-full whitespace-nowrap text-center text-[8.5vw] font-black uppercase leading-none tracking-tight sm:mt-4 sm:text-[9vw] md:-mt-5 md:text-[9.6vw] lg:text-[10.4vw]"
        >
          Hi, i&apos;m {PROFILE.nameEn}
        </FadeIn>
      </div>

      <div className="relative z-20 mt-auto flex items-end justify-between px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn
          as="p"
          delay={0.35}
          y={20}
          className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]"
          style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
        >
          {PROFILE.tagline}
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 top-1/2 z-10 w-[280px] -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:w-[360px] sm:translate-y-0 md:w-[440px] lg:w-[520px]"
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
          className="w-full"
        >
          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-x-4 bottom-0 top-10 -z-10 blur-3xl"
              style={{
                background:
                  'radial-gradient(60% 55% at 50% 45%, rgba(182,0,168,0.35) 0%, rgba(118,33,176,0.18) 45%, rgba(12,12,12,0) 75%)',
              }}
            />
            <img
              src="/profile.jpg"
              alt={`${PROFILE.nameKo} 프로필 사진`}
              draggable={false}
              className="w-full select-none object-cover"
              style={{
                borderRadius: '999px 999px 32px 32px',
                maskImage:
                  'linear-gradient(180deg, #000 0%, #000 68%, rgba(0,0,0,0.5) 88%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage:
                  'linear-gradient(180deg, #000 0%, #000 68%, rgba(0,0,0,0.5) 88%, rgba(0,0,0,0) 100%)',
              }}
            />
            {/* 스튜디오 회색 배경을 어두운 테마에 녹이는 비네트 */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                borderRadius: '999px 999px 32px 32px',
                boxShadow: 'inset 0 0 70px 34px rgba(12,12,12,0.92)',
              }}
            />
          </div>
        </Magnet>
      </FadeIn>
    </section>
  );
}
