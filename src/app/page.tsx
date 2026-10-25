import { InstitutionalHome } from "@/components/institutional/InstitutionalHome";
import type { Metadata } from "next";
import { BRAND, LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Despachante em Guarujá | Transferência, CNH e Multas | DS",
  description: "DS Despachante em Guarujá: transferência, licenciamento, CRLV-e, CNH, multas e recursos. Atendimento em Santo Antônio. Fale pelo (13) 99193-2590.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: BRAND.PARENT,
    title: "DS Despachante em Guarujá | Documentação, CNH e Multas",
    description: "Atendimento em Santo Antônio, Guarujá. Transferência de veículo, licenciamento, CNH e recursos de multas.",
    images: [{ url: "/image/hero-car-guaruja.png", alt: "DS Despachante Guarujá" }],
  },
  twitter: { card: "summary_large_image", title: "DS Despachante em Guarujá", images: ["/image/hero-car-guaruja.png"] },
};

const business = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://dsdespachanteguaruja.com.br/#empresa",
  name: BRAND.PARENT,
  legalName: BRAND.LEGAL_NAME,
  taxID: BRAND.CNPJ,
  url: "https://dsdespachanteguaruja.com.br/",
  logo: "https://dsdespachanteguaruja.com.br/image/logo.png",
  image: "https://dsdespachanteguaruja.com.br/image/logo.png",
  telephone: "+5513991932590",
  email: BRAND.EMAIL,
  description: "Despachante em Guarujá para documentação veicular, transferência, licenciamento, CNH e recursos de multas.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Alameda das Tulipas, 214, loja 1",
    addressLocality: "Guarujá",
    addressRegion: "SP",
    postalCode: "11432-250",
    addressCountry: "BR",
  },
  areaServed: { "@type": "City", name: "Guarujá" },
  sameAs: [LINKS.INSTAGRAM, LINKS.FACEBOOK],
  hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BRAND.ADDRESS)}`,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços de despachante em Guarujá",
    itemListElement: ["Transferência de veículo", "Licenciamento", "IPVA e débitos", "Documentação e CRLV-e", "Renovação de CNH", "Multas e recursos", "Suspensão e cassação", "Indicação de condutor"].map(name => ({
      "@type": "Offer", itemOffered: { "@type": "Service", name },
    })),
  },
};

export default function Home() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(business).replace(/</g, "\\u003c") }} /><InstitutionalHome /></>;
}
