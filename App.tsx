
import React, { useState } from 'react';
import { PrintIcon } from './components/PrintIcon';
import { QrCodeIcon } from './components/QrCodeIcon';
import { YandexStyleBadgeIcon } from './components/YandexStyleBadgeIcon';
import { TariffCard } from './components/TariffCard';
import { MapPinIcon } from './components/MapPinIcon';
import { AspectRatioControl } from './components/AspectRatioControl';

type PriceItem = {
  label: string;
  price: string;
};

type PriceCardContent = string | PriceItem;

interface PriceCardProps {
  title: string;
  subtitle?: string;
  items: PriceCardContent[];
  className?: string;
}

const PriceCard: React.FC<PriceCardProps> = ({ title, subtitle, items, className = '' }) => (
  <div className={`flex flex-col border border-gray-200 rounded-lg overflow-hidden shadow-sm ${className}`}>
    <div className="bg-green-600 text-white text-center p-2 font-bold uppercase">
      <h3>{title}</h3>
      {subtitle && <p className="text-sm normal-case font-semibold">{subtitle}</p>}
    </div>
    <div className="bg-white text-gray-800 flex-grow p-4">
      <ul className="text-lg">
        {items.map((item, index) => (
          <li key={index} className="flex justify-between items-center p-2 rounded-md even:bg-slate-50">
            {typeof item === 'string' ? (
              <span className="text-center w-full">{item}</span>
            ) : (
              <>
                <span>{item.label}</span>
                <span className="font-semibold">{item.price}</span>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const AppContent: React.FC<{ isLandscape?: boolean }> = ({ isLandscape = false }) => {
  const storageTariffs = [
    { size: 'R13-R15', price: '500' },
    { size: 'R16-R19', price: '600' },
    { size: 'R20+', price: '700' },
  ];

  const tireFittingData = [
    {
      title: 'ЛЕГКОВЫЕ',
      items: [
        { label: 'R13-R14', price: '1000' },
        { label: 'R15-R16', price: '1200' },
        { label: 'R17-R18', price: '1400' },
        { label: 'R19', price: '1600' },
        { label: 'R20', price: '1800' },
      ],
    },
    {
      title: 'КРОССОВЕР',
      items: [
        { label: 'R15-R16', price: '1500' },
        { label: 'R17-R18', price: '1600' },
        { label: 'R19', price: '1800' },
        { label: 'R20', price: '2000' },
      ],
    },
    {
      title: 'ВНЕДОРОЖНИК',
      items: [
        { label: 'R15-R16', price: '1700' },
        { label: 'R17-R18', price: '1800' },
        { label: 'R19-R20', price: '2200' },
      ],
    },
     {
      title: 'НА ВСЕ А/М',
      items: [
        { label: 'R21', price: '2500' },
        { label: 'R22', price: '3000' },
        { label: 'R23', price: '3500' },
        { label: 'R24', price: '4000' },
      ],
    },
    {
      title: 'МИКРОАВТОБУС',
      items: [{ label: 'R14C-R16C', price: '1600' }],
    },
    {
      title: 'БОРТОВАЯ',
      subtitle: 'типа Газель',
      items: ['2500'],
    },
    {
      title: 'ШИНОРЕМОНТ',
      subtitle: 'R13-R22',
      items: [
        { label: 'R13-R16', price: 'от 300' },
        { label: 'R17-R19', price: 'от 400' },
        { label: 'R20-R22', price: 'от 500' },
        { label: 'R23-R24', price: 'от 700' },
        { label: 'Боковой порез', price: 'от 800' },
      ],
    },
    {
      title: 'РЕМОНТ ДИСКОВ',
      subtitle: 'R13-R24',
      items: ['1 шт. от 500', 'в зависимости', 'от сложности'],
    },
  ];

  const tireFittingGridClasses = isLandscape
    ? "grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-8 gap-4"
    : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4";


  return (
    <>
      <header className="p-8 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-center text-center border-b-2 border-slate-200">
        <div className="flex justify-center md:justify-start h-[170px]">
          <YandexStyleBadgeIcon />
        </div>
        <h1 className="text-7xl lg:text-9xl font-black tracking-tighter text-slate-800 order-first md:order-none">
          ХРАНЕНИЕ ШИН
        </h1>
        <div></div>
      </header>
      <section className="p-8 md:p-12 text-center">
        <h2 className="text-4xl font-bold text-slate-800">Тарифы хранения шин</h2>
        <p className="mt-4 text-xl font-semibold text-green-600">Вывоз шин от дома или офиса на наш счёт.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {storageTariffs.map(tariff => <TariffCard key={tariff.size} {...tariff} />)}
        </div>
        <div className="mt-8 text-slate-600">
          <p>
            * Хранение с дисками: <span className="font-semibold">+100 ₽</span>
            <span className="mx-2 text-slate-400">|</span>
            Для внедорожников (R16+): <span className="font-semibold">+100 ₽</span>
          </p>
        </div>
      </section>
      <div className="p-4 bg-slate-50 border-y border-slate-200">
        <h2 className="text-xl font-semibold tracking-wider text-slate-600 text-center uppercase">Прайс-лист на услуги шиномонтажа</h2>
        <div className="flex items-center justify-center mt-2">
          <MapPinIcon />
          <p className="ml-2 text-lg font-medium text-slate-700">просп. Победы, 209</p>
        </div>
      </div>
      <main className="p-4 md:p-6">
        <div className={tireFittingGridClasses}>
          {tireFittingData.map((data) => <PriceCard key={data.title} {...data} />)}
        </div>
      </main>
      <footer className="border-t-2 border-slate-200 p-8 bg-slate-50">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] print:grid-cols-[1fr_auto_1fr] gap-8 items-center">
            <div className="text-center md:text-left print:text-left">
              <h4 className="text-xl font-bold text-green-600 uppercase">Освободи место для себя</h4>
              <ul className="mt-2 space-y-1 text-slate-700">
                <li>✓ Приоритетная запись на шиномонтаж</li>
                <li>✓ Вывоз шин от дома или офиса за наш счёт</li>
              </ul>
            </div>
            <div className="text-center order-first md:order-none print:order-none">
              <p className="text-5xl font-black text-slate-800 tracking-wider">OTELSHIN.RU</p>
              <p className="text-2xl text-slate-500 font-medium mt-2">сервис хранения шин</p>
            </div>
            <div className="flex flex-col sm:flex-row print:flex-row justify-center md:justify-end print:justify-end items-center gap-6">
              <div className="text-center sm:text-right print:text-right">
                <h4 className="text-xl font-bold text-green-600 uppercase">Свяжитесь с нами</h4>
                <p className="text-3xl font-bold text-slate-800 mt-2">+7 (978) 070-36-65</p>
                <p className="text-slate-600">Симферополь</p>
              </div>
              <div className="text-center">
                <QrCodeIcon />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

const App: React.FC = () => {
    const [dimensions, setDimensions] = useState<{ width: number | null; height: number | null }>({ width: null, height: null });

    const floatingControls = (
      <div className="fixed bottom-6 right-6 print:hidden flex flex-col items-end gap-4">
        <AspectRatioControl onDimensionsChange={setDimensions} />
        <button
          onClick={() => window.print()}
          className="flex items-center bg-green-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-transform transform hover:scale-105"
          aria-label="Распечатать или сохранить прайс-лист"
        >
          <PrintIcon />
          <span className="ml-2 font-semibold">Печать</span>
        </button>
      </div>
    );

    if (dimensions.width && dimensions.height) {
        const isLandscape = dimensions.width > dimensions.height;
        
        const PORTRAIT_WIDTH = 1100;
        const PORTRAIT_HEIGHT = 1800;
        const LANDSCAPE_WIDTH = 1700;
        const LANDSCAPE_HEIGHT = 1250;

        const canonicalWidth = isLandscape ? LANDSCAPE_WIDTH : PORTRAIT_WIDTH;
        const estimatedHeight = isLandscape ? LANDSCAPE_HEIGHT : PORTRAIT_HEIGHT;

        const aspectRatio = `${dimensions.width} / ${dimensions.height}`;
        const pageWrapperClasses = "p-4 sm:p-8";
        const pageClasses = `w-full mx-auto shadow-xl print:shadow-none rounded-lg bg-white ${isLandscape ? 'max-w-7xl' : 'max-w-3xl'}`;

        return (
             <div className="bg-slate-100 min-h-screen font-sans antialiased text-slate-800 print:bg-white print:text-black">
                <div className={pageWrapperClasses}>
                    <svg
                        className={pageClasses}
                        style={{ aspectRatio }}
                        viewBox={`0 0 ${canonicalWidth} ${estimatedHeight}`}
                        preserveAspectRatio="xMidYMin meet"
                    >
                        <foreignObject width={canonicalWidth} height={estimatedHeight}>
                            {/* @ts-ignore */}
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <AppContent isLandscape={isLandscape} />
                            </div>
                        </foreignObject>
                    </svg>
                </div>
                 {floatingControls}
            </div>
        );
    }
    
    return (
      <div className="bg-slate-100 min-h-screen font-sans antialiased text-slate-800 print:bg-white print:text-black">
        <div className="container mx-auto p-4 sm:p-8">
          <div className="bg-white shadow-xl print:shadow-none rounded-lg overflow-hidden">
            <AppContent />
          </div>
        </div>
        {floatingControls}
      </div>
    );
};

export default App;
