
import React from 'react';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8 text-center">
        <div className="relative h-16 w-16">
            <div className="absolute inset-0 rounded-full border-4 border-t-purple-400 border-slate-700 animate-spin"></div>
        </div>
        <p className="text-slate-400">Forging creation from the cosmic heart...</p>
    </div>
  );
};

