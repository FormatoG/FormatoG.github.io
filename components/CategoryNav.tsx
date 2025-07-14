import React, { useState, useRef, useEffect, useCallback } from 'react';

interface CategoryNavProps {
  categories: string[];
  activeCategory: string;
  onCategorySelect: (category: string) => void;
  onToggle: (isOpen: boolean) => void;
}

export const IconMap: { [key: string]: React.ReactNode } = {
  'Todo': (
    <img src="https://cdn-icons-png.freepik.com/512/9725/9725767.png" alt="Todo" className="w-full h-full object-contain" />
  ),
  'Promos': (
    <img src="https://cdn-icons-png.freepik.com/512/5507/5507512.png" alt="Promos" className="w-full h-full object-contain" />
  ),
  'Pizzas': (
    <img src="https://cdn-icons-png.flaticon.com/512/1404/1404945.png" alt="Pizzas" className="w-full h-full object-contain" />
  ),
  'Hamburguesas': (
     <img src="https://cdn-icons-png.flaticon.com/512/5787/5787016.png" alt="Hamburguesas" className="w-full h-full object-contain" />
  ),
  'Empanadas': (
    <img src="https://cdn-icons-png.flaticon.com/512/6002/6002264.png" alt="Empanadas" className="w-full h-full object-contain" />
  ),
  'Sánguches': (
     <img src="https://cdn-icons-png.flaticon.com/512/3574/3574451.png" alt="Sánguches" className="w-full h-full object-contain" />
  ),
  'Bebidas': (
    <img src="https://cdn-icons-png.flaticon.com/512/1261/1261134.png" alt="Bebidas" className="w-full h-full object-contain" />
  ),
};

const CategoryNav: React.FC<CategoryNavProps> = ({ categories, activeCategory, onCategorySelect, onToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [dropdownTop, setDropdownTop] = useState(0);

  const setOpenState = useCallback((open: boolean) => {
    setIsOpen(open);
    onToggle(open);
  }, [onToggle]);

  const handleSelect = (category: string) => {
    onCategorySelect(category);
    setOpenState(false);
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
        buttonRef.current && !buttonRef.current.contains(event.target as Node) &&
        dropdownRef.current && !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenState(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, setOpenState]);

  const activeIcon = IconMap[activeCategory] || IconMap['Todo'];

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
           <div className="w-7 h-7 rounded-full flex-shrink-0 bg-brand-accent/10 flex items-center justify-center p-1 text-brand-accent">
            {activeIcon}
           </div>
          <span className="whitespace-nowrap">{activeCategory}</span>
        </div>
        <svg className={`w-5 h-5 text-brand-text-light transition-transform duration-300 flex-shrink-0 ml-3 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </button>

      {/* Dropdown Menu */}
      <div
        ref={dropdownRef}
        style={{ top: dropdownTop ? `${dropdownTop}px` : '-9999px' }}
        className={`fixed left-1/2 -translate-x-1/2 w-full max-w-md z-40 px-4 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        aria-hidden={!isOpen}
      >
        <div
          className={`bg-brand-card/95 backdrop-blur-sm shadow-xl rounded-lg p-4 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-4'}`}
        >
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
             {categories.map(cat => (
              <button
                key={cat}
                onClick={() => handleSelect(cat)}
                className={`bg-white rounded-lg aspect-video transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-xl hover:shadow-brand-accent/20 focus:outline-none focus:ring-4 focus:ring-brand-accent/50 flex flex-col items-center justify-center p-2 text-center group cursor-pointer ${
                  activeCategory === cat ? 'ring-4 ring-brand-accent' : ''
                }`}
                aria-label={`Seleccionar categoría ${cat}`}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 text-brand-accent">
                    {IconMap[cat] || IconMap['Todo']}
                </div>
                <span className="text-sm sm:text-base font-bold mt-2 text-brand-text group-hover:text-brand-accent transition-colors">{cat}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryNav;