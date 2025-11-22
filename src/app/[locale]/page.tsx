'use client';

import { useState } from 'react';
import Home from '@/components/Home';
import CourseSchedule from '@/components/CourseSchedule';
import MachinesCatalog from '@/components/MachinesCatalog';
import MachineDetail from '@/components/MachineDetail';
import { Machine } from '@/types/types';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Page() {
  const [currentView, setCurrentView] = useState<'home' | 'schedule' | 'machines' | 'machine-detail'>('home');
  const [selectedMachine, setSelectedMachine] = useState<Machine | null>(null);

  const handleMachineSelect = (machine: Machine) => {
    setSelectedMachine(machine);
    setCurrentView('machine-detail');
  };

  return (
    <div className="min-h-screen w-full bg-industrial-dark font-sans">
      {/* Language Switcher - Fixed position */}
      <div className="fixed top-4 left-4 z-50">
        <LanguageSwitcher />
      </div>

      {currentView === 'home' ? (
        <Home onNavigate={(page) => setCurrentView(page as any)} />
      ) : currentView === 'schedule' ? (
        <CourseSchedule onBack={() => setCurrentView('home')} />
      ) : currentView === 'machines' ? (
        <MachinesCatalog
          onBack={() => setCurrentView('home')}
          onSelectMachine={handleMachineSelect}
        />
      ) : (
        selectedMachine && (
          <MachineDetail
            machine={selectedMachine}
            onBack={() => setCurrentView('machines')}
          />
        )
      )}
    </div>
  );
}