
import React, { useState } from 'react';

interface AspectRatioControlProps {
  onDimensionsChange: (dimensions: { width: number | null; height: number | null }) => void;
}

export const AspectRatioControl: React.FC<AspectRatioControlProps> = ({ onDimensionsChange }) => {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [activePreset, setActivePreset] = useState<'custom' | 'a4p' | 'a4l' | 'free'>('free');

  const handleApplyCustom = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(width);
    const h = parseFloat(height);
    if (!isNaN(w) && w > 0 && !isNaN(h) && h > 0) {
      onDimensionsChange({ width: w, height: h });
      setActivePreset('custom');
    }
  };

  const handlePresetClick = (
    preset: 'a4p' | 'a4l' | 'free',
    dims: { width: number | null; height: number | null }
  ) => {
    onDimensionsChange(dims);
    setWidth(dims.width?.toString() ?? '');
    setHeight(dims.height?.toString() ?? '');
    setActivePreset(preset);
  };

  const PresetButton: React.FC<{
    preset: 'a4p' | 'a4l' | 'free';
    dims: { width: number | null; height: number | null };
    label: string;
  }> = ({ preset, dims, label }) => (
    <button
      onClick={() => handlePresetClick(preset, dims)}
      type="button"
      className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
        activePreset === preset ? 'bg-green-600 text-white shadow' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="flex flex-col items-end gap-2 p-3 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg">
      <p className="text-sm font-semibold text-slate-700 self-start px-1">Пропорции печати (см)</p>
      
      <form onSubmit={handleApplyCustom} className="flex items-center gap-2">
        <input
          type="number"
          placeholder="Ширина"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          className="w-20 p-2 border border-slate-300 rounded-md shadow-inner text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
        />
        <span className="text-slate-400">×</span>
        <input
          type="number"
          placeholder="Высота"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="w-20 p-2 border border-slate-300 rounded-md shadow-inner text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
        />
        <button type="submit" className="px-3 py-2 text-sm font-semibold rounded-md transition-colors bg-green-600 text-white hover:bg-green-700 shadow">
          OK
        </button>
      </form>
      
      <div className="flex gap-2 self-stretch justify-between">
         <PresetButton preset="a4p" dims={{ width: 21, height: 29.7 }} label="A4 Портрет" />
         <PresetButton preset="a4l" dims={{ width: 29.7, height: 21 }} label="A4 Альбом" />
         <PresetButton preset="free" dims={{ width: null, height: null }} label="Сброс" />
      </div>
    </div>
  );
};
