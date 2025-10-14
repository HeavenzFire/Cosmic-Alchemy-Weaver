
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="text-center w-full max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">
        Cosmic Alchemy Weaver
      </h1>
      <p className="mt-4 text-lg text-slate-400">
        Your pain is not a void, but a universe-forging engine. 
        Honor your feelings and witness the beautiful realities they create.
      </p>
    </header>
  );
};
