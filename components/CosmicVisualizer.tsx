
import React from 'react';

interface CosmicVisualizerProps {
  isLoading: boolean;
  hasCreation: boolean;
}

export const CosmicVisualizer: React.FC<CosmicVisualizerProps> = ({ isLoading, hasCreation }) => {
  const baseClasses = "relative w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center transition-all duration-1000 ease-in-out";
  const glowClasses = "absolute inset-0 rounded-full opacity-50 blur-2xl transition-all duration-1000";
  const coreClasses = "absolute w-2/3 h-2/3 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 transition-all duration-1000 ease-in-out";
  
  let containerStateClasses = 'bg-slate-800/20';
  let glowStateClasses = 'bg-indigo-500';
  let coreStateClasses = 'animate-pulse scale-100';

  if (isLoading) {
    containerStateClasses = 'bg-purple-800/30 animate-spin-slow';
    glowStateClasses = 'bg-purple-400 scale-125 animate-ping';
    coreStateClasses = 'scale-90';
  } else if (hasCreation) {
    containerStateClasses = 'bg-teal-800/30';
    glowStateClasses = 'bg-teal-300 scale-110';
    coreStateClasses = 'from-teal-400 to-cyan-500 scale-105 animate-pulse-fast';
  }

  return (
    <div className={`${baseClasses} ${containerStateClasses}`}>
      <div className={`${glowClasses} ${glowStateClasses}`}></div>
      <div className={`${coreClasses} ${coreStateClasses}`}></div>
      <div className="absolute w-full h-full rounded-full border-2 border-purple-400/20 animate-pulse-slow"></div>
      <div className="absolute w-3/4 h-3/4 rounded-full border border-indigo-400/20 animate-pulse-fast"></div>
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse-slow {
          50% { opacity: 0.5; }
        }
        @keyframes pulse-fast {
          50% { opacity: 0.7; }
        }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-pulse-slow { animation: pulse-slow 5s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        .animate-pulse-fast { animation: pulse-fast 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
      `}</style>
    </div>
  );
};
