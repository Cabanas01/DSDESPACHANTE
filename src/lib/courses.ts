export interface Course {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  tags: string[];
  isPopular?: boolean;
}

export const COURSES: Course[] = [
  {
    id: "mopp-formacao",
    name: "MOPP - Formação",
    category: "Habilitação Especial",
    description: "Movimentação de Produtos Perigosos. Essencial para motoristas que transportam cargas químicas e inflamáveis.",
    price: 349.90,
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800",
    tags: ["Mais vendido", "Certificado Válido"],
    isPopular: true,
  },
  {
    id: "reciclagem-condutores",
    name: "Reciclagem de Condutores",
    category: "Recuperação de CNH",
    description: "Recupere seu direito de dirigir de forma rápida e 100% online. Curso aprovado pelo DETRAN.",
    price: 289.00,
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800",
    tags: ["Oferta por tempo limitado", "Últimas vagas hoje"],
    isPopular: true,
  },
  {
    id: "transporte-escolar",
    name: "Transporte Escolar",
    category: "Habilitação Especial",
    description: "Capacite-se para o transporte de crianças e adolescentes com segurança e conformidade legal.",
    price: 319.90,
    image: "https://images.unsplash.com/photo-1556691421-cf15fe27a0b6?auto=format&fit=crop&q=80&w=800",
    tags: ["Mais procurado"],
    isPopular: true,
  },
  {
    id: "transporte-emergencia",
    name: "Condutores de Veículos de Emergência",
    category: "Habilitação Especial",
    description: "Treinamento especializado para motoristas de ambulâncias e viaturas oficiais.",
    price: 319.90,
    image: "https://images.unsplash.com/photo-1587748891483-85f1c4c2f3eb?auto=format&fit=crop&q=80&w=800",
    tags: ["Certificado Válido"],
  },
  {
    id: "transporte-passageiros",
    name: "Transporte Coletivo de Passageiros",
    category: "Habilitação Especial",
    description: "Curso obrigatório para motoristas de ônibus e vans de transporte coletivo.",
    price: 299.90,
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800",
    tags: ["Essencial"],
  },
];