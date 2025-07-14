import React, { useState } from 'react';
import { Category, MenuItem } from '../types';
import { menuItems } from '../data/menu';
import MenuItemCard from './MenuItemCard';
import CategoryNav, { IconMap } from './CategoryNav';
import LocalMenu from './LocalMenu';

interface MenuPageProps {
  onItemSelect: (item: MenuItem) => void;
  onShippingClick: () => void;
}

const orderedCategories = [
  Category.Promos,
  Category.Pizzas,
  Category.Hamburguesas,
  Category.Empanadas,
  Category.Sanguches,
  Category.Bebidas,
];

const MenuPage: React.FC<MenuPageProps> = ({ onItemSelect, onShippingClick }) => {
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const [isLocalMenuOpen, setIsLocalMenuOpen] = useState(false);
  const navCategories = ['Todo', ...orderedCategories];
  const [selectedCategory, setSelectedCategory] = useState<string>('Todo');

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handleCategoryToggle = (isOpen: boolean) => {
    if (isOpen) setIsLocalMenuOpen(false);
    setIsCategoryMenuOpen(isOpen);
  };

  const handleLocalMenuToggle = (isOpen: boolean) => {
    if (isOpen) setIsCategoryMenuOpen(false);
    setIsLocalMenuOpen(isOpen);
  };

  const isDropdownOpen = isCategoryMenuOpen || isLocalMenuOpen;

  return (
    <div className="relative">
      <div className="sticky top-0 bg-brand-bg/90 backdrop-blur-sm z-30 shadow-md shadow-stone-400/20">
        <div className="container mx-auto px-4 py-3 flex items-stretch space-x-2">
          <CategoryNav
            categories={navCategories}
            activeCategory={selectedCategory}
            onCategorySelect={handleCategorySelect}
            onToggle={handleCategoryToggle}
          />
          <LocalMenu onToggle={handleLocalMenuToggle} onShippingClick={onShippingClick} />
        </div>
      </div>


      <div className={`p-2 sm:p-4 space-y-8 mt-4 transition-all duration-300 ${isDropdownOpen ? 'blur-sm pointer-events-none' : ''}`}>
        {selectedCategory === 'Todo' ? (
          // If 'Todo' is selected, show all items grouped by category in the specified order
          orderedCategories.map(category => (
            <div key={category}>
              <div className="bg-brand-card rounded-lg py-2 px-4 mb-4 shadow-md flex items-center gap-3">
                 <div className="w-9 h-9 flex-shrink-0 p-1">
                    {IconMap[category]}
                 </div>
                 <h2 className="text-xl font-bold text-red-600 drop-shadow-[0_1px_1px_rgba(0,0,0,0.15)]">{category}</h2>
              </div>
              <div className="space-y-4">
                {menuItems
                  .filter(item => item.category === category)
                  .map(item => (
                    <MenuItemCard key={item.id} item={item} onSelect={onItemSelect} />
                ))}
              </div>
            </div>
          ))
        ) : (
          // If a specific category is selected, show only those items
          <div className="space-y-4">
            {menuItems
              .filter(item => item.category === selectedCategory)
              .map(item => (
                <MenuItemCard key={item.id} item={item} onSelect={onItemSelect} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuPage;