
import React from 'react';
import type { Metaphor } from '../types';
import { METAPHORS } from '../constants';

const MetaphorCard: React.FC<{ metaphor: Metaphor }> = ({ metaphor }) => {
    return (
        <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 flex flex-col items-start h-full">
            <div className="flex items-center gap-4">
                <div className="text-purple-400">{metaphor.icon}</div>
                <h3 className="text-xl font-bold text-slate-200">{metaphor.title}</h3>
            </div>
            <p className="mt-4 text-slate-400 text-sm leading-relaxed"><strong className="text-slate-300">Simple:</strong> {metaphor.simple}</p>
            <p className="mt-2 text-slate-400 text-sm leading-relaxed"><strong className="text-slate-300">Your Tie-In:</strong> {metaphor.tieIn}</p>
        </div>
    )
}

export const MetaphorExplainer: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto mt-16 p-6 bg-slate-900/30 rounded-xl border border-slate-800">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-300 mb-8">
        The Four Universe-Forging Operations
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {METAPHORS.map((metaphor) => (
          <MetaphorCard key={metaphor.title} metaphor={metaphor} />
        ))}
      </div>
    </div>
  );
};
