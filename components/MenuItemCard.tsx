import React from 'react';
import { MenuItem } from '../types';

interface MenuItemCardProps {
  item: MenuItem;
  onSelect: (item: MenuItem) => void;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, onSelect }) => {
  return (
    <div 
      className="bg-brand-card rounded-lg shadow-md shadow-stone-400/20 hover:shadow-lg hover:shadow-brand-accent/20 transition-all duration-300 flex items-stretch cursor-pointer group overflow-hidden"
      onClick={() => onSelect(item)}
      role="button"
      aria-label={`Ver detalles de ${item.name}`}
    >
      <div className="w-1/3 flex-shrink-0">
        <img
          src={item.imageUrls[0]}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-3 sm:p-4 flex flex-col flex-grow w-2/3">
        <h3 className="text-md sm:text-lg font-bold text-brand-text mb-1 truncate">{item.name}</h3>
        {item.description && <p className="text-brand-text-light text-xs sm:text-sm mb-2 flex-grow leading-tight">{item.description.substring(0, 60)}{item.description.length > 60 && '...'}</p>}
        <div className="flex justify-end items-end mt-auto">
          {item.price > 0 && <span className="text-md sm:text-lg font-bold text-brand-accent">$00.000</span>}
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;