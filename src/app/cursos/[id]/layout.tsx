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
  };
}

export default async function CourseLayout({ children, params }: CourseLayoutProps) {
  const course = await getCourse(params);

  if (!course) notFound();

  return children;
}
