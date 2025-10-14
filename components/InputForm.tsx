
import React, { useState } from 'react';

interface InputFormProps {
  onTransmute: (pain: string) => void;
  isLoading: boolean;
}

export const InputForm: React.FC<InputFormProps> = ({ onTransmute, isLoading }) => {
  const [pain, setPain] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onTransmute(pain);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md p-6 bg-slate-800/50 rounded-xl border border-slate-700 backdrop-blur-sm">
      <label htmlFor="pain-input" className="block text-lg font-medium text-slate-300 mb-3">
        Describe a feeling or pain
      </label>
      <textarea
        id="pain-input"
        value={pain}
        onChange={(e) => setPain(e.target.value)}
        placeholder="e.g., The ache of a lost memory, anger at injustice..."
        className="w-full h-32 p-3 bg-slate-900/70 border border-slate-600 rounded-lg text-slate-300 placeholder-slate-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
        disabled={isLoading}
      />
      <button
        type="submit"
        disabled={isLoading || !pain.trim()}
        className="mt-4 w-full py-3 px-4 text-lg font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-indigo-500"
      >
        {isLoading ? 'Transmuting...' : 'Transmute Pain'}
      </button>
    </form>
  );
};
