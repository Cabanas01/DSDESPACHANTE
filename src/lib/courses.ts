
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
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800",
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
    image: "https://images.unsplash.com/photo-1556691421-cf15fe27a0b6?auto=format&fit=crop&q=80&w=800",
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
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800",
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
    image: "https://images.unsplash.com/photo-1587748891483-85f1c4c2f3eb?auto=format&fit=crop&q=80&w=800",
    tags: ["Certificado Válido"],
  },
  {
    id: "indivisivel-formacao",
    name: "FORMAÇÃO CARGA INDIVISÍVEL",
    category: "Especialização (Formação)",
    description: "Capacitação para o transporte de cargas de grandes dimensões e pesos elevados.",
    price: 349.90,
    purchaseUrl: "https://pay.hotmart.com/ID_AQUI",
    image: "https://images.unsplash.com/photo-1586191582056-a15cd117d1bb?auto=format&fit=crop&q=80&w=800",
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
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800",
    tags: ["Renovação"],
  },
  {
    id: "escolar-atualizacao",
    name: "ATUALIZAÇÃO ESCOLAR",
    category: "Especialização (Atualização)",
    description: "Atualize seus conhecimentos para continuar atuando no transporte escolar.",
    price: 169.90,
    purchaseUrl: "https://pay.hotmart.com/ID_AQUI",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
    tags: ["Renovação"],
  },
  {
    id: "coletivo-atualizacao",
    name: "ATUALIZAÇÃO COLETIVO PASSAGEIROS",
    category: "Especialização (Atualização)",
    description: "Atualização obrigatória para motoristas de ônibus e transporte de passageiros.",
    price: 159.90,
    purchaseUrl: "https://pay.hotmart.com/ID_AQUI",
    image: "https://images.unsplash.com/photo-1459253331218-c4d77593e99d?auto=format&fit=crop&q=80&w=800",
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
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800",
    tags: ["Segurança"],
  },
  {
    id: "nr-35",
    name: "NR-35 - Trabalho em Altura",
    category: "Normas Regulamentadoras",
    description: "Treinamento obrigatório para profissionais que realizam atividades acima de 2 metros.",
    price: 149.00,
    purchaseUrl: "https://pay.hotmart.com/ID_AQUI",
    image: "https://images.unsplash.com/photo-1508350181261-0062400e9391?auto=format&fit=crop&q=80&w=800",
    tags: ["Segurança do Trabalho"],
  },
];
