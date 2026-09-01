import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';
import SmartImage from '../components/SmartImage';
import { PROFILE } from '../data/content';

const BASE = 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7';

const DECOR = [
  {
    src: `${BASE}/moon_icon.11395d36.png`,
    alt: '',
    className: 'top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px]',
    delay: 0.1,
    x: -80,
  },
  {
    src: `${BASE}/p59_1.4659672e.png`,
    alt: '',
    className: 'bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]',
    delay: 0.25,
    x: -80,
  },
  {
    src: `${BASE}/lego_icon-1.703bb594.png`,
    alt: '',
    className: 'top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px]',
    delay: 0.15,
    x: 80,
  },
  {
    src: `${BASE}/Group_134-1.2e04f3ce.png`,
    alt: '',
    className:
      'bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]',
    delay: 0.3,
    x: 80,
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center justify-center bg-[#0C0C0C] px-5 py-20 sm:px-8 md:px-10"
      style={{ overflowX: 'clip' }}
    >
      {DECOR.map((item) => (
        <FadeIn
          key={item.src}
          delay={item.delay}
          duration={0.9}
          x={item.x}
          y={0}
          className={`pointer-events-none absolute select-none ${item.className}`}
        >
          <SmartImage src={item.src} alt={item.alt} className="w-full opacity-90" />
        </FadeIn>
      ))}

      <div className="relative z-10 flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn
            as="h2"
            delay={0}
            y={40}
            className="hero-heading text-center font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </FadeIn>

          <AnimatedText
            text={PROFILE.about}
            className="max-w-[560px] text-center font-medium leading-relaxed text-[#D7E2EA]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
        </div>

        <FadeIn delay={0.1} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
