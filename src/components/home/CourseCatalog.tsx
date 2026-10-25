
"use client";

import { COURSES, type Course } from "@/lib/courses";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LINKS } from "@/lib/constants";
import { MessageCircle, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

function CourseCard({ course }: { course: Course }) {
  return (
    <div className="group bg-white rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="relative h-48 w-full overflow-hidden">
        <Link href={`/cursos/${course.id}`}>
          <Image 
            src={course.image} 
            alt={course.name} 
            fill 
            sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {course.tags.map((tag) => (
            <Badge key={tag} className={`
              ${tag.includes('Mais vendido') || tag.includes('procurado') ? 'bg-secondary text-secondary-foreground' : 'bg-primary/80 text-white'}
              border-none text-[10px] font-bold uppercase tracking-wider
            `}>
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      
      <div className="p-5 md:p-6 flex flex-col flex-1">
        <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">{course.category}</span>
        <Link href={`/cursos/${course.id}`}>
          <h3 className="text-lg md:text-xl font-bold mb-3 line-clamp-2 leading-tight group-hover:text-primary transition-colors">{course.name}</h3>
        </Link>
        <p className="text-sm text-muted-foreground mb-6 line-clamp-2 flex-1">{course.description}</p>
        
        <div className="mb-6 pt-4 border-t border-border/50">
          <div className="flex items-baseline gap-2">
            <span className="text-xs font-medium text-muted-foreground">Por apenas</span>
            <span className="text-2xl font-black text-foreground">R$ {course.price.toFixed(2).replace('.', ',')}</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold h-11" asChild>
            <Link href={`/cursos/${course.id}`}>
              Ver Detalhes e Inscrição
            </Link>
          </Button>
          <Button variant="outline" className="w-full border-primary/20 text-muted-foreground hover:bg-primary/5 hover:text-primary h-11 font-semibold" asChild>
            <Link href={course.whatsappUrl || LINKS.WHATSAPP} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 mr-2 text-[#25D366]" /> WhatsApp
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export function CourseCatalog() {
  const [activeCategory, setActiveCategory] = useState<string>("Todos");
  const [search, setSearch] = useState("");
  
  const categories = ["Todos", "Formação", "Atualização", "Cursos Livres", "Treinamento Profissional", "Normas Regulamentadoras", "Reciclagem e Outros"];
  
  const normalize = (value: string) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
  const query = normalize(search);
  const filteredCourses = COURSES.filter((course) =>
    (activeCategory === "Todos" || course.category.includes(activeCategory)) &&
    normalize(`${course.id} ${course.name} ${course.category} ${course.description}`).includes(query)
  );

  return (
    <section id="cursos" className="scroll-mt-24 py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
            Catálogo de <span className="text-primary">Cursos Oficiais</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Escolha sua especialização e comece a estudar hoje mesmo. Todos os nossos cursos são 100% online e homologados.
          </p>
        </div>

        <div className="mb-6 max-w-2xl">
          <label htmlFor="course-search" className="mb-2 block text-sm font-bold">Qual curso você procura?</label>
          <div className="relative">
            <Search aria-hidden="true" className="pointer-events-none absolute left-4 top-4 size-5 text-muted-foreground" />
            <input id="course-search" type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Busque por MOPP, escolar, reciclagem..." aria-controls="course-results" className="min-h-14 w-full rounded-xl border border-border bg-white py-3 pl-12 pr-4 text-base outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary" />
          </div>
        </div>
        <div role="group" aria-label="Filtrar cursos por categoria" className="flex overflow-x-auto pb-4 gap-2 mb-4 -mx-4 px-4 md:mx-0 md:px-0">
          {categories.map((cat) => (
            <Button 
              key={cat} 
              variant={activeCategory === cat ? "default" : "outline"}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
              aria-controls="course-results"
              className={`shrink-0 rounded-full text-xs font-bold whitespace-nowrap px-5 h-11 ${activeCategory === cat ? 'bg-primary' : 'hover:border-primary'}`}
              size="sm"
            >
              {cat}
            </Button>
          ))}
        </div>

        <p role="status" aria-live="polite" aria-atomic="true" className="mb-6 text-sm text-muted-foreground">{filteredCourses.length} {filteredCourses.length === 1 ? "curso encontrado" : "cursos encontrados"}</p>
        <div id="course-results" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        
        {filteredCourses.length === 0 && (
          <div className="text-center py-20">
            <p className="font-bold">Nenhum curso encontrado.</p>
            <p className="mt-2 text-sm text-muted-foreground">Tente outro nome ou limpe os filtros para ver todos os cursos.</p>
            <Button className="mt-5 min-h-11" onClick={() => { setSearch(""); setActiveCategory("Todos"); }}>Limpar busca e filtros</Button>
          </div>
        )}
      </div>
    </section>
  );
}
