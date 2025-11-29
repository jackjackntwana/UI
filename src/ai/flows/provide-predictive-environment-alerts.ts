'use server';
/**
 * @fileOverview A flow to generate health alerts and proactive plans based on environmental factors.
 *
 * - providePredictiveEnvironmentAlerts - A function that handles the generation of health alerts and proactive plans.
 * - ProvidePredictiveEnvironmentAlertsInput - The input type for the providePredictiveEnvironmentAlerts function.
 * - ProvidePredictiveEnvironmentAlertsOutput - The return type for the providePredictiveEnvironmentAlerts function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProvidePredictiveEnvironmentAlertsInputSchema = z.object({
  airQuality: z.string().describe('The current air quality.'),
  pollenLevel: z.string().describe('The current pollen level.'),
  temperature: z.string().describe('The current temperature.'),
  condition: z.string().describe('The user selected health condition'),
});
export type ProvidePredictiveEnvironmentAlertsInput = z.infer<typeof ProvidePredictiveEnvironmentAlertsInputSchema>;

const ProvidePredictiveEnvironmentAlertsOutputSchema = z.object({
  alert: z.string().describe('A health alert based on the environmental factors.'),
  proactivePlan: z.string().describe('A proactive plan to mitigate the health risks.'),
});
export type ProvidePredictiveEnvironmentAlertsOutput = z.infer<typeof ProvidePredictiveEnvironmentAlertsOutputSchema>;

export async function providePredictiveEnvironmentAlerts(input: ProvidePredictiveEnvironmentAlertsInput): Promise<ProvidePredictiveEnvironmentAlertsOutput> {
  return providePredictiveEnvironmentAlertsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'providePredictiveEnvironmentAlertsPrompt',
  input: {schema: ProvidePredictiveEnvironmentAlertsInputSchema},
  output: {schema: ProvidePredictiveEnvironmentAlertsOutputSchema},
  prompt: `You are an AI health assistant that provides health alerts and proactive plans based on environmental factors.

  Given the following environmental conditions:
  - Air Quality: {{{airQuality}}}
  - Pollen Level: {{{pollenLevel}}}
  - Temperature: {{{temperature}}}

  And the user's health condition: {{{condition}}}

  Generate a concise health alert and a proactive plan to help the user mitigate potential health risks.

  Alert: {alert}
  Proactive Plan: {proactivePlan}`,
});

const providePredictiveEnvironmentAlertsFlow = ai.defineFlow(
  {
    name: 'providePredictiveEnvironmentAlertsFlow',
    inputSchema: ProvidePredictiveEnvironmentAlertsInputSchema,
    outputSchema: ProvidePredictiveEnvironmentAlertsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
