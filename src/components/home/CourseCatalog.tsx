
"use client";

import { COURSES, type Course } from "@/lib/courses";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LINKS } from "@/lib/constants";
import { ShoppingCart, MessageCircle, Info } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

function CourseCard({ course }: { course: Course }) {
  return (
    <div className="group bg-white rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="relative h-48 w-full overflow-hidden">
        <Image 
          src={course.image} 
          alt={course.name} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
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
        <h3 className="text-lg md:text-xl font-bold mb-3 line-clamp-2 leading-tight group-hover:text-primary transition-colors">{course.name}</h3>
        <p className="text-sm text-muted-foreground mb-6 line-clamp-2 flex-1">{course.description}</p>
        
        <div className="mb-6 pt-4 border-t border-border/50">
          <div className="flex items-baseline gap-2">
            <span className="text-xs font-medium text-muted-foreground">Por apenas</span>
            <span className="text-2xl font-black text-foreground">R$ {course.price.toFixed(2).replace('.', ',')}</span>
          </div>
          <p className="text-[10px] font-bold text-primary mt-1 flex items-center gap-1 uppercase tracking-tighter">
            <Info className="w-3 h-3" /> Certificado válido nacionalmente
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold h-11" asChild>
            <Link href={course.purchaseUrl} target="_blank">
              <ShoppingCart className="w-4 h-4 mr-2" /> Comprar Agora
            </Link>
          </Button>
          <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/5 h-11 font-semibold" asChild>
            <Link href={course.whatsappUrl || LINKS.WHATSAPP} target="_blank">
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
  
  const categories = ["Todos", ...Array.from(new Set(COURSES.map(c => c.category)))];
  
  const filteredCourses = activeCategory === "Todos" 
    ? COURSES 
    : COURSES.filter(c => c.category === activeCategory);

  return (
    <section id="cursos" className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
            Catálogo de <span className="text-primary">Cursos Oficiais</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Escolha sua especialização e comece a estudar hoje mesmo. Todos os nossos cursos são 100% online e homologados.
          </p>
        </div>

        {/* Categories Filter - Optimized for Mobile Scroll */}
        <div className="flex overflow-x-auto pb-4 gap-2 mb-12 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 scroll-smooth">
          {categories.map((cat) => (
            <Button 
              key={cat} 
              variant={activeCategory === cat ? "default" : "outline"}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full text-[10px] font-bold uppercase tracking-wider whitespace-nowrap px-6 h-9 ${activeCategory === cat ? 'bg-primary' : 'hover:border-primary'}`}
              size="sm"
            >
              {cat}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        
        {filteredCourses.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground font-medium">Nenhum curso encontrado nesta categoria.</p>
          </div>
        )}
      </div>
    </section>
  );
}
