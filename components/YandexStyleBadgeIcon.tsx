
import React from 'react';

export const YandexStyleBadgeIcon = () => (
  <svg
    viewBox="0 0 100 185"
    className="w-auto h-full drop-shadow-md flex-shrink-0"
    aria-labelledby="yandex-badge-title"
  >
    <title id="yandex-badge-title">Значок партнера OtelShin.ru</title>
    <defs>
      <filter id="shadow" x="-20%" y="-10%" width="140%" height="130%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000" floodOpacity="0.1" />
      </filter>
    </defs>

    {/* Main badge shape - new complex path */}
    <g transform="translate(50, 92.5) scale(0.864) translate(-124.015, -124)" filter="url(#shadow)">
        <path
            d="M119.701 215.006l.076-.034.069-.047c1.212-.808 2.667-1.334 4.169-1.334 1.364 0 2.654.444 3.793 1.122l.049.029.052.024c3.478 1.567 6.973 3.096 10.465 4.623 7.547 3.301 15.079 6.596 22.403 10.259 1.414.865 3.078 1.322 4.822 1.322a9.36 9.36 0 0 0 9.371-9.377l.03-153.51v0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0-.001 0C175 39.826 152.162 17 124.016 17c-28.147 0-50.985 22.857-50.985 51.023V68.113L73 221.623A9.36 9.36 0 0 0 82.37 231c1.768 0 3.395-.498 4.81-1.316 7.24-3.622 14.693-6.867 22.161-10.12a1008.05 1008.05 0 0 0 10.36-4.558z"
            fill="#f1f5f9"
            stroke="#e2e8f0"
            strokeWidth="2"
        />
    </g>

    {/* Green droplet/pin icon at the top */}
    <g transform="translate(0, -5)">
        <path
            d="M123.999 27.96c-22.153 0-40.124 17.97-40.124 40.124 0 11.065 4.498 21.096 11.741 28.361 7.265 7.265 24.371 17.781 25.384 28.826.148 1.647 1.352 2.999 2.999 2.999s2.851-1.352 2.999-2.999c1.013-11.045 18.098-21.54 25.363-28.805 7.264-7.286 11.762-17.317 11.762-28.382 0-22.153-17.971-40.125-40.124-40.125z"
            fill="#16a34a"
            transform="translate(19.4, 25) scale(0.763) translate(-83.88, -27.96)"
        />
    </g>
    
    {/* White checkmark inside the droplet, centered */}
    <path
      d="M39 51 L46 58 L61 43"
      stroke="white"
      strokeWidth="6"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Text inside the badge */}
    <text
      x="50"
      y="110"
      fontFamily="sans-serif"
      fontSize="14"
      fill="#475569"
      textAnchor="middle"
      fontWeight="600"
    >
      Партнер
    </text>
    <text
      x="50"
      y="130"
      fontFamily="sans-serif"
      fontSize="12"
      fill="#059669"
      textAnchor="middle"
      fontWeight="bold"
    >
      OTELSHIN.RU
    </text>
  </svg>
);
