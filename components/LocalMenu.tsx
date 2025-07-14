import React, { useState, useRef, useEffect, useCallback } from 'react';

interface LocalMenuProps {
  onToggle: (isOpen: boolean) => void;
  onShippingClick: () => void;
}

const IconMap: { [key: string]: React.ReactNode } = {
  llamar: (
    <img src="https://cdn-icons-png.freepik.com/512/3101/3101453.png" alt="Llamar" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
  ),
  whatsapp: (
    <img src="https://cdn-icons-png.freepik.com/512/1847/1847212.png" alt="Whatsapp" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
  ),
  ubicacion: (
    <img src="https://cdn-icons-png.freepik.com/512/5247/5247255.png" alt="Ubicación" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
  ),
  envios: (
    <img src="https://cdn-icons-png.freepik.com/512/4454/4454464.png" alt="Envíos" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
  ),
};

const menuItems = [
  {
    id: 'llamar',
    label: 'Llamar',
    description: '3644-921028',
    href: 'tel:+5493644921028',
  },
  {
    id: 'whatsapp',
    label: 'Whatsapp',
    description: '3644-921028',
    href: 'https://wa.link/z0wa6d',
    target: '_blank',
  },
  {
    id: 'ubicacion',
    label: 'Ubicación',
    description: 'Calle 38 y 19 Barrio Nuevo',
    href: 'https://maps.app.goo.gl/cUUACifa6GmWRALS7',
    target: '_blank',
  },
  {
    id: 'envios',
    label: 'Envíos',
    description: 'Consultar costo',
  },
];

const LocalMenu: React.FC<LocalMenuProps> = ({ onToggle, onShippingClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [dropdownTop, setDropdownTop] = useState(0);

  const setOpenState = useCallback((open: boolean) => {
    setIsOpen(open);
    onToggle(open);
  }, [onToggle]);

  const handleClick = (item: (typeof menuItems)[0]) => {
    setOpenState(false); // Close menu after any interaction.

    if (item.id === 'envios') {
      onShippingClick();
      return;
    }
    
    if ('action' in item && typeof (item as any).action === 'function') {
      (item as any).action();
    }
  };

  useEffect(() => {
    const scrollContainer = document.querySelector('.main-scroll-container') as HTMLElement;
    if (isOpen) {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        setDropdownTop(rect.bottom + 8);
      }
      if (scrollContainer) scrollContainer.style.overflowY = 'hidden';
    } else {
      if (scrollContainer) scrollContainer.style.overflowY = 'auto';
    }
    return () => {
      if (scrollContainer) scrollContainer.style.overflowY = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenState(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, setOpenState]);

  return (
    <>
      <button
        ref={buttonRef}
        onClick={() => setOpenState(!isOpen)}
        className="bg-brand-card text-brand-text font-semibold py-2 px-4 rounded-lg border border-stone-400/50 hover:border-brand-accent transition-colors duration-300 flex items-center justify-between shadow w-0 flex-1 sm:flex-none sm:w-52 text-base sm:text-lg"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-7 h-7 rounded-full flex-shrink-0 bg-stone-200 flex items-center justify-center">
            <svg
              className="w-5 h-5 text-brand-text-light"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 20l-4.95-5.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span className="whitespace-nowrap">Nuestro Local</span>
        </div>
        <svg
          className={`w-5 h-5 text-brand-text-light transition-transform duration-300 flex-shrink-0 ml-3 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      {/* Dropdown Menu */}
      <div
        ref={dropdownRef}
        style={{ top: dropdownTop ? `${dropdownTop}px` : '-9999px' }}
        className={`fixed left-1/2 -translate-x-1/2 w-full max-w-md z-40 px-4 transition-opacity duration-300 ease-in-out ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        <div
          className={`bg-brand-card/95 backdrop-blur-sm shadow-xl rounded-lg p-4 transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-y-0' : '-translate-y-4'
          }`}
        >
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {menuItems.map((item) => {
              const commonProps = {
                key: item.id,
                onClick: () => handleClick(item),
                className:
                  'bg-white rounded-lg aspect-video transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-xl hover:shadow-brand-accent/20 focus:outline-none focus:ring-4 focus:ring-brand-accent/50 flex flex-col items-center justify-center p-2 text-center group cursor-pointer',
                'aria-label': `Acceder a ${item.label}`,
              };

              const content = (
                <>
                  {IconMap[item.id]}
                  <span className="text-sm sm:text-base font-bold mt-2 text-brand-text group-hover:text-brand-accent transition-colors">{item.label}</span>
                  {item.description && (
                      <span className="text-xs mt-1 whitespace-pre-line leading-tight text-brand-text-light">
                        {item.description}
                      </span>
                    )}
                </>
              );

              if ('href' in item && (item as any).href) {
                return (
                  <a href={(item as any).href} target={'target' in item ? (item as any).target : '_self'} rel="noopener noreferrer" {...commonProps}>
                    {content}
                  </a>
                );
              }

              return <button {...commonProps}>{content}</button>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default LocalMenu;