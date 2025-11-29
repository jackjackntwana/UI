// src/ai/flows/synthesize-healthcare-news.ts
'use server';

/**
 * @fileOverview A flow that provides a personalized wellness digest with GenAI-filtered healthcare news.
 *
 * - synthesizeHealthcareNews - A function that handles the news synthesis process.
 * - SynthesizeHealthcareNewsInput - The input type for the synthesizeHealthcareNews function.
 * - SynthesizeHealthcareNewsOutput - The return type for the synthesizeHealthcareNews function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SynthesizeHealthcareNewsInputSchema = z.object({
  interests: z
    .string()
    .describe('The user specified interests to filter healthcare news by.'),
});
export type SynthesizeHealthcareNewsInput = z.infer<typeof SynthesizeHealthcareNewsInputSchema>;

const SynthesizeHealthcareNewsOutputSchema = z.object({
  newsDigest: z
    .string()
    .describe('A personalized wellness digest with GenAI-filtered healthcare news.'),
});
export type SynthesizeHealthcareNewsOutput = z.infer<typeof SynthesizeHealthcareNewsOutputSchema>;

export async function synthesizeHealthcareNews(
  input: SynthesizeHealthcareNewsInput
): Promise<SynthesizeHealthcareNewsOutput> {
  return synthesizeHealthcareNewsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'synthesizeHealthcareNewsPrompt',
  input: {schema: SynthesizeHealthcareNewsInputSchema},
  output: {schema: SynthesizeHealthcareNewsOutputSchema},
  prompt: `You are a personalized healthcare news synthesizer.

You will take the user's specified interests and filter healthcare news by those interests.

User Interests: {{{interests}}}
`,
});

const synthesizeHealthcareNewsFlow = ai.defineFlow(
  {
    name: 'synthesizeHealthcareNewsFlow',
    inputSchema: SynthesizeHealthcareNewsInputSchema,
    outputSchema: SynthesizeHealthcareNewsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
