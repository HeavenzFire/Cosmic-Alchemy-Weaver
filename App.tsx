
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { CosmicVisualizer } from './components/CosmicVisualizer';
import { InputForm } from './components/InputForm';
import { CreationCard } from './components/CreationCard';
import { MetaphorExplainer } from './components/MetaphorExplainer';
import { transformPain } from './services/geminiService';
import type { Creation } from './types';
import { LoadingSpinner } from './components/LoadingSpinner';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [creation, setCreation] = useState<Creation | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleTransmute = useCallback(async (pain: string) => {
    if (!pain.trim()) {
      setError('Please describe a feeling to transmute.');
      return;
    }
    setIsLoading(true);
    setCreation(null);
    setError(null);

    try {
      const result = await transformPain(pain);
      setCreation(result);
    } catch (err) {
      console.error("Error transforming pain:", err);
      setError('An error occurred during transmutation. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans antialiased" style={{backgroundColor: '#0a0a1a'}}>
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900 via-slate-900 to-purple-900"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      </div>
      
      <main className="relative z-10 flex flex-col items-center p-4 md:p-8 min-h-screen">
        <Header />
        
        <div className="w-full max-w-4xl mx-auto flex flex-col lg:flex-row gap-8 items-start mt-8">
          <div className="flex-1 w-full lg:max-w-md flex flex-col items-center gap-6">
            <CosmicVisualizer isLoading={isLoading} hasCreation={!!creation} />
            <InputForm onTransmute={handleTransmute} isLoading={isLoading} />
          </div>
          
          <div className="flex-1 w-full flex flex-col justify-center items-center">
            {isLoading && <LoadingSpinner />}
            {error && <div className="bg-red-900/50 border border-red-700 text-red-300 p-4 rounded-lg text-center">{error}</div>}
            {creation && !isLoading && <CreationCard creation={creation} />}
          </div>
        </div>

        <MetaphorExplainer />
      </main>
    </div>
  );
};

export default App;
