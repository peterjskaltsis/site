import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';

interface ScrambleInProps {
  text: string;
  scrambleSpeed?: number;
  scrambledLetterCount?: number;
  characters?: string;
  className?: string;
  scrambledClassName?: string;
  autoStart?: boolean;
  onStart?: () => void;
  onComplete?: () => void;
  delay?: number;
}

export interface ScrambleInHandle {
  start: () => void;
  reset: () => void;
}

const ScrambleIn = forwardRef<ScrambleInHandle, ScrambleInProps>(
  (
    {
      text,
      scrambleSpeed = 15,
      scrambledLetterCount = 4,
      characters = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+',
      className = '',
      scrambledClassName = '',
      autoStart = true,
      onStart,
      onComplete,
      delay = 0,
    },
    ref,
  ) => {
    const [displayText, setDisplayText] = useState('');
    const [isAnimating, setIsAnimating] = useState(false);
    const [visibleLetterCount, setVisibleLetterCount] = useState(0);
    const [scrambleOffset, setScrambleOffset] = useState(0);

    const startAnimation = useCallback(() => {
      onStart?.();
      setTimeout(() => {
        setIsAnimating(true);
        setVisibleLetterCount(0);
        setScrambleOffset(0);
      }, delay);
    }, [onStart, delay]);

    const reset = useCallback(() => {
      setIsAnimating(false);
      setVisibleLetterCount(0);
      setScrambleOffset(0);
      setDisplayText('');
    }, []);

    useImperativeHandle(ref, () => ({
      start: startAnimation,
      reset,
    }));

    useEffect(() => {
      let timeoutId: NodeJS.Timeout;
      if (autoStart) {
        timeoutId = setTimeout(startAnimation, delay);
      }
      return () => {
        if (timeoutId) clearTimeout(timeoutId);
      };
    }, [autoStart, startAnimation, delay]);

    useEffect(() => {
      let interval: NodeJS.Timeout;

      if (isAnimating) {
        interval = setInterval(() => {
          // Increase visible text length
          if (visibleLetterCount < text.length) {
            setVisibleLetterCount((prev) => prev + 1);
          }
          // Start sliding scrambled text out
          else if (scrambleOffset < scrambledLetterCount) {
            setScrambleOffset((prev) => prev + 1);
          }
          // Complete animation
          else {
            clearInterval(interval);
            setIsAnimating(false);
            onComplete?.();
          }

          // Calculate how many scrambled letters we can show
          const remainingSpace = Math.max(0, text.length - visibleLetterCount);
          const currentScrambleCount = Math.min(
            remainingSpace,
            scrambledLetterCount,
          );

          // Generate scrambled text
          const scrambledPart = Array(currentScrambleCount)
            .fill(0)
            .map(
              () => characters[Math.floor(Math.random() * characters.length)],
            )
            .join('');

          setDisplayText(text.slice(0, visibleLetterCount) + scrambledPart);
        }, scrambleSpeed);
      }

      return () => {
        if (interval) clearInterval(interval);
      };
    }, [
      isAnimating,
      text,
      visibleLetterCount,
      scrambleOffset,
      scrambledLetterCount,
      characters,
      scrambleSpeed,
      onComplete,
    ]);

    const renderText = () => {
      const revealed = displayText.slice(0, visibleLetterCount);
      const scrambled = displayText.slice(visibleLetterCount);

      return (
        <>
          <span className={className}>{revealed}</span>
          <span className={scrambledClassName}>{scrambled}</span>
        </>
      );
    };

    return (
      <>
        <span className="sr-only">{text}</span>
        <span className="inline-block whitespace-pre-wrap" aria-hidden="true">
          {renderText()}
        </span>
      </>
    );
  },
);

ScrambleIn.displayName = 'ScrambleIn';
export { ScrambleIn };
