import React, { useState } from 'react';
import { MenuItem } from './types';
import Header from './components/Header';
import MenuPage from './components/MenuPage';
import ItemDetailView from './components/ItemDetailView';
import ShippingModal from './components/ShippingModal';

const App: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isShippingModalOpen, setIsShippingModalOpen] = useState(false);

  const handleItemSelect = (item: MenuItem) => {
    setSelectedItem(item);
  };

  const handleCloseDetail = () => {
    setSelectedItem(null);
  };
  
  const handleOpenShippingModal = () => {
    setIsShippingModalOpen(true);
  };

  const handleCloseShippingModal = () => {
    setIsShippingModalOpen(false);
  };

  return (
    <div className="w-full max-w-md mx-auto h-screen max-h-screen overflow-hidden bg-brand-bg text-brand-text font-sans antialiased flex flex-col relative shadow-2xl shadow-stone-800/50">
      <Header />
      
      <main className="flex-grow overflow-y-auto main-scroll-container no-scrollbar">
        <MenuPage onItemSelect={handleItemSelect} onShippingClick={handleOpenShippingModal} />
      </main>

      {/* El componente Footer se ha eliminado de aquí para solucionar el error */}
      
      <ItemDetailView item={selectedItem} onClose={handleCloseDetail} />
      
      <ShippingModal isOpen={isShippingModalOpen} onClose={handleCloseShippingModal} />
      
    </div>
  );
};

export default App;