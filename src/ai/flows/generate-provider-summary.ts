'use server';

/**
 * @fileOverview Generates a shareable health summary for a healthcare provider.
 *
 * - generateProviderSummary - A function that handles the generation of the health summary.
 * - GenerateProviderSummaryInput - The input type for the generateProviderSummary function.
 * - GenerateProviderSummaryOutput - The return type for the generateProviderSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProviderSummaryInputSchema = z.object({
  healthNarrative: z.string().describe('The user health narrative.'),
  vitalSigns: z.string().describe('The latest vital signs of the user.'),
  medicationList: z.string().describe('The list of medications the user is taking.'),
  keyEvents: z.string().describe('A summary of key health events in the user history, including diet and activity.'),
});
export type GenerateProviderSummaryInput = z.infer<typeof GenerateProviderSummaryInputSchema>;

const GenerateProviderSummaryOutputSchema = z.object({
  providerSummary: z.string().describe('A summary of the user health information for the provider.'),
});
export type GenerateProviderSummaryOutput = z.infer<typeof GenerateProviderSummaryOutputSchema>;

export async function generateProviderSummary(input: GenerateProviderSummaryInput): Promise<GenerateProviderSummaryOutput> {
  return generateProviderSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProviderSummaryPrompt',
  input: {schema: GenerateProviderSummaryInputSchema},
  output: {schema: GenerateProviderSummaryOutputSchema},
  prompt: `You are an AI assistant that generates health summaries for healthcare providers.

  Given the following information about the patient, create a concise and informative summary that highlights the most important aspects of their health history and current condition. The summary should be tailored for a healthcare provider to quickly understand the patient's needs and provide appropriate care.

  Patient Health Narrative: {{{healthNarrative}}}
  Vital Signs: {{{vitalSigns}}}
  Medication List: {{{medicationList}}}
  Key Health Events, Diet, and Activity: {{{keyEvents}}}
  `,
});

const generateProviderSummaryFlow = ai.defineFlow(
  {
    name: 'generateProviderSummaryFlow',
    inputSchema: GenerateProviderSummaryInputSchema,
    outputSchema: GenerateProviderSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
