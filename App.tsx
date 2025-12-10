
import React, { useState } from 'react';
import { PrintIcon } from './components/PrintIcon';
import { QrCodeIcon } from './components/QrCodeIcon';
import { YandexStyleBadgeIcon } from './components/YandexStyleBadgeIcon';
import { TariffCard } from './components/TariffCard';
import { MapPinIcon } from './components/MapPinIcon';
import { AspectRatioControl } from './components/AspectRatioControl';
import { EditableText } from './components/EditableText';

type PriceItem = {
  id: string;
  label: string;
  price: string;
};

type StringItem = {
  id: string;
  value: string;
}

type PriceCardContent = string | PriceItem;

interface PriceCardData {
  id: string;
  title: string;
  subtitle?: string;
  items: (StringItem | PriceItem)[];
}

const initialContent = {
  headerTitle: "ХРАНЕНИЕ ШИН",
  storageSectionTitle: "Тарифы хранения шин",
  storageSectionSubtitle: "Вывоз шин от дома или офиса на наш счёт.",
  storageTariffs: [
    { id: 'st1', size: 'R13-R15', price: '500' },
    { id: 'st2', size: 'R16-R19', price: '600' },
    { id: 'st3', size: 'R20+', price: '700' },
  ],
  storageFootnote: "* Хранение с дисками: +100 ₽ | Для внедорожников (R16+): +100 ₽",
  fittingSectionTitle: "Прайс-лист на услуги шиномонтажа",
  address: "просп. Победы, 209",
  footerSlogan: "Освободи место для себя",
  footerAdvantage1: "✓ Приоритетная запись на шиномонтаж",
  footerAdvantage2: "✓ Вывоз шин от дома или офиса за наш счёт",
  footerBrand: "OTELSHIN.RU",
  footerBrandSubtitle: "сервис хранения шин",
  footerContactTitle: "Свяжитесь с нами",
  footerPhone: "+7 (978) 070-36-65",
  footerCity: "Симферополь",
  tireFittingData: [
    {
      id: 'tf1', title: 'ЛЕГКОВЫЕ', items: [
        { id: 'tf1i1', label: 'R13-R14', price: '1000' }, { id: 'tf1i2', label: 'R15-R16', price: '1200' },
        { id: 'tf1i3', label: 'R17-R18', price: '1400' }, { id: 'tf1i4', label: 'R19', price: '1600' },
        { id: 'tf1i5', label: 'R20', price: '1800' },
      ],
    },
    {
      id: 'tf2', title: 'КРОССОВЕР', items: [
        { id: 'tf2i1', label: 'R15-R16', price: '1500' }, { id: 'tf2i2', label: 'R17-R18', price: '1600' },
        { id: 'tf2i3', label: 'R19', price: '1800' }, { id: 'tf2i4', label: 'R20', price: '2000' },
      ],
    },
    {
      id: 'tf3', title: 'ВНЕДОРОЖНИК', items: [
        { id: 'tf3i1', label: 'R15-R16', price: '1700' }, { id: 'tf3i2', label: 'R17-R18', price: '1800' },
        { id: 'tf3i3', label: 'R19-R20', price: '2200' },
      ],
    },
    {
      id: 'tf4', title: 'НА ВСЕ А/М', items: [
        { id: 'tf4i1', label: 'R21', price: '2500' }, { id: 'tf4i2', label: 'R22', price: '3000' },
        { id: 'tf4i3', label: 'R23', price: '3500' }, { id: 'tf4i4', label: 'R24', price: '4000' },
      ],
    },
    { id: 'tf5', title: 'МИКРОАВТОБУС', items: [{ id: 'tf5i1', label: 'R14C-R16C', price: '1600' }] },
    { id: 'tf6', title: 'БОРТОВАЯ', subtitle: 'типа Газель', items: [{ id: 'tf6i1', value: '2500' }] },
    {
      id: 'tf7', title: 'ШИНОРЕМОНТ', subtitle: 'R13-R22', items: [
        { id: 'tf7i1', label: 'R13-R16', price: 'от 300' }, { id: 'tf7i2', label: 'R17-R19', price: 'от 400' },
        { id: 'tf7i3', label: 'R20-R22', price: 'от 500' }, { id: 'tf7i4', label: 'R23-R24', price: 'от 700' },
        { id: 'tf7i5', label: 'Боковой порез', price: 'от 800' },
      ],
    },
    {
      id: 'tf8', title: 'РЕМОНТ ДИСКОВ', subtitle: 'R13-R24', items: [
        { id: 'tf8i1', value: '1 шт. от 500' }, { id: 'tf8i2', value: 'в зависимости' }, { id: 'tf8i3', value: 'от сложности' },
      ],
    },
  ]
};

