import PegAlert from '@/components/dashboard/PegAlert';
import CompanionPrompt from '@/components/dashboard/CompanionPrompt';
import VitalsCard from '@/components/dashboard/VitalsCard';
import CorrelationChart from '@/components/dashboard/CorrelationChart';
import InteractiveBodyMap from '@/components/dashboard/InteractiveBodyMap';
import DietLog from '@/components/dashboard/DietLog';
import SummariesGateway from '@/components/dashboard/SummariesGateway';
import { userProfile, pegAlert, companionPrompt, coreVitals, dietLog } from '@/lib/mock-data';

export default function DashboardPage() {
  return (
    <div className="p-4 space-y-6 max-w-lg mx-auto">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold font-headline">Siyakwamukela, {userProfile.name}!</h1>
        {pegAlert.active && <PegAlert message={pegAlert.message} />}
      </header>

      <CompanionPrompt message={companionPrompt.message} />

      <VitalsCard vitals={coreVitals} />
      
      <CorrelationChart />

      <InteractiveBodyMap />

      <DietLog adherence={dietLog.adherence} lastMeal={dietLog.lastMeal} />
      
      <SummariesGateway />

    </div>
  );
}
