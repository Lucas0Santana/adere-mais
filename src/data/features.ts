import {
  FlaskConical,
  UsersRound,
  Pill,
  Boxes,
  QrCode,
  BellRing,
  CheckCircle2,
  BarChart3,
} from "lucide-react";
import type { Feature } from "../types";

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
  },
  {
    id: "gerenciamento-pacientes",
    step: 2,
    icon: UsersRound,
    title: "Gerenciamento de pacientes",
    description:
      "Cadastre pacientes e vincule cada um ao seu ensaio e grupo de medicamento correspondente.",
  },
  {
    id: "grupos-posologia",
    step: 3,
    icon: Pill,
    title: "Grupos de medicamento e posologia",
    description:
      "Configure medicamentos, grupos, horários e orientações de uso para cada participante.",
  },
  {
    id: "lotes-embalagens",
    step: 4,
    icon: Boxes,
    title: "Controle de lotes e embalagens",
    description:
      "Gerencie lotes, quantidades disponíveis e embalagens entregues a cada paciente.",
  },
  {
    id: "qrcode-embalagens",
    step: 5,
    icon: QrCode,
    title: "QR Code nas embalagens",
    description:
      "Identifique e rastreie com segurança os medicamentos utilizados no estudo.",
  },
  {
    id: "lembretes-uso",
    step: 6,
    icon: BellRing,
    title: "Lembretes de uso",
    description:
      "Ajude o paciente a lembrar os horários corretos de administração do medicamento.",
  },
  {
    id: "registro-uso",
    step: 7,
    icon: CheckCircle2,
    title: "Registro de uso pelo paciente",
    description:
      "Registre quando o medicamento foi utilizado, apoiando o acompanhamento da adesão.",
  },
  {
    id: "indicadores-adesao",
    step: 8,
    icon: BarChart3,
    title: "Indicadores de adesão",
    description:
      "Acompanhe dados diários, semanais e históricos para apoiar a tomada de decisão da equipe.",
  },
];
