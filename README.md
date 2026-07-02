# Adere+ — Landing Page

Landing page institucional do projeto **Adere+**, plataforma digital de
acompanhamento da adesão de medicamentos de pacientes em ensaios clínicos.
Projeto acadêmico do Departamento de Computação (DCOMP) da Universidade
Federal de Sergipe (UFS).

## Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) (build tool e dev server)
- [Tailwind CSS v4](https://tailwindcss.com/) (design tokens via `@theme` em `src/index.css`)
- [lucide-react](https://lucide.dev/) (ícones)
- [@fontsource](https://fontsource.org/) (Sora, Inter, JetBrains Mono — self-hosted, sem dependência de CDN externa)

## Como rodar

```bash
npm install
npm run dev       # ambiente de desenvolvimento em http://localhost:5173
npm run build     # build de produção em /dist
npm run preview   # serve o build de produção localmente
```

## Estrutura

```
src/
  components/
    ui/              # primitivos reutilizáveis (Section, Button, cards, avatar, motivo blister)
    Header.tsx        Hero.tsx        Objective.tsx     Differentials.tsx
    Features.tsx       Pitch.tsx       Team.tsx          Contact.tsx        Footer.tsx
  data/
    nav.ts            # itens do menu + e-mail de contato
    differentials.ts   # cards da seção "Diferenciais"
    features.ts        # cards do carrossel "Funcionalidades" (ordem = fluxo real de uso)
    team.ts             # desenvolvedores, consultoria técnica, especialistas do domínio
  types.ts             # tipos compartilhados (Person, Feature, Differential, NavItem)
public/
  logos/               # logos institucionais (UFS, DCOMP) extraídas do repositório oficial
```

## Editando conteúdo

A maior parte do conteúdo textual vive nos arquivos em `src/data/`, como
arrays simples — não é necessário mexer nos componentes para:

- Adicionar/remover um diferencial → `src/data/differentials.ts`
- Adicionar/remover uma funcionalidade do carrossel → `src/data/features.ts`
- Atualizar a equipe (desenvolvedores, consultoria técnica, especialistas) → `src/data/team.ts`
- Trocar o e-mail de contato ou os links do menu → `src/data/nav.ts`

### Placeholders pendentes

Os seguintes pontos usam dados de espaço reservado (`isPlaceholder: true` ou
comentários `TODO`) até que as informações oficiais sejam fornecidas:

- Fotos, nomes e cursos dos alunos desenvolvedores (`src/data/team.ts`)
- Foto e confirmação de papel dos especialistas do domínio (`src/data/team.ts`)
- Vídeo de pitch — defina `PITCH_VIDEO_EMBED_URL` em `src/components/Pitch.tsx`
  com a URL de embed (YouTube/Vimeo) quando o vídeo estiver pronto
- E-mail institucional oficial (atualmente `contato-adere@dcomp.ufs.br`) —
  atualize `CONTACT_EMAIL` em `src/data/nav.ts` quando confirmado

## Identidade visual

- **Cores**: teal clínico (`primary`) como cor de marca, âmbar (`accent`)
  para lembretes/CTA e azul de pesquisa (`research`) para dados —
  tokens definidos em `@theme` no topo de `src/index.css`.
- **Tipografia**: Sora (display/headings), Inter (corpo de texto),
  JetBrains Mono (rótulos, dados, e-mail).
- **Elemento de assinatura**: a "grade blister" (`BlisterMotif.tsx`), um
  padrão de células de cartela de comprimidos — usado no hero, no logo e
  como divisor visual, remetendo diretamente ao rastreio de embalagens via
  QR Code descrito no projeto.