interface PriceCardProps {
  cardData: PriceCardData;
  onUpdate: (cardId: string, field: string, newValue: string, itemId?: string) => void;
  className?: string;
}

const PriceCard: React.FC<PriceCardProps> = ({ cardData, onUpdate, className = '' }) => (
  <div className={`flex flex-col border border-gray-200 rounded-lg overflow-hidden shadow-sm ${className}`}>
    <div className="bg-green-600 text-white text-center p-2 font-bold uppercase">
      <EditableText
        tag="h3"
        initialValue={cardData.title}
        onSave={(newValue) => onUpdate(cardData.id, 'title', newValue)}
        inputClassName="text-center"
      />
      {cardData.subtitle && (
        <EditableText
          tag="p"
          className="text-sm normal-case font-semibold"
          initialValue={cardData.subtitle}
          onSave={(newValue) => onUpdate(cardData.id, 'subtitle', newValue)}
          inputClassName="text-center"
        />
      )}
    </div>
    <div className="bg-white text-gray-800 flex-grow p-4">
      <ul className="text-lg">
        {cardData.items.map((item) => (
          <li key={item.id} className="flex justify-between items-center p-2 rounded-md even:bg-slate-50">
            {'value' in item ? (
               <EditableText
                  tag="span"
                  className="text-center w-full"
                  initialValue={item.value}
                  onSave={(newValue) => onUpdate(cardData.id, 'itemValue', newValue, item.id)}
                  inputClassName="text-center"
                />
            ) : (
              <>
                <EditableText
                  tag="span"
                  initialValue={item.label}
                  onSave={(newValue) => onUpdate(cardData.id, 'itemLabel', newValue, item.id)}
                />
                <EditableText
                  tag="span"
                  className="font-semibold"
                  initialValue={item.price}
                  onSave={(newValue) => onUpdate(cardData.id, 'itemPrice', newValue, item.id)}
                  inputClassName="text-right"
                />
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const AppContent: React.FC<{
    isLandscape?: boolean;
    content: typeof initialContent;
    setContent: React.Dispatch<React.SetStateAction<typeof initialContent>>;
  }> = ({ isLandscape = false, content, setContent }) => {
  
  const updateSimpleValue = (key: keyof typeof initialContent, value: string) => {
    setContent(prev => ({...prev, [key]: value}));
  }

  const handleStorageTariffUpdate = (tariffId: string, field: 'size' | 'price', newValue: string) => {
    setContent(prev => ({
      ...prev,
      storageTariffs: prev.storageTariffs.map(t =>
        t.id === tariffId ? { ...t, [field]: newValue } : t
      ),
    }));
  };

  const handleTireFittingUpdate = (cardId: string, field: string, newValue: string, itemId?: string) => {
    setContent(prev => ({
      ...prev,
      tireFittingData: prev.tireFittingData.map(card => {
        if (card.id !== cardId) return card;
        if (field === 'title' || field === 'subtitle') {
          return { ...card, [field]: newValue };
        }
        return {
          ...card,
          items: card.items.map(item => {
            if (item.id !== itemId) return item;
            if (field === 'itemValue' && 'value' in item) {
              return { ...item, value: newValue };
            }
            if (field === 'itemLabel' && 'label' in item) {
              return { ...item, label: newValue };
            }
             if (field === 'itemPrice' && 'price' in item) {
              return { ...item, price: newValue };
            }
            return item;
          })
        };
      })
    }));
  };

  const tireFittingGridClasses = isLandscape
    ? "grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-8 gap-4"
    : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4";

  return (
    <>
      <header className="p-8 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-center text-center border-b-2 border-slate-200">
        <div className="flex justify-center md:justify-start h-[170px]">
          <YandexStyleBadgeIcon />
        </div>
        <EditableText
          tag="h1"
          className="text-7xl lg:text-9xl font-black tracking-tighter text-slate-800 order-first md:order-none"
          initialValue={content.headerTitle}
          onSave={(newValue) => updateSimpleValue('headerTitle', newValue)}
          inputClassName="text-center"
        />
        <div></div>
      </header>
      <section className="p-8 md:p-12 text-center">
        <EditableText
            tag="h2"
            className="text-4xl font-bold text-slate-800"
            initialValue={content.storageSectionTitle}
            onSave={(newValue) => updateSimpleValue('storageSectionTitle', newValue)}
            inputClassName="text-center"
        />
        <EditableText
            tag="p"
            className="mt-4 text-xl font-semibold text-green-600"
            initialValue={content.storageSectionSubtitle}
            onSave={(newValue) => updateSimpleValue('storageSectionSubtitle', newValue)}
            inputClassName="text-center"
        />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {content.storageTariffs.map(tariff =>
             <TariffCard
                key={tariff.id}
                size={tariff.size}
                price={tariff.price}
                onUpdate={(field, value) => handleStorageTariffUpdate(tariff.id, field, value)}
            />
          )}
        </div>
        <div className="mt-8 text-slate-600">
           <EditableText
              tag="p"
              initialValue={content.storageFootnote}
              onSave={(newValue) => updateSimpleValue('storageFootnote', newValue)}
              inputClassName="text-center"
            />
        </div>
      </section>
      <div className="p-4 bg-slate-50 border-y border-slate-200">
        <EditableText
            tag="h2"
            className="text-xl font-semibold tracking-wider text-slate-600 text-center uppercase"
            initialValue={content.fittingSectionTitle}
            onSave={(newValue) => updateSimpleValue('fittingSectionTitle', newValue)}
            inputClassName="text-center"
        />
        <div className="flex items-center justify-center mt-2">
          <MapPinIcon />
          <EditableText
              tag="p"
              className="ml-2 text-lg font-medium text-slate-700"
              initialValue={content.address}
              onSave={(newValue) => updateSimpleValue('address', newValue)}
            />
        </div>
      </div>
      <main className="p-4 md:p-6">
        <div className={tireFittingGridClasses}>
          {content.tireFittingData.map((data) => <PriceCard key={data.id} cardData={data} onUpdate={handleTireFittingUpdate} />)}
        </div>
      </main>
      <footer className="border-t-2 border-slate-200 p-8 bg-slate-50">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] print:grid-cols-[1fr_auto_1fr] gap-8 items-center">
            <div className="text-center md:text-left print:text-left">
               <EditableText
                  tag="h4"
                  className="text-xl font-bold text-green-600 uppercase"
                  initialValue={content.footerSlogan}
                  onSave={(newValue) => updateSimpleValue('footerSlogan', newValue)}
                />
              <ul className="mt-2 space-y-1 text-slate-700">
                <li><EditableText tag="span" initialValue={content.footerAdvantage1} onSave={(newValue) => updateSimpleValue('footerAdvantage1', newValue)} /></li>
                <li><EditableText tag="span" initialValue={content.footerAdvantage2} onSave={(newValue) => updateSimpleValue('footerAdvantage2', newValue)} /></li>
              </ul>
            </div>
            <div className="text-center order-first md:order-none print:order-none">
              <EditableText
                  tag="p"
                  className="text-5xl font-black text-slate-800 tracking-wider"
                  initialValue={content.footerBrand}
                  onSave={(newValue) => updateSimpleValue('footerBrand', newValue)}
                  inputClassName="text-center"
                />
                <EditableText
                  tag="p"
                  className="text-2xl text-slate-500 font-medium mt-2"
                  initialValue={content.footerBrandSubtitle}
                  onSave={(newValue) => updateSimpleValue('footerBrandSubtitle', newValue)}
                  inputClassName="text-center"
                />
            </div>
            <div className="flex flex-col sm:flex-row print:flex-row justify-center md:justify-end print:justify-end items-center gap-6">
              <div className="text-center sm:text-right print:text-right">
                <EditableText
                  tag="h4"
                  className="text-xl font-bold text-green-600 uppercase"
                  initialValue={content.footerContactTitle}
                  onSave={(newValue) => updateSimpleValue('footerContactTitle', newValue)}
                   inputClassName="text-right"
                />
                <EditableText
                  tag="p"
                  className="text-3xl font-bold text-slate-800 mt-2"
                  initialValue={content.footerPhone}
                  onSave={(newValue) => updateSimpleValue('footerPhone', newValue)}
                  inputClassName="text-right"
                />
                <EditableText
                  tag="p"
                  className="text-slate-600"
                  initialValue={content.footerCity}
                  onSave={(newValue) => updateSimpleValue('footerCity', newValue)}
                  inputClassName="text-right"
                />
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
    const [content, setContent] = useState(initialContent);

    const floatingControls = (
      <div className="fixed bottom-6 right-6 print:hidden flex flex-col items-end gap-4 z-50">
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
                                <AppContent isLandscape={isLandscape} content={content} setContent={setContent} />
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
            <AppContent content={content} setContent={setContent} />
          </div>
        </div>
        {floatingControls}
      </div>
    );
};

export default App;
