"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { adminGenerateMarketingCopy, type AdminGenerateMarketingCopyOutput } from "@/ai/flows/admin-generate-marketing-copy-flow";
import { Sparkles, Loader2, ShieldCheck, AlertCircle, Copy, Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export default function MarketingCopyGenerator() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AdminGenerateMarketingCopyOutput | null>(null);
  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState({
    courseName: "",
    courseDescription: "",
    courseCategory: "Habilitação Especial",
    copyType: "headline" as const,
  });

  const prohibitedPhrases = ["facilitar CNH", "garantia de aprovação", "sem estudar", "esquema cnh", "aprovação garantida"];
  const trustBuildingAlternatives = ["conforme legislação", "curso regulamentado", "plataforma homologada", "certificado oficial"];

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.courseName || !formData.courseDescription) {
      toast({
        variant: "destructive",
        title: "Campos obrigatórios",
        description: "Por favor, preencha o nome e a descrição do curso.",
      });
      return;
    }

    setLoading(true);
    try {
      const output = await adminGenerateMarketingCopy({
        ...formData,
        prohibitedPhrases,
        trustBuildingAlternatives,
      });
      setResult(output);
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Erro na geração",
        description: "Não foi possível gerar a cópia no momento. Tente novamente.",
      });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (result?.generatedCopy) {
      navigator.clipboard.writeText(result.generatedCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast({
        title: "Copiado!",
        description: "Texto copiado para a área de transferência.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <Navbar />
      <main className="container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-black flex items-center gap-3 mb-2">
              <Sparkles className="w-8 h-8 text-secondary" /> Gerador de Marketing IA
            </h1>
            <p className="text-muted-foreground">
              Crie textos persuasivos e 100% em conformidade com as regras do DETRAN e CONTRAN.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Configurações</CardTitle>
                <CardDescription>Defina as informações do curso para a IA.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleGenerate} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="courseName">Nome do Curso</Label>
                    <Input 
                      id="courseName" 
                      placeholder="Ex: MOPP Formação" 
                      value={formData.courseName}
                      onChange={(e) => setFormData({...formData, courseName: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Categoria</Label>
                    <Select 
                      value={formData.courseCategory} 
                      onValueChange={(val) => setFormData({...formData, courseCategory: val})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione uma categoria" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Habilitação Especial">Habilitação Especial</SelectItem>
                        <SelectItem value="Reciclagem de CNH">Reciclagem de CNH</SelectItem>
                        <SelectItem value="Formação Profissional">Formação Profissional</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="copyType">Tipo de Texto</Label>
                    <Select 
                      value={formData.copyType} 
                      onValueChange={(val: any) => setFormData({...formData, copyType: val})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="headline">Headline (Título)</SelectItem>
                        <SelectItem value="subheadline">Subheadline (Subtítulo)</SelectItem>
                        <SelectItem value="cta">CTA (Chamada para ação)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Benefícios do Curso</Label>
                    <Textarea 
                      id="description" 
                      className="min-h-[120px]"
                      placeholder="Descreva o que o aluno ganha ao fazer este curso..."
                      value={formData.courseDescription}
                      onChange={(e) => setFormData({...formData, courseDescription: e.target.value})}
                    />
                  </div>

                  <Button type="submit" disabled={loading} className="w-full bg-primary text-white h-12">
                    {loading ? (
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    ) : (
                      <Sparkles className="w-4 h-4 mr-2" />
                    )}
                    Gerar Cópia Otimizada
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              {result ? (
                <>
                  <Card className="border-primary/20 shadow-lg">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <div className="space-y-1">
                        <CardTitle className="text-xl">Resultado da IA</CardTitle>
                        <Badge variant={result.isCompliant ? "default" : "destructive"} className="flex gap-1 w-fit">
                          {result.isCompliant ? <ShieldCheck className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
                          {result.isCompliant ? "100% Compliant" : "Possível Risco"}
                        </Badge>
                      </div>
                      <Button variant="ghost" size="icon" onClick={copyToClipboard}>
                        {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                      </Button>
                    </CardHeader>
                    <CardContent>
                      <div className="p-6 bg-muted rounded-lg font-medium text-lg border border-border leading-relaxed">
                        {result.generatedCopy}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm uppercase tracking-wider text-muted-foreground">Notas de Compliance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {result.complianceNotes.map((note, idx) => (
                          <li key={idx} className="text-sm flex gap-2 items-start text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                            {note}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </>
              ) : (
                <div className="h-full flex flex-col items-center justify-center p-12 bg-white rounded-xl border-2 border-dashed border-border text-center">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                    <Sparkles className="w-8 h-8 text-muted-foreground/40" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Aguardando geração</h3>
                  <p className="text-sm text-muted-foreground">Preencha os dados ao lado para criar seu material de marketing.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
