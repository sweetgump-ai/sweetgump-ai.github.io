import { useEffect, useRef, useState, type ReactNode } from 'react';

type MagnetProps = {
  children: ReactNode;
  padding?: number;
  disabled?: boolean;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
  innerClassName?: string;
};

export default function Magnet({
  children,
  padding = 100,
  disabled = false,
  strength = 2,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.5s ease-in-out',
  className = '',
  innerClassName = '',
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (disabled) {
      setActive(false);
      setOffset({ x: 0, y: 0 });
      return;
    }

    const handleMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;

      const { left, top, width, height } = el.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const distX = Math.abs(centerX - e.clientX);
      const distY = Math.abs(centerY - e.clientY);

      if (distX < width / 2 + padding && distY < height / 2 + padding) {
        setActive(true);
        setOffset({ x: (e.clientX - centerX) / strength, y: (e.clientY - centerY) / strength });
      } else {
        setActive(false);
        setOffset({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, [disabled, padding, strength]);

  return (
    <div ref={ref} className={`relative inline-block ${className}`}>
      <div
        className={innerClassName}
        style={{
          transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
          transition: active ? activeTransition : inactiveTransition,
          willChange: 'transform',
        }}
      >
        {children}
      </div>
    </div>
  );
}
