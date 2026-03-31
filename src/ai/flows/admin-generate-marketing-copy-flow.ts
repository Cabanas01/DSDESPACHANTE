'use server';
/**
 * @fileOverview An AI agent for generating marketing copy (headlines, subheadlines, CTA) for online courses.
 *
 * - adminGenerateMarketingCopy - A function that handles the marketing copy generation process.
 * - AdminGenerateMarketingCopyInput - The input type for the adminGenerateMarketingCopy function.
 * - AdminGenerateMarketingCopyOutput - The return type for the adminGenerateMarketingCopy function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AdminGenerateMarketingCopyInputSchema = z.object({
  courseName: z.string().describe('The name of the course.'),
  courseDescription: z.string().describe('A detailed description of the course content and benefits.'),
  courseCategory: z.string().describe('The category the course belongs to (e.g., "Habilitação Especial", "Segurança no Trânsito").'),
  copyType: z.enum(['headline', 'subheadline', 'cta']).describe('The type of marketing copy to generate (headline, subheadline, or call-to-action).'),
  prohibitedPhrases: z.array(z.string()).describe('A list of phrases that must NOT be included in the generated copy due to legal or compliance reasons.'),
  trustBuildingAlternatives: z.array(z.string()).describe('A list of legally sound, trust-building phrases that can be used as alternatives to prohibited phrases.'),
});
export type AdminGenerateMarketingCopyInput = z.infer<typeof AdminGenerateMarketingCopyInputSchema>;

const AdminGenerateMarketingCopyOutputSchema = z.object({
  generatedCopy: z.string().describe('The generated marketing copy.'),
  copyType: z.enum(['headline', 'subheadline', 'cta']).describe('The type of copy that was generated.'),
  complianceNotes: z.array(z.string()).describe('Notes regarding compliance, e.g., if any prohibited phrases were replaced and with what alternatives.'),
  isCompliant: z.boolean().describe('True if the generated copy is deemed compliant with the specified rules, false otherwise.'),
});
export type AdminGenerateMarketingCopyOutput = z.infer<typeof AdminGenerateMarketingCopyOutputSchema>;

export async function adminGenerateMarketingCopy(input: AdminGenerateMarketingCopyInput): Promise<AdminGenerateMarketingCopyOutput> {
  return adminGenerateMarketingCopyFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateMarketingCopyPrompt',
  input: {schema: AdminGenerateMarketingCopyInputSchema},
  output: {schema: AdminGenerateMarketingCopyOutputSchema},
  prompt: `You are an expert marketing copywriter for online courses, specializing in compliance and conversion optimization.\nYour task is to generate marketing copy for a course, ensuring it is highly persuasive, conversion-optimized, and strictly compliant with legal regulations.\n\nGenerate a {{copyType}} for the following course:\n\nCourse Name: {{{courseName}}}\nCourse Description: {{{courseDescription}}}\nCourse Category: {{{courseCategory}}}\n\nWhen generating the copy, you MUST adhere to the following rules:\n1.  **Avoid these prohibited phrases at all costs:**\n    {{#each prohibitedPhrases}}- "{{this}}"\n    {{/each}}\n2.  **Instead of prohibited phrases, use legally sound and trust-building alternatives.** Examples of acceptable alternatives include:\n    {{#each trustBuildingAlternatives}}- "{{this}}"\n    {{/each}}\n    Also consider phrases like 'curso regulamentado', 'requisitos legais', 'de acordo com as normas vigentes', 'certificado válido conforme legislação'.\n3.  If you would naturally use a prohibited phrase based on the course content, you MUST replace it with a compliant alternative.\n4.  In your response, explicitly state in the \`complianceNotes\` array field if any prohibited phrases were replaced, and what replacements were made. If no prohibited phrases were replaced, include 'No compliance issues detected or resolved.' in the array.\n5.  Set \`isCompliant\` to \`true\` if you successfully generated compliant copy and adhered to all rules, \`false\` otherwise (e.g., if you couldn't find a suitable compliant alternative or were forced to use a prohibited phrase).\n\nThe output must be a JSON object conforming to the output schema.`,
});

const adminGenerateMarketingCopyFlow = ai.defineFlow(
  {
    name: 'adminGenerateMarketingCopyFlow',
    inputSchema: AdminGenerateMarketingCopyInputSchema,
    outputSchema: AdminGenerateMarketingCopyOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
