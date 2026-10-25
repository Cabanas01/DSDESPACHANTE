import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { COURSES } from "@/lib/courses";

export const dynamicParams = false;

type CourseLayoutProps = {
  children: ReactNode;
  params: Promise<{ id: string }>;
};

async function getCourse(idPromise: Promise<{ id: string }>) {
  const { id } = await idPromise;
  return COURSES.find((course) => course.id === id);
}

export function generateStaticParams() {
  return COURSES.map(({ id }) => ({ id }));
}

export async function generateMetadata({ params }: Pick<CourseLayoutProps, "params">): Promise<Metadata> {
  const course = await getCourse(params);

  if (!course) return {};

  return {
    title: `${course.name} | Cursos | DS Despachante Guarujá`,
    description: course.description,
    alternates: { canonical: `/cursos/${course.id}` },
    openGraph: {
      type: "article",
      locale: "pt_BR",
      url: `/cursos/${course.id}`,
      title: `${course.name} | DS Despachante Guarujá`,
      description: course.description,
      images: [{ url: course.image, alt: course.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${course.name} | DS Despachante Guarujá`,
      description: course.description,
      images: [course.image],
    },
  };
}

export default async function CourseLayout({ children, params }: CourseLayoutProps) {
  const course = await getCourse(params);

  if (!course) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.description,
    url: `https://dsdespachanteguaruja.com.br/cursos/${course.id}`,
    image: `https://dsdespachanteguaruja.com.br${course.image}`,
    provider: {
      "@type": "Organization",
      name: "DS Despachante Guarujá",
      url: "https://dsdespachanteguaruja.com.br",
    },
    offers: {
      "@type": "Offer",
      price: course.price.toFixed(2),
      priceCurrency: "BRL",
      url: course.purchaseUrl,
      availability: "https://schema.org/InStock",
    },
  };

  return <>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} /></>;
}
