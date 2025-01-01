'use client';

import { useRef } from 'react';

import { cn } from '@/lib/utils';
import VariableFontCursorProximity from './variable-font-cursor-proximity';

export const FancyText = ({
  texts,
  className,
}: {
  texts: string[];
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef}>
      {texts.map((text, i) => (
        <VariableFontCursorProximity
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={i}
          label={text}
          className={cn('text-2xl leading-none tracking-tight', className)}
          fromFontVariationSettings="'wght' 400, 'slnt' 0"
          toFontVariationSettings="'wght' 900, 'slnt' -10"
          radius={75}
          containerRef={containerRef}
        />
      ))}
    </div>
  );
};
