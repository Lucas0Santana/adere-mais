import {
  BellRing,
  ClipboardList,
  Database,
  FlaskConical,
  Gauge,
  PackageSearch,
  QrCode,
  Smartphone,
} from "lucide-react";

import type { Differential } from "../types";

/**
 * Edit this array to update the "Diferenciais" section.
 * Each entry renders as one card — order here is the order on the page.
 */
export const differentials: Differential[] = [
  {
    id: "foco-ensaios",
    icon: FlaskConical,
    title: "Foco específico em ensaios clínicos",
    description:
      "Construído para a rotina real da pesquisa clínica, não adaptado de um sistema genérico de saúde.",
  },
  {
    id: "web-mobile",
    icon: Smartphone,
    title: "Web e mobile integrados",
    description:
      "Coordenadores acompanham pelo sistema web enquanto pacientes registram o uso a partir do aplicativo mobile.",
  },
  {
    id: "controle-lotes",
    icon: PackageSearch,
    title: "Controle de medicamentos, grupos, lotes e embalagens",
    description:
      "Cada unidade entregue ao paciente é rastreável, do lote de fabricação até a embalagem individual.",
  },
  {
    id: "qrcode",
    icon: QrCode,
    title: "QR Code para identificação e rastreabilidade",
    description:
      "Cada embalagem recebe um código próprio e criptografado, agilizando a identificação segura durante o estudo.",
  },
  {
    id: "lembretes",
    icon: BellRing,
    title: "Lembretes para uso correto",
    description:
      "Notificações ajudam o paciente a seguir os horários certos, reduzindo esquecimentos.",
  },
  {
    id: "registro",
    icon: ClipboardList,
    title: "Registro estruturado do uso",
    description:
      "Cada dose tomada é registrada pelo paciente, garantindo total rastreabilidade e dispensando anotações manuais.",
  },
  {
    id: "indicadores",
    icon: Gauge,
    title: "Indicadores de adesão",
    description:
      "Painéis mostram a adesão de cada paciente para apoiar decisões da equipe responsável.",
  },
  {
    id: "centralizado",
    icon: Database,
    title: "Informações centralizadas",
    description:
      "Dados de pacientes, medicamentos e adesão reunidos em um só lugar, acessível a toda a equipe do estudo.",
  },
];
