import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-brand-header sticky top-0 z-40 flex-shrink-0 shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center justify-center">
         <img 
           src="https://ia600903.us.archive.org/9/items/sin-titulo-7-02/Sin%20t%C3%ADtulo-7-02.png" 
           alt="Sabores Urbanos Logo" 
           className="h-14 w-auto" 
         />
      </div>
    </header>
  );
};

export default Header;