import { BadgeCheck, CarFront, CircleDollarSign, ClipboardList, FileText, ShieldCheck } from "lucide-react";

export const SERVICES = [
  { slug: "transferencia-de-veiculo", title: "Transferência de veículo", description: "Atendimento para as etapas de transferência do seu veículo.", icon: CarFront, image: "/image/documentacao-carro.png", imageAlt: "Carro para transferência de veículo em Guarujá" },
  { slug: "licenciamento", title: "Licenciamento", description: "Orientação para manter a documentação do veículo regularizada.", icon: ClipboardList, image: "/image/documentacao-carro.png", imageAlt: "Documentação de carro para licenciamento em Guarujá" },
  { slug: "ipva-e-debitos", title: "IPVA e débitos", description: "Consulte e organize pendências relacionadas ao seu veículo.", icon: CircleDollarSign, image: "/image/documentacao-carro.png", imageAlt: "Carro e documentação para consulta de IPVA e débitos" },
  { slug: "documentacao-e-crlv-e", title: "Documentação e CRLV-e", description: "Emissão de CRLV-e e orientação para regularização documental.", icon: FileText, image: "/image/documentacao-carro.png", imageAlt: "Documentação veicular e CRLV-e de carro" },
  { slug: "renovacao-de-cnh", title: "Renovação de CNH", description: "Orientação sobre as etapas e os documentos para renovar sua habilitação.", icon: BadgeCheck, image: "/image/direcao-defensiva.jpg", imageAlt: "Direção segura para renovação de CNH em Guarujá" },
  { slug: "multas-e-recursos", title: "Multas e recursos", description: "Análise de autuações, defesa prévia e recursos administrativos à JARI e ao CETRAN.", icon: ClipboardList, image: "/image/direcao-defensiva.jpg", imageAlt: "Orientação de trânsito para multas e recursos em Guarujá" },
  { slug: "suspensao-e-cassacao", title: "Suspensão e cassação", description: "Atendimento para defesa em processos relacionados ao direito de dirigir.", icon: ShieldCheck, image: "/image/direcao-defensiva.jpg", imageAlt: "Direção defensiva e orientação sobre suspensão da CNH" },
  { slug: "indicacao-de-condutor", title: "Indicação de condutor", description: "Orientação para identificar o condutor responsável conforme o seu caso.", icon: CarFront, image: "/image/documentacao-carro.png", imageAlt: "Carro e documentação para indicação de condutor" },
] as const;

export const serviceWhatsApp = (title: string) => `https://wa.me/5513991932590?text=${encodeURIComponent(`Olá, vim pelo site e gostaria de informações sobre ${title}.`)}`;
