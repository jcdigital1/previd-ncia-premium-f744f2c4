import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { reviewScreenshots } from "@/lib/site-data";

export function ReviewShots() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [index, setIndex] = useState(0);
  const count = reviewScreenshots.length;

  const scrollTo = useCallback((i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const child = track.children[i] as HTMLElement | undefined;
    if (child) track.scrollTo({ left: child.offsetLeft, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (paused || count < 2) return;
    const id = setInterval(() => {
      setIndex((prev) => {
        const next = (prev + 1) % count;
        scrollTo(next);
        return next;
      });
    }, 3800);
    return () => clearInterval(id);
  }, [paused, count, scrollTo]);

  if (count === 0) return null;

  return (
    <div className="mt-10">
      <div
        ref={trackRef}
        onPointerDown={() => setPaused(true)}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2"
      >
        {reviewScreenshots.map((src, i) => (
          <div
            key={src + i}
            className="min-w-[82%] snap-start sm:min-w-[46%] lg:min-w-[31%]"
          >
            <figure className="overflow-hidden rounded-3xl border border-gold/20 bg-card/80 p-2 shadow-elegant">
              <img
                src={src}
                alt={`Print de avaliação real publicada no Google — ${i + 1}`}
                loading="lazy"
                decoding="async"
                className="w-full rounded-2xl object-contain"
              />
            </figure>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Print anterior"
          onClick={() => {
            const next = (index - 1 + count) % count;
            setIndex(next);
            scrollTo(next);
          }}
          className="rounded-full border border-gold/30 p-2 text-gold transition-colors hover:bg-gold/10"
        >
          <ChevronLeft className="size-4" />
        </button>
        <div className="flex gap-1.5">
          {reviewScreenshots.map((src, i) => (
            <button
              key={src + i}
              type="button"
              aria-label={`Ir para print ${i + 1}`}
              onClick={() => {
                setIndex(i);
                scrollTo(i);
              }}
              className={
                i === index
                  ? "h-1.5 w-6 rounded-full bg-gold transition-all"
                  : "h-1.5 w-1.5 rounded-full bg-muted-foreground/40 transition-all"
              }
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Próximo print"
          onClick={() => {
            const next = (index + 1) % count;
            setIndex(next);
            scrollTo(next);
          }}
          className="rounded-full border border-gold/30 p-2 text-gold transition-colors hover:bg-gold/10"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
