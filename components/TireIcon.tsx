
import React from 'react';

export const TireIcon = () => (
  <svg
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    className="w-20 h-20 flex-shrink-0"
    aria-hidden="true"
  >
    <defs>
      <path
        id="tread"
        d="M -5,0 a 5,5 0 0 1 10,0 h 5 a 10,10 0 0 0 -20,0 z"
      />
    </defs>
    <circle cx="50" cy="50" r="48" fill="#333" />
    <circle cx="50" cy="50" r="38" fill="transparent" stroke="#222" strokeWidth="20" />
    <circle cx="50" cy="50" r="20" fill="#4ade80" />
    <circle cx="50" cy="50" r="16" fill="#22c55e" />
     {[...Array(5)].map((_, i) => (
      <path
        key={i}
        d="M 50,50 l 0,-16 a 8,8 0 0 1 12,0 z"
        fill="#4ade80"
        stroke="#16a34a"
        strokeWidth="1"
        transform={`rotate(${i * 72}, 50, 50)`}
      />
    ))}
    <circle cx="50" cy="50" r="5" fill="#555" />
    <g transform="translate(50,50)" fill="#111">
      {[...Array(20)].map((_, i) => (
        <use
          key={i}
          href="#tread"
          transform={`rotate(${i * 18}) translate(0, -43)`}
        />
      ))}
    </g>
  </svg>
);
