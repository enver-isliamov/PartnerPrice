
import React from 'react';
import { EditableText } from './EditableText';

interface TariffCardProps {
  size: string;
  price: string;
  onUpdate: (field: 'size' | 'price', value: string) => void;
}

export const TariffCard: React.FC<TariffCardProps> = ({ size, price, onUpdate }) => {
  const cardClasses = `
    relative bg-white pt-8 pb-6 px-6 rounded-xl shadow-md 
    transition-all duration-300 border border-gray-200 text-center
  `;

  return (
    <div className={cardClasses}>
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-700 text-white text-sm font-bold px-4 py-1 rounded-full">
         <EditableText
          tag="span"
          initialValue={size}
          onSave={(value) => onUpdate('size', value)}
          inputClassName="text-center"
        />
      </div>
      
      <div className="mt-2">
        <EditableText
          tag="span"
          className="text-5xl font-extrabold text-slate-900"
          initialValue={price}
          onSave={(value) => onUpdate('price', value)}
          inputClassName="text-center"
        />
        <span className="text-2xl font-bold text-slate-500 ml-1">₽</span>
      </div>
      <div className="text-slate-600">за месяц</div>
    </div>
  );
};
