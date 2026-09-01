import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';
import { PROJECTS } from '../data/content';

type Project = (typeof PROJECTS)[number];

function Tile({
  label,
  accent,
  index,
  className,
  style,
}: {
  label: string;
  accent: string[];
  index: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const angle = [135, 200, 315][index % 3];

  return (
    <div
      className={`relative flex items-end overflow-hidden ${className ?? ''}`}
      style={{
        ...style,
        background: `linear-gradient(${angle}deg, ${accent[0]} 0%, ${accent[1]} 55%, ${accent[2]} 100%)`,
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '38px 38px',
        }}
      />
      <span className="relative z-10 p-6 text-xs font-medium uppercase leading-snug tracking-[0.18em] text-white/90 sm:p-7 sm:text-sm md:p-8">
        {label}
      </span>
    </div>
  );
}

function ProjectCard({
  project,
  index,
  total,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={containerRef} className="sticky top-24 flex h-[85vh] items-start md:top-32">
      <motion.article
        style={{ scale, top: `${index * 28}px` }}
        className="relative w-full rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
      >
        <div className="flex flex-wrap items-center justify-between gap-4 px-2 pb-4 sm:px-4 md:pb-6">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <span
              className="hero-heading font-black leading-none"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 120px)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-[0.65rem] font-light uppercase tracking-[0.25em] text-[#D7E2EA]/60 sm:text-xs">
                {project.category}
              </span>
              <h3
                className="font-medium uppercase leading-tight text-[#D7E2EA]"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {project.name}
              </h3>
              <p className="max-w-md text-xs font-light leading-relaxed text-[#D7E2EA]/60 sm:text-sm">
                {project.summary}
              </p>
            </div>
          </div>

          <LiveProjectButton href={project.href} label="View Course" />
        </div>

        <div className="flex gap-3 sm:gap-4">
          <div className="flex w-[38%] flex-col gap-3 sm:gap-4">
            <Tile
              label={project.tiles[0]}
              accent={project.accent}
              index={0}
              className="flex-1 rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
            />
            <Tile
              label={project.tiles[1]}
              accent={project.accent}
              index={1}
              className="flex-1 rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>

          <img
            src={project.image}
            alt={`${project.name} 강의 썸네일`}
            loading="lazy"
            draggable={false}
            className="w-[62%] select-none rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
            style={{ height: 'clamp(190px, 33vw, 400px)' }}
          />
        </div>
      </motion.article>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="courses"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 pb-20 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pt-32"
    >
      <FadeIn
        as="h2"
        delay={0}
        y={40}
        className="hero-heading mb-12 text-center font-black uppercase leading-none tracking-tight sm:mb-16 md:mb-20"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Courses
      </FadeIn>

      <div className="mx-auto max-w-6xl">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} total={PROJECTS.length} />
        ))}
      </div>
    </section>
  );
}
