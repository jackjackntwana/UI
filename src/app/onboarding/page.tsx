'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import WelcomeStep from '@/components/onboarding/WelcomeStep';
import ClinicalStep from '@/components/onboarding/ClinicalStep';
import DataConnectivityStep from '@/components/onboarding/DataConnectivityStep';
import RhythmStep from '@/components/onboarding/RhythmStep';
import PersonaStep from '@/components/onboarding/PersonaStep';
import ProgressBar from '@/components/onboarding/ProgressBar';
import { AnimatePresence, motion } from 'framer-motion';

const steps = [
  { component: WelcomeStep },
  { component: ClinicalStep },
  { component: DataConnectivityStep },
  { component: RhythmStep },
  { component: PersonaStep },
];

export default function OnboardingPage() {
  const [step, setStep] = useState(0);
  const router = useRouter();

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep((s) => s + 1);
    } else {
      router.push('/dashboard');
    }
  };

  const CurrentStep = steps[step].component;

  return (
    <div className="flex flex-col h-screen bg-background font-body p-4 max-w-lg mx-auto">
      <ProgressBar currentStep={step + 1} totalSteps={steps.length} />
      <div className="flex-grow flex flex-col justify-center">
        <CurrentStep onNext={nextStep} />
      </div>
    </div>
  );
}
