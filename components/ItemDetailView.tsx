import React, { useEffect, useState } from 'react';
import { MenuItem } from '../types';

interface ItemDetailViewProps {
  item: MenuItem | null;
  onClose: () => void;
}

const ItemDetailView: React.FC<ItemDetailViewProps> = ({ item, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const scrollContainer = document.querySelector('.main-scroll-container') as HTMLElement;

    if (item) {
      if (scrollContainer) scrollContainer.style.overflowY = 'hidden';
      setCurrentImageIndex(0); // Reset image on new item
    } else {
      if (scrollContainer) scrollContainer.style.overflowY = 'auto';
    }
    
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      if (scrollContainer) scrollContainer.style.overflowY = 'auto';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [item, onClose]);

  return (
    <div 
      className={`absolute inset-0 bg-brand-bg z-50 transform transition-transform duration-300 ease-in-out ${item ? 'translate-y-0' : 'translate-y-full'}`}
      aria-modal="true"
      role="dialog"
      aria-hidden={!item}
    >
      {item && (
        <div className="flex flex-col h-full">
          {/* Header with Back Button */}
          <div className="absolute top-4 left-4 z-10">
            <button 
              onClick={onClose}
              className="bg-yellow-400 text-red-500 rounded-full p-2 hover:bg-yellow-500 transition-colors shadow-lg"
              aria-label="Cerrar detalles"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
          </div>

          {/* Image */}
          <div className="relative w-full h-2/5 flex-shrink-0 bg-stone-200">
            <img src={item.imageUrls[0]} alt={item.name} className="w-full h-full object-cover"/>
          </div>

          {/* Content */}
          <div className="flex-grow overflow-y-auto p-4 sm:p-6 space-y-4 no-scrollbar">
            <div className="flex justify-between items-start">
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-accent flex-1 pr-4">{item.name}</h2>
              {item.price > 0 && <p className="text-2xl sm:text-3xl font-bold text-brand-accent">$00.000</p>}
            </div>
            <p className="text-brand-text text-sm sm:text-base">{item.description}</p>
            
            {item.ingredients && item.ingredients.length > 0 && (
              <div>
                <h4 className="font-semibold text-lg text-brand-text mb-2">Ingredientes:</h4>
                <ul className="list-disc list-inside text-brand-text-light space-y-1 text-sm sm:text-base">
                  {item.ingredients.map((ing, index) => <li key={index}>{ing}</li>)}
                </ul>
              </div>
            )}
            {item.prepTime !== 'N/A' && <p className="text-sm text-brand-text-light mt-4">Tiempo de prep: <span className="font-medium text-brand-text">{item.prepTime}</span></p>}
          </div>

          {/* Sticky Footer Buttons */}
          <div className="flex-shrink-0 p-4 bg-brand-bg/80 backdrop-blur-sm border-t border-stone-300">
            <div className="flex items-center gap-3">
              <a
                href="tel:+5493644921028"
                className="flex-1 bg-sky-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-sky-600 transition-colors duration-300 flex items-center justify-center gap-2 text-lg"
                aria-label="Llamar para hacer un pedido"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                Llamar
              </a>
              <a
                href={`https://wa.link/z0wa6d?text=Hola,%20quisiera%20pedir:%20${encodeURIComponent(item.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-green-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 transition-colors duration-300 flex items-center justify-center gap-2 text-lg"
                aria-label="Hacer pedido por WhatsApp"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.687-1.475L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.501-.183-.001-.381-.001-.579-.001-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                Hacer Pedido
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetailView;