import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Star } from "lucide-react";
import { googleReviews, GOOGLE_REVIEWS_URL, type GoogleReview } from "@/lib/site-data";
import { Reveal, SectionHeading } from "./Reveal";
import { GoogleIcon } from "./BrandIcons";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={
            i < Math.round(rating)
              ? "size-4 fill-gold text-gold"
              : "size-4 text-muted-foreground/40"
          }
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: GoogleReview }) {
  const initial = review.name.trim().charAt(0).toUpperCase();
  return (
    <article className="flex h-full flex-col rounded-3xl border border-border bg-card/80 p-6 shadow-elegant">
      <div className="flex items-center gap-3">
        {review.photoUrl ? (
          <img
            src={review.photoUrl}
            alt={review.name}
            loading="lazy"
            className="size-11 rounded-full object-cover"
          />
        ) : (
          <span className="flex size-11 items-center justify-center rounded-full border border-gold/30 bg-secondary font-display text-lg text-gold">
            {initial}
          </span>
        )}
        <div className="flex-1">
          <p className="text-sm font-medium">{review.name}</p>
          <Stars rating={review.rating} />
        </div>
        <GoogleIcon className="size-5" />
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
        “{review.text}”
      </p>
      <p className="mt-4 text-[0.65rem] tracking-[0.18em] text-muted-foreground/70 uppercase">
        Avaliação no Google
      </p>
    </article>
  );
}

export function Reviews() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [index, setIndex] = useState(0);
  const count = googleReviews.length;

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
    }, 4800);
    return () => clearInterval(id);
  }, [paused, count, scrollTo]);

  return (
    <section id="avaliacoes" className="bg-wine-gradient py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Reputação"
          title="O que dizem nossos clientes"
          subtitle="Avaliações publicadas no Google"
        />

        {count > 0 ? (
          <div className="mt-10">
            <div
              ref={trackRef}
              onPointerDown={() => setPaused(true)}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2"
            >
              {googleReviews.map((review, i) => (
                <div
                  key={`${review.name}-${i}`}
                  className="min-w-[86%] snap-start sm:min-w-[48%] lg:min-w-[32%]"
                >
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                type="button"
                aria-label="Avaliação anterior"
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
                {googleReviews.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Ir para avaliação ${i + 1}`}
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
                aria-label="Próxima avaliação"
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
        ) : (
          <Reveal className="mx-auto mt-10 max-w-xl">
            <div className="rounded-3xl border border-border bg-card/70 p-8 text-center shadow-elegant">
              <GoogleIcon className="mx-auto size-8" />
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                As avaliações reais publicadas no perfil do Google podem ser
                consultadas diretamente na página do escritório.
              </p>
            </div>
          </Reveal>
        )}

        <Reveal className="mt-8 text-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-6 py-3 text-[0.7rem] font-semibold tracking-[0.14em] text-gold transition-colors hover:bg-gold/10"
          >
            <GoogleIcon className="size-4" />
            VER AVALIAÇÕES NO GOOGLE
            <ExternalLink className="size-3.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
