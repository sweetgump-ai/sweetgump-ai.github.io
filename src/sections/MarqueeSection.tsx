import { useEffect, useRef, useState } from 'react';
import SmartImage from '../components/SmartImage';
import { MARQUEE_IMAGES, MARQUEE_LABELS } from '../data/content';

const ROW_1 = MARQUEE_IMAGES.slice(0, 11);
const ROW_2 = MARQUEE_IMAGES.slice(11);
const LABELS_1 = MARQUEE_LABELS.slice(0, 11);
const LABELS_2 = MARQUEE_LABELS.slice(11);

function Row({
  images,
  labels,
  offset,
  direction,
}: {
  images: string[];
  labels: string[];
  offset: number;
  direction: 1 | -1;
}) {
  const tripled = [...images, ...images, ...images];

  return (
    <div
      className="flex gap-3"
      style={{
        transform: `translateX(${direction * (offset - 200)}px)`,
        willChange: 'transform',
      }}
    >
      {tripled.map((src, i) => (
        <div
          key={`${src}-${i}`}
          className="shrink-0 overflow-hidden rounded-2xl"
          style={{ width: 420, height: 270 }}
        >
          <SmartImage
            src={src}
            alt=""
            fallbackLabel={labels[i % labels.length]}
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const sectionTop = section.offsetTop;
      setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40"
      style={{ overflowX: 'clip' }}
    >
      <div className="flex flex-col gap-3">
        <Row images={ROW_1} labels={LABELS_1} offset={offset} direction={1} />
        <Row images={ROW_2} labels={LABELS_2} offset={offset} direction={-1} />
      </div>
    </section>
  );
}
