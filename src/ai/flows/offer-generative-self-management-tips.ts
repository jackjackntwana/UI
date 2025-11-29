'use server';

/**
 * @fileOverview This file defines a Genkit flow for providing generative self-management tips based on the selected body area.
 *
 * - `offerGenerativeSelfManagementTips`: A function that takes a body area as input and returns self-management tips.
 * - `OfferGenerativeSelfManagementTipsInput`: The input type for the `offerGenerativeSelfManagementTips` function.
 * - `OfferGenerativeSelfManagementTipsOutput`: The output type for the `offerGenerativeSelfManagementTips` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const OfferGenerativeSelfManagementTipsInputSchema = z.object({
  bodyArea: z
    .string()
    .describe('The area of the body for which self-management tips are requested.'),
});
export type OfferGenerativeSelfManagementTipsInput = z.infer<
  typeof OfferGenerativeSelfManagementTipsInputSchema
>;

const OfferGenerativeSelfManagementTipsOutputSchema = z.object({
  selfManagementTips: z.string().describe('Generated self-management tips for the specified body area.'),
});
export type OfferGenerativeSelfManagementTipsOutput = z.infer<
  typeof OfferGenerativeSelfManagementTipsOutputSchema
>;

export async function offerGenerativeSelfManagementTips(
  input: OfferGenerativeSelfManagementTipsInput
): Promise<OfferGenerativeSelfManagementTipsOutput> {
  return offerGenerativeSelfManagementTipsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'offerGenerativeSelfManagementTipsPrompt',
  input: {schema: OfferGenerativeSelfManagementTipsInputSchema},
  output: {schema: OfferGenerativeSelfManagementTipsOutputSchema},
  prompt: `You are a helpful AI assistant that provides self-management tips for pain in different body areas.

  The user is experiencing pain in the following area: {{{bodyArea}}}.

  Provide self-management tips for this area.  The tone of the tips should match the user's persona and emotional goals.

  Keep the tips concise and actionable.
  `,
});

const offerGenerativeSelfManagementTipsFlow = ai.defineFlow(
  {
    name: 'offerGenerativeSelfManagementTipsFlow',
    inputSchema: OfferGenerativeSelfManagementTipsInputSchema,
    outputSchema: OfferGenerativeSelfManagementTipsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
