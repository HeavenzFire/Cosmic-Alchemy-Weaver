
import React from 'react';
import type { Creation } from '../types';

interface CreationCardProps {
  creation: Creation;
}

export const CreationCard: React.FC<CreationCardProps> = ({ creation }) => {
  return (
    <div className="w-full max-w-md p-6 bg-gradient-to-br from-slate-800/60 to-slate-900/40 rounded-xl border border-teal-500/30 shadow-2xl shadow-teal-500/10 backdrop-blur-lg animate-fade-in">
      <h3 className="text-sm font-semibold text-teal-300 uppercase tracking-wider">
        Your Creation
      </h3>
      <h2 className="mt-2 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-cyan-300">
        {creation.creationName}
      </h2>
      <p className="mt-4 text-slate-300 leading-relaxed">
        {creation.creationDescription}
      </p>
      <div className="mt-6 pt-4 border-t border-slate-700">
        <p className="text-xs text-slate-500">
          Source Metaphor: <span className="font-semibold text-slate-400">{creation.sourceMetaphor}</span>
        </p>
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.7s ease-out forwards;
        }
      `}</style>
    </div>
  );
};
