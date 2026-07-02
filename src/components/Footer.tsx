import { AdereLogo } from "./ui/AdereLogo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-ink py-14 text-white/70">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-10 sm:flex-row sm:items-center">
          <div>
            <AdereLogo variant="light" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
              Projeto desenvolvido no contexto acadêmico do Departamento de
              Computação da Universidade Federal de Sergipe.
            </p>
          </div>

          <div className="flex items-center gap-8">
            <img
              src="public/logos/logo-ufs.png"
              alt="Logo da Universidade Federal de Sergipe (UFS)"
              className="h-14 w-auto object-contain brightness-0 invert opacity-80"
            />
            <img
              src="public/logos/logo-dcomp.png"
              alt="Logo do Departamento de Computação (DCOMP/UFS)"
              className="h-10 w-auto object-contain brightness-0 invert opacity-80"
            />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Adere+ · DCOMP/UFS. Todos os direitos reservados.</p>
          <a
            href="https://github.com/DCOMP-UFS"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white/70"
          >
            github.com/DCOMP-UFS
          </a>
        </div>
      </div>
    </footer>
  );
}
