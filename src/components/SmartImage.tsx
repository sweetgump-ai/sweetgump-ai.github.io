import { useState } from 'react';

type SmartImageProps = {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  /** 이미지 로드 실패 시 보여줄 그라디언트 대체 타일의 라벨 */
  fallbackLabel?: string;
  loading?: 'lazy' | 'eager';
};

const FALLBACK_GRADIENTS = [
  'linear-gradient(135deg, #18011F 0%, #B600A8 55%, #7621B0 100%)',
  'linear-gradient(135deg, #0C0C0C 0%, #7621B0 60%, #BE4C00 100%)',
  'linear-gradient(135deg, #131A2A 0%, #2D4B73 55%, #BBCCD7 100%)',
  'linear-gradient(135deg, #1F0A16 0%, #B600A8 45%, #BE4C00 100%)',
];

function hashOf(value: string) {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
  return hash;
}

export default function SmartImage({
  src,
  alt,
  className = '',
  style,
  fallbackLabel,
  loading = 'lazy',
}: SmartImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center ${className}`}
        style={{ ...style, background: FALLBACK_GRADIENTS[hashOf(src) % FALLBACK_GRADIENTS.length] }}
      >
        {fallbackLabel ? (
          <span className="px-4 text-center text-xs font-medium uppercase tracking-[0.2em] text-white/80 sm:text-sm">
            {fallbackLabel}
          </span>
        ) : null}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      draggable={false}
      className={className}
      style={style}
      onError={() => setFailed(true)}
    />
  );
}
