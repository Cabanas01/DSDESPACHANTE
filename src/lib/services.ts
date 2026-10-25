import { BadgeCheck, CarFront, CircleDollarSign, ClipboardList, FileText, ShieldCheck } from "lucide-react";

export const SERVICES = [
  { slug: "transferencia-de-veiculo", title: "Transferência de veículo", description: "Atendimento para as etapas de transferência do seu veículo.", icon: CarFront },
  { slug: "licenciamento", title: "Licenciamento", description: "Orientação para manter a documentação do veículo regularizada.", icon: ClipboardList },
  { slug: "ipva-e-debitos", title: "IPVA e débitos", description: "Consulte e organize pendências relacionadas ao seu veículo.", icon: CircleDollarSign },
  { slug: "documentacao-e-crlv-e", title: "Documentação e CRLV-e", description: "Emissão de CRLV-e e orientação para regularização documental.", icon: FileText },
  { slug: "renovacao-de-cnh", title: "Renovação de CNH", description: "Orientação sobre as etapas e os documentos para renovar sua habilitação.", icon: BadgeCheck },
  { slug: "multas-e-recursos", title: "Multas e recursos", description: "Análise de autuações, defesa prévia e recursos administrativos à JARI e ao CETRAN.", icon: ClipboardList },
  { slug: "suspensao-e-cassacao", title: "Suspensão e cassação", description: "Atendimento para defesa em processos relacionados ao direito de dirigir.", icon: ShieldCheck },
  { slug: "indicacao-de-condutor", title: "Indicação de condutor", description: "Orientação para identificar o condutor responsável conforme o seu caso.", icon: CarFront },
] as const;

export const serviceWhatsApp = (title: string) => `https://wa.me/5513991932590?text=${encodeURIComponent(`Olá, vim pelo site e gostaria de informações sobre ${title}.`)}`;
