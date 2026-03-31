
export interface Course {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  tags: string[];
  purchaseUrl: string;
  isPopular?: boolean;
}

export const COURSES: Course[] = [
  // FORMAÇÃO
  {
    id: "mopp-formacao",
    name: "FORMAÇÃO MOPP",
    category: "Especialização (Formação)",
    description: "Movimentação de Produtos Perigosos. Essencial para motoristas que transportam cargas químicas e inflamáveis.",
    price: 319.90,
    purchaseUrl: "https://pay.hotmart.com/ID_AQUI?checkoutMode=10",
    image: "/image/mopp-formacao.jpg",
    tags: ["Mais vendido", "Certificado Válido"],
    isPopular: true,
  },
  {
    id: "escolar-formacao",
    name: "FORMAÇÃO ESCOLAR",
    category: "Especialização (Formação)",
    description: "Capacite-se para o transporte de crianças e adolescentes com segurança e conformidade legal.",
    price: 319.90,
    purchaseUrl: "https://pay.hotmart.com/ID_AQUI",
    image: "/image/escolar-formacao.jpg",
    tags: ["Mais procurado"],
    isPopular: true,
  },
  {
    id: "coletivo-formacao",
    name: "FORMAÇÃO COLETIVO PASSAGEIROS",
    category: "Especialização (Formação)",
    description: "Curso obrigatório para motoristas de ônibus e vans de transporte coletivo urbano e rodoviário.",
    price: 299.90,
    purchaseUrl: "https://pay.hotmart.com/ID_AQUI",
    image: "/image/coletivo-formacao.jpg",
    tags: ["Essencial"],
    isPopular: true,
  },
  {
    id: "emergencia-formacao",
    name: "FORMAÇÃO EMERGÊNCIA",
    category: "Especialização (Formação)",
    description: "Treinamento especializado para condutores de veículos de socorro e emergência.",
    price: 319.90,
    purchaseUrl: "https://pay.hotmart.com/ID_AQUI",
    image: "/image/emergencia-formacao.jpg",
    tags: ["Certificado Válido"],
  },
  {
    id: "indivisivel-formacao",
    name: "FORMAÇÃO CARGA INDIVISÍVEL",
    category: "Especialização (Formação)",
    description: "Capacitação para o transporte de cargas de grandes dimensões e pesos elevados.",
    price: 349.90,
    purchaseUrl: "https://pay.hotmart.com/ID_AQUI",
    image: "/image/indivisivel-formacao.jpg",
    tags: ["Carga Especial"],
  },

  // ATUALIZAÇÃO
  {
    id: "mopp-atualizacao",
    name: "ATUALIZAÇÃO MOPP",
    category: "Especialização (Atualização)",
    description: "Renove seu curso de Movimentação de Produtos Perigosos de forma rápida e online.",
    price: 169.90,
    purchaseUrl: "https://pay.hotmart.com/ID_AQUI",
    image: "/image/mopp-atualizacao.jpg",
    tags: ["Renovação"],
  },
  {
    id: "escolar-atualizacao",
    name: "ATUALIZAÇÃO ESCOLAR",
    category: "Especialização (Atualização)",
    description: "Atualize seus conhecimentos para continuar atuando no transporte escolar.",
    price: 169.90,
    purchaseUrl: "https://pay.hotmart.com/ID_AQUI",
    image: "/image/escolar-atualizacao.jpg",
    tags: ["Renovação"],
  },
  {
    id: "coletivo-atualizacao",
    name: "ATUALIZAÇÃO COLETIVO PASSAGEIROS",
    category: "Especialização (Atualização)",
    description: "Atualização obrigatória para motoristas de ônibus e transporte de passageiros.",
    price: 159.90,
    purchaseUrl: "https://pay.hotmart.com/ID_AQUI",
    image: "/image/coletivo-atualizacao.jpg",
    tags: ["Renovação"],
  },

  // TREINAMENTOS E NRS
  {
    id: "direcao-defensiva",
    name: "Direção Defensiva",
    category: "Treinamento Profissional",
    description: "Aprenda técnicas para evitar acidentes e preservar vidas no trânsito.",
    price: 89.90,
    purchaseUrl: "https://pay.hotmart.com/ID_AQUI",
    image: "/image/direcao-defensiva.jpg",
    tags: ["Segurança"],
  },
  {
    id: "nr-35",
    name: "NR-35 - Trabalho em Altura",
    category: "Normas Regulamentadoras",
    description: "Treinamento obrigatório para profissionais que realizam atividades acima de 2 metros.",
    price: 149.00,
    purchaseUrl: "https://pay.hotmart.com/ID_AQUI",
    image: "/image/nr-35.jpg",
    tags: ["Segurança do Trabalho"],
  },
];
