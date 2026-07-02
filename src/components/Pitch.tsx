import { PlayCircle } from "lucide-react";
import { Section } from "./ui/Section";

/** Set this once the final pitch video is available (YouTube/Vimeo embed URL). */
const PITCH_VIDEO_EMBED_URL: string | null = null;

export function Pitch() {
  return (
    <Section
      id="pitch"
      tone="ink"
      eyebrow="Pitch"
      title="Conheça o Adere+ em poucos minutos"
      intro="Assista ao pitch do projeto e entenda como o Adere+ contribui para o acompanhamento da adesão de medicamentos em ensaios clínicos."
    >
      <div className="mx-auto aspect-video max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-ink-soft">
        {PITCH_VIDEO_EMBED_URL ? (
          <iframe
            src={PITCH_VIDEO_EMBED_URL}
            title="Vídeo de pitch do Adere+"
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center">
            <PlayCircle className="h-12 w-12 text-white/50" />
            <p className="font-display text-base font-medium text-white/80">
              Vídeo de pitch em breve
            </p>
            <p className="max-w-sm text-sm text-white/50">
              Este espaço receberá o vídeo de apresentação do projeto assim
              que estiver disponível.
            </p>
          </div>
        )}
      </div>
    </Section>
  );
}
