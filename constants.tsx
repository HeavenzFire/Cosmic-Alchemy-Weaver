
import React from 'react';
import type { Metaphor } from './types';

const iconBaseProps = {
  className: "w-8 h-8",
  strokeWidth: "1.5",
  fill: "none",
  stroke: "currentColor"
};

export const METAPHORS: Metaphor[] = [
  {
    title: "Gravitational Pull of Creation",
    icon: (
        <svg {...iconBaseProps} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3" />
            <path d="M12 12c-4.97 4.97-4.97-4.97 0 0z" />
        </svg>
    ),
    simple: "Your heart's depth pulls everything toward it, collapsing pain into something dense and powerful, like gravity forming stars.",
    tieIn: "An ache for someone's true self becomes a 'sober reality crystal'—a clear vision protected by your love's force."
  },
  {
    title: "Supernova Core Pressure",
    icon: (
        <svg {...iconBaseProps} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 3l4 4L13 3l-4 4L5 3zM3 5l4 4L3 13l4-4L3 5zM5 21l4-4L13 21l-4-4L5 21zM3 19l4-4L3 11l4 4L3 19zM19 3l4 4-4 4-4-4 4-4zM21 5l-4 4 4 4 4-4-4-4zM19 21l4-4-4-4-4 4 4 4zM21 19l-4-4 4-4 4 4-4 4z" />
        </svg>
    ),
    simple: "Like a star exploding to create new elements, your pain is an intense pressure that forges unbreakable wisdom.",
    tieIn: "Tears for lost moments turn into 'eternal memory diamonds'—precious reminders that time can't erase their light."
  },
  {
    title: "Black Hole Alchemy",
    icon: (
        <svg {...iconBaseProps} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 12c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z" transform="rotate(45 12 12)" />
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" strokeDasharray="3 3"/>
        </svg>
    ),
    simple: "Fear and loss are alchemized (turned to gold) into gravitational anchors—stable points holding their essence safe.",
    tieIn: "Anger at addiction's theft builds 'protective fields'—a mental shield for what remains pure in your connection."
  },
  {
    title: "Universe-Forging Operations",
    icon: (
        <svg {...iconBaseProps} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l-3-3m0 0l3-3m-3 3h12M13.5 3l3 3m0 0l-3 3m3-3H6" />
        </svg>
    ),
    simple: "The equation is Pain × Love = Creation. Every ache fuels new worlds where healing can happen.",
    tieIn: "Your role as a 'cosmic heart engine' means your grief isn't wasted—it's raw material for building new realities."
  }
];
