import {
  BarChart3,
  BellRing,
  Boxes,
  CheckCircle2,
  FlaskConical,
  Pill,
  QrCode,
  UsersRound,
} from "lucide-react";

import type { Feature } from "../types";

const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path}`;

/**
 * Edit this array to update the "Principais funcionalidades" carousel.
 * `step` reflects the real order of use of the system, from configuring
 * the trial through to reviewing adherence indicators — so the numbering
 * is meaningful, not decorative.
 */
export const features: Feature[] = [
  {
    id: "cadastro-ensaios",
    step: 1,
    icon: FlaskConical,
    title: "Cadastro de ensaios clínicos",
    description:
      "Organize estudos, responsáveis e configurações principais em um único cadastro inicial.",
    media: {
      kind: "video",
      src: assetPath("videos/cadastro-ensaio.mp4"),
      poster: assetPath("screenshots/cadastro-ensaio.png"),
      alt: "Tela de listagem de ensaios clínicos no sistema Adere+.",
    },
  },
  {
    id: "gerenciamento-pacientes",
    step: 2,
    icon: UsersRound,
    title: "Gerenciamento de pacientes",
    description:
      "Cadastre pacientes e vincule cada um ao seu ensaio e grupo de medicamento correspondente.",
    media: {
      kind: "image",
      src: assetPath("screenshots/listagem-pacientes.png"),
      alt: "Tela de listagem de pacientes no sistema Adere+.",
    },
  },
  {
    id: "grupos-posologia",
    step: 3,
    icon: Pill,
    title: "Grupos de medicamento e posologia",
    description:
      "Configure medicamentos, grupos, horários e orientações de uso para cada participante.",
    media: {
      kind: "image",
      src: assetPath("screenshots/listagem-medicamentos.png"),
      alt: "Tela de listagem de medicamentos no sistema Adere+.",
    },
  },
  {
    id: "lotes-embalagens",
    step: 4,
    icon: Boxes,
    title: "Controle de lotes e embalagens",
    description:
      "Gerencie lotes, quantidades disponíveis e embalagens entregues a cada paciente.",
    media: {
      kind: "image",
      src: assetPath("screenshots/listagem-lotes.png"),
      alt: "Demonstração em vídeo do gerenciamento de lotes no sistema Adere+.",
    },
  },
  {
    id: "qrcode-embalagens",
    step: 5,
    icon: QrCode,
    title: "QR Code nas embalagens",
    description:
      "Identifique e rastreie com segurança os medicamentos utilizados no estudo.",
    media: {
      kind: "video",
      src: assetPath("videos/gerenciamento-de-lotes.mp4"),
      poster: assetPath("screenshots/listagem-lotes.png"),
      alt: "Demonstração em vídeo do gerenciamento de lotes no sistema Adere+.",
    },
  },
  {
    id: "lembretes-uso",
    step: 6,
    icon: BellRing,
    title: "Lembretes e registros de uso",
    description:
      "Ajude o paciente a lembrar os horários corretos de administração do medicamento. Permita que o paciente registre quando o medicamento foi utilizado, apoiando o acompanhamento da adesão.",
    media: {
      kind: "image",
      src: assetPath("screenshots/lembrete-uso.jpeg"),
      alt: "Tela do lembrete de uso do sistema.",
    },
  },
  {
    id: "indicadores-adesao",
    step: 7,
    icon: BarChart3,
    title: "Indicadores de adesão",
    description:
      "Acompanhe dados diários, semanais e históricos para apoiar a tomada de decisão da equipe.",
    media: {
      kind: "image",
      src: assetPath("screenshots/dashboard-ensaio.png"),
      alt: "Tela de indicadores de adesão no sistema Adere+.",
    },
  },
];
