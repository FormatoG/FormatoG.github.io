export enum Category {
  Pizzas = 'Pizzas',
  Hamburguesas = 'Hamburguesas',
  Empanadas = 'Empanadas',
  Promos = 'Promos',
  Sanguches = 'Sánguches',
  Bebidas = 'Bebidas',
}

export interface MenuItem {
  id: number;
  name: string;
  category: Category;
  description: string;
  price: number;
  ingredients: string[];
  prepTime: string;
  imageUrls: string[];
}
