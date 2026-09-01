import FadeIn from '../components/FadeIn';
import Magnet from '../components/Magnet';
import ContactButton from '../components/ContactButton';
import { NAV_LINKS, PROFILE } from '../data/content';

export default function HeroSection() {
  return (
    <section
      className="relative flex h-[100svh] min-h-[600px] flex-col bg-[#0C0C0C]"
      style={{ overflowX: 'clip' }}
    >
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="relative z-20 flex items-center justify-between gap-2 px-5 pt-5 sm:px-6 sm:pt-6 md:px-10 md:pt-8"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[0.7rem] font-medium uppercase tracking-wide text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 sm:text-sm sm:tracking-wider md:text-lg lg:text-[1.4rem]"
          >
            {link.label}
          </a>
        ))}
      </FadeIn>

      <div className="relative z-20 overflow-hidden px-5 sm:px-6 md:px-10">
        <FadeIn
          as="h1"
          delay={0.15}
          y={40}
          className="hero-heading mt-7 text-left text-[13.5vw] font-black uppercase tracking-tight sm:mt-6 sm:text-[11vw] md:mt-2 md:text-[10vw] lg:text-[7.8vw] xl:text-[8.5vw]"
          style={{ lineHeight: 0.85 }}
        >
          Hi, i&apos;m
          <br />
          {PROFILE.nameEn}
        </FadeIn>
      </div>

      <div className="relative z-20 mt-7 flex flex-col items-start gap-5 px-5 pb-7 sm:mt-auto sm:gap-6 sm:px-6 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn
          as="p"
          delay={0.35}
          y={20}
          className="max-w-[15rem] break-keep font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[280px] md:max-w-[380px]"
          style={{ fontSize: 'clamp(0.8rem, 1.4vw, 1.5rem)' }}
        >
          {PROFILE.tagline}
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      {/* 위치 지정은 바깥 div에 둔다. FadeIn의 motion transform이 translate 클래스를 덮어쓰기 때문 */}
      <div className="absolute bottom-0 left-1/2 z-10 w-[78%] max-w-[330px] -translate-x-1/2 sm:left-auto sm:right-0 sm:w-[320px] sm:max-w-none sm:translate-x-0 md:right-[2%] md:w-[380px] lg:right-[4%] lg:w-[420px] xl:w-[480px]">
        <FadeIn delay={0.6} y={30}>
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
      </div>
    </section>
  );
}
