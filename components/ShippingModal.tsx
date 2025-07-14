import React, { useEffect } from 'react';

interface ShippingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ShippingModal: React.FC<ShippingModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 transition-opacity duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="shipping-modal-title"
    >
      <div
        className="bg-brand-card rounded-lg shadow-xl w-full max-w-sm p-6 space-y-4 transform transition-transform duration-300 scale-100 animate-in fade-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        <img 
           src="https://ia600903.us.archive.org/9/items/sin-titulo-7-02/Sin%20t%C3%ADtulo-7-02.png" 
           alt="Sabores Urbanos Logo" 
           className="h-14 w-auto mx-auto mb-4" 
         />
        <h2 id="shipping-modal-title" className="text-2xl font-bold text-brand-accent text-center mb-4">
          Costo de Envíos
        </h2>
        
        <div className="space-y-3 text-brand-text">
          <div className="flex justify-between items-center border-b border-stone-300 pb-2">
            <span className="font-semibold">Zona céntrica</span>
            <span className="font-bold text-lg text-brand-accent">$0.000</span>
          </div>
          <div className="flex justify-between items-center border-b border-stone-300 pb-2">
            <span className="font-semibold">Resto de la ciudad</span>
            <span className="font-bold text-lg text-brand-accent">$0.000</span>
          </div>
          <div className="text-center pt-2">
            <p className="font-semibold">Envíos gratis con pedidos superior a</p>
            <p className="text-xl font-bold text-brand-accent mt-1">$00.000</p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full mt-6 bg-red-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-red-600 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-red-500/50"
          aria-label="Cerrar modal de envíos"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ShippingModal;