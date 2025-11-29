'use server';
/**
 * @fileOverview A flow that generates a personalized health narrative based on user data.
 *
 * - generatePersonalizedHealthNarrative - A function that handles the generation of the personalized health narrative.
 * - GeneratePersonalizedHealthNarrativeInput - The input type for the generatePersonalizedHealthNarrative function.
 * - GeneratePersonalizedHealthNarrativeOutput - The return type for the generatePersonalizedHealthNarrative function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePersonalizedHealthNarrativeInputSchema = z.object({
  vitals: z.object({
    bloodPressure: z.string().describe('Blood pressure reading.'),
    glucose: z.string().describe('Glucose level.'),
    sleep: z.string().describe('Sleep duration.'),
    moodScore: z.string().describe('Mood score.'),
  }).describe('User vitals data.'),
  dietaryGoalAdherence: z.string().describe('User adherence to dietary goal (e.g., 85%).'),
  lastMealMacroBreakdown: z.string().describe('Macro breakdown for the last meal.'),
  pivotalMomentSummary: z.string().describe('Summary of a pivotal moment.'),
  weatherAlert: z.string().describe('Weather alert for the user.'),
  airQualityAlert: z.string().describe('Air quality alert for the user.'),
  pollenAlert: z.string().describe('Pollen alert for the user.'),
  activityLevel: z.string().describe('User activity level.'),
});

export type GeneratePersonalizedHealthNarrativeInput = z.infer<typeof GeneratePersonalizedHealthNarrativeInputSchema>;

const GeneratePersonalizedHealthNarrativeOutputSchema = z.object({
  narrative: z.string().describe('A personalized health narrative based on the user data.'),
});

export type GeneratePersonalizedHealthNarrativeOutput = z.infer<typeof GeneratePersonalizedHealthNarrativeOutputSchema>;

export async function generatePersonalizedHealthNarrative(input: GeneratePersonalizedHealthNarrativeInput): Promise<GeneratePersonalizedHealthNarrativeOutput> {
  return generatePersonalizedHealthNarrativeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePersonalizedHealthNarrativePrompt',
  input: {schema: GeneratePersonalizedHealthNarrativeInputSchema},
  output: {schema: GeneratePersonalizedHealthNarrativeOutputSchema},
  prompt: `You are a personalized health narrative generator. You will use the provided data to create a compelling and easy-to-understand health narrative for the user.

Vitals: {{{vitals}}}
Dietary Goal Adherence: {{{dietaryGoalAdherence}}}
Last Meal Macro Breakdown: {{{lastMealMacroBreakdown}}}
Pivotal Moment Summary: {{{pivotalMomentSummary}}}
Weather Alert: {{{weatherAlert}}}
Air Quality Alert: {{{airQualityAlert}}}
Pollen Alert: {{{pollenAlert}}}
Activity Level: {{{activityLevel}}}

Generate a personalized health narrative that provides proactive guidance, reduces uncertainty, and simplifies chronic care management. Focus on providing actionable insights and recommendations based on the user's data.
`,
});

const generatePersonalizedHealthNarrativeFlow = ai.defineFlow(
  {
    name: 'generatePersonalizedHealthNarrativeFlow',
    inputSchema: GeneratePersonalizedHealthNarrativeInputSchema,
    outputSchema: GeneratePersonalizedHealthNarrativeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
