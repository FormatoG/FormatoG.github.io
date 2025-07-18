
import { MenuItem, Category } from '../types';

export const menuItems: MenuItem[] = [
  // Pizzas
  {
    id: 1,
    name: 'Pizza Mozzarella',
    category: Category.Pizzas,
    description: 'La clásica pizza con abundante mozzarella y salsa de tomate casera.',
    price: 12500,
    ingredients: ['Masa de pizza', 'Salsa de tomate', 'Queso mozzarella', 'Aceitunas verdes', 'Orégano'],
    prepTime: '20-25 min',
    imageUrls: ['https://dieguitoushuaia.com/wp-content/uploads/2020/09/muzzarella.jpg'],
  },
  {
    id: 2,
    name: 'Pizza Napolitana',
    category: Category.Pizzas,
    description: 'Mozzarella, rodajas de tomate fresco y un toque de ajo y albahaca.',
    price: 13500,
    ingredients: ['Masa de pizza', 'Salsa de tomate', 'Queso mozzarella', 'Tomate fresco', 'Ajo', 'Albahaca', 'Aceitunas'],
    prepTime: '20-25 min',
    imageUrls: ['https://media.elgourmet.com/article/8metlvp345_portada-pizza.jpg'],
  },
  {
    id: 3,
    name: 'Pizza Fugazzeta',
    category: Category.Pizzas,
    description: 'Una delicia para los amantes de la cebolla, con mozzarella y un toque de aceite de oliva.',
    price: 14000,
    ingredients: ['Masa de pizza', 'Queso mozzarella', 'Cebolla blanca', 'Aceite de oliva', 'Orégano'],
    prepTime: '25-30 min',
    imageUrls: ['https://tofuu.getjusto.com/orioneat-local/resized2/8BmmxWrSsXHMr9Kpk-300-x.webp'],
  },
  {
    id: 4,
    name: 'Pizza Calabresa',
    category: Category.Pizzas,
    description: 'Sabor intenso con longaniza calabresa, mozzarella y ají molido.',
    price: 15000,
    ingredients: ['Masa de pizza', 'Salsa de tomate', 'Queso mozzarella', 'Longaniza calabresa', 'Ají molido', 'Aceitunas negras'],
    prepTime: '25-30 min',
    imageUrls: ['https://speedy.uenicdn.com/4c6d58bf-c626-4ade-85a5-5390e842a41a/c440_a/image/upload/v1612909110/business/f919def1-92cc-4aaa-906d-07447acb469b.jpg'],
  },
  // Hamburguesas
  {
    id: 5,
    name: 'Hamburguesa Clásica',
    category: Category.Hamburguesas,
    description: 'Carne de primera, lechuga, tomate y nuestra salsa especial en pan brioche.',
    price: 9500,
    ingredients: ['Carne de res', 'Pan brioche', 'Lechuga', 'Tomate', 'Cebolla', 'Salsa especial'],
    prepTime: '15-20 min',
    imageUrls: ['https://jetextramar.com/wp-content/uploads/2021/07/congelados-receta-hamburguesa-de-pollo-1024x768.jpg'],
  },
  {
    id: 6,
    name: 'Hamburguesa Doble Cheddar',
    category: Category.Hamburguesas,
    description: 'Doble medallón de carne, doble porción de queso cheddar y panceta crujiente.',
    price: 12000,
    ingredients: ['Doble carne de res', 'Pan brioche', 'Queso cheddar', 'Panceta', 'Pepinillos'],
    prepTime: '15-20 min',
    imageUrls: ['https://media-cdn.tripadvisor.com/media/photo-s/1c/c7/15/d1/holy-cheese-doble-hamburguesa.jpg'],
  },
  {
    id: 7,
    name: 'Hamburguesa Criolla',
    category: Category.Hamburguesas,
    description: 'Con provoleta grillada, morrones asados y salsa criolla.',
    price: 11500,
    ingredients: ['Carne de res', 'Pan rústico', 'Queso provoleta', 'Morrones asados', 'Huevo frito', 'Salsa criolla'],
    prepTime: '20-25 min',
    imageUrls: ['https://i.pinimg.com/1200x/03/82/15/0382153476c9ca4d2b7dfe4b69032bf7.jpg'],
  },
  {
    id: 8,
    name: 'Hamburguesa Veggie',
    category: Category.Hamburguesas,
    description: 'Medallón de lentejas y champiñones, con rúcula, tomate y mayonesa de palta.',
    price: 10500,
    ingredients: ['Medallón de lentejas', 'Pan integral', 'Rúcula', 'Tomate', 'Mayonesa de palta', 'Cebolla morada'],
    prepTime: '15-20 min',
    imageUrls: ['https://www.conasi.eu/blog/wp-content/uploads/2022/05/hamburguesa-vegana-1.jpg'],
  },
  // Empanadas
  {
    id: 9,
    name: 'Empanada de Carne Suave',
    category: Category.Empanadas,
    description: 'Relleno jugoso de carne cortada a cuchillo, con cebolla, huevo y aceitunas.',
    price: 1500,
    ingredients: ['Carne de res', 'Cebolla', 'Huevo duro', 'Aceitunas', 'Comino'],
    prepTime: '10-15 min',
    imageUrls: ['https://www.cucinare.tv/wp-content/uploads/2021/09/Empanadas-fritas-o-al-horno.jpg'],
  },
  {
    id: 10,
    name: 'Empanada de Jamón y Queso',
    category: Category.Empanadas,
    description: 'La combinación perfecta de jamón cocido y mozzarella derretida.',
    price: 1500,
    ingredients: ['Jamón cocido', 'Queso mozzarella', 'Masa de hojaldre'],
    prepTime: '10-15 min',
    imageUrls: ['https://www.clarin.com/img/2021/04/12/WYz8Yr8tB_1256x620__1.jpg'],
  },
  {
    id: 11,
    name: 'Empanada de Pollo',
    category: Category.Empanadas,
    description: 'Pollo desmenuzado en una salsa cremosa con pimientos y cebolla.',
    price: 1500,
    ingredients: ['Pollo', 'Cebolla', 'Pimiento rojo', 'Salsa blanca', 'Especias'],
    prepTime: '10-15 min',
    imageUrls: ['https://img.youtube.com/vi/mjiA5-g-Tw0/hqdefault.jpg'],
  },
   {
    id: 12,
    name: 'Empanada de Humita',
    category: Category.Empanadas,
    description: 'Dulce y cremosa, con choclo, zapallo y queso.',
    price: 1500,
    ingredients: ['Choclo', 'Zapallo', 'Queso cremoso', 'Cebolla de verdeo', 'Albahaca'],
    prepTime: '10-15 min',
    imageUrls: ['https://elsabroso.com.ar/wp-content/uploads/2024/12/empanada-humita.webp'],
  },
  // Promos
  {
    id: 13,
    name: 'Promo Pizza para 5 Personas',
    category: Category.Promos,
    description: 'Ideal para compartir. Incluye 2 pizzas de muzzarella, 1 pizza especial, gaseosa grande y postre.',
    price: 13500,
    ingredients: ['2 Pizzas grandes muzzarella (8 porciones c/u)', '1 Pizza especial (jamón y morrones o fugazzeta rellena)', '1 gaseosa de 1.5L o 2L', '1 postre helado chico (500g) o flan casero x5'],
    prepTime: '30-40 min',
    imageUrls: ['https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg'],
  },
  {
    id: 14,
    name: 'Promo Empanadas para 4',
    category: Category.Promos,
    description: 'Un combo de 24 empanadas surtidas con nuestras salsitas caseras y una gaseosa grande para acompañar.',
    price: 9800,
    ingredients: ['24 empanadas surtidas (carne, pollo, jamón y queso, verdura)', '4 salsitas caseras (ají, chimichurri, criolla, etc.)', '1 gaseosa de 1.5L'],
    prepTime: '20-25 min',
    imageUrls: ['https://cuk-it.com/wp-content/uploads/2024/05/empanadas-carne-cuchillo-thumb-200x200.webp'],
  },
  {
    id: 15,
    name: 'Promo Pizza y Hamburguesas',
    category: Category.Promos,
    description: 'La combinación perfecta: 2 pizzas grandes y 4 hamburguesas completas con papas y gaseosa.',
    price: 15500,
    ingredients: ['2 Pizzas grandes (1 muzzarella + 1 especial a elección)', '4 Hamburguesas completas', '1 porción de papas grandes o 2 medianas', '1 gaseosa de 2L'],
    prepTime: '30-40 min',
    imageUrls: ['https://thumbs.dreamstime.com/b/pizza-y-hamburguesa-con-fondo-negro-vista-superior-foto-de-alta-calidad-187909343.jpg'],
  },
   {
    id: 16,
    name: 'Mega Promo 5 Hamburguesas',
    category: Category.Promos,
    description: '¡Un festín! 5 hamburguesas completas con papas fritas, salsas y gaseosa para compartir.',
    price: 11500,
    ingredients: ['5 Hamburguesas completas', '2 porciones grandes de papas fritas', '5 salsas individuales', '1 gaseosa de 2L'],
    prepTime: '25-30 min',
    imageUrls: ['https://img-global.cpcdn.com/recipes/90033ff6a172548a/640x640sq80/photo.webp'],
  },
  // Sánguches
  {
    id: 17,
    name: 'Sánguche de Milanesa Completo',
    category: Category.Sanguches,
    description: 'Milanesa de ternera, lechuga, tomate, jamón, queso y huevo frito en pan francés.',
    price: 11000,
    ingredients: ['Pan francés', 'Milanesa de ternera', 'Lechuga', 'Tomate', 'Jamón', 'Queso', 'Huevo frito'],
    prepTime: '15-20 min',
    imageUrls: ['https://www.tafiviejo.gob.ar/fotos/cache/notas/2024/10/08/830x465_241008004008_43152.jpg'],
  },
  {
    id: 18,
    name: 'Sánguche de Lomito',
    category: Category.Sanguches,
    description: 'Bife de lomo tierno, lechuga, tomate, jamón, queso, huevo y mayonesa casera.',
    price: 13000,
    ingredients: ['Pan árabe', 'Bife de lomo', 'Lechuga', 'Tomate', 'Jamón', 'Queso', 'Huevo frito', 'Mayonesa'],
    prepTime: '15-20 min',
    imageUrls: ['https://media.urgente24.com/p/0291a1f9a4afa1d606cbd25d2b9de283/adjuntos/319/imagenes/002/630/0002630803/lomito-348-pjpg.jpg'],
  },
  {
    id: 19,
    name: 'Triple Tostado',
    category: Category.Sanguches,
    description: 'Un clásico sándwich de tres capas con jamón, queso, lechuga y tomate, perfectamente tostado.',
    price: 9500,
    ingredients: ['Pan de miga triple', 'Jamón cocido', 'Queso de máquina', 'Lechuga', 'Tomate'],
    prepTime: '10-15 min',
    imageUrls: ['https://img-global.cpcdn.com/recipes/59296a703611b07c/300x426cq80/sandwich-triple-de-jamon-y-queso-foto-principal.webp'],
  },
  // Bebidas
  {
    id: 25,
    name: 'Gaseosa Línea Coca-Cola',
    category: Category.Bebidas,
    description: 'Lata de 354ml. Elige entre Coca-Cola Original, Sin Azúcar o Light.',
    price: 2000,
    ingredients: [],
    prepTime: 'N/A',
    imageUrls: ['https://latorrepizza.com.ar/wp-content/uploads/2023/03/B-GASEOSAS-min.jpg'],
  },
  {
    id: 26,
    name: 'Agua Saborizada',
    category: Category.Bebidas,
    description: 'Botella de 500ml. Sabores: Manzana, Naranja, Pomelo.',
    price: 1800,
    ingredients: [],
    prepTime: 'N/A',
    imageUrls: ['http://acdn-us.mitiendanube.com/stores/001/157/846/products/levitess-4e72e9073979c1786317062059644811-480-0.jpg'],
  },
  {
    id: 27,
    name: 'Cerveza Quilmes Clásica',
    category: Category.Bebidas,
    description: 'Lata de 473ml de la cerveza más popular de Argentina.',
    price: 3000,
    ingredients: [],
    prepTime: 'N/A',
    imageUrls: ['https://shop.gustoargentino.com/cdn/shop/files/cerveza-quilmes.png?v=1741175524&width=640'],
  },
  {
    id: 28,
    name: 'Vino Malbec (Copa)',
    category: Category.Bebidas,
    description: 'Una copa de nuestro Malbec de la casa, intenso y frutado.',
    price: 4000,
    ingredients: [],
    prepTime: 'N/A',
    imageUrls: ['https://static.wixstatic.com/media/fe24ac_06d8218106d74bcfbec02f1355b87713~mv2.webp/v1/fill/w_580,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/fe24ac_06d8218106d74bcfbec02f1355b87713~mv2.webp'],
  },
    {
    id: 29,
    name: 'Soda / Agua con Gas',
    category: Category.Bebidas,
    description: 'Botella de 500ml.',
    price: 1500,
    ingredients: [],
    prepTime: 'N/A',
    imageUrls: ['https://acdn-us.mitiendanube.com/stores/001/147/879/products/71-bfcb6c80fd618473eb17159782074214-640-0.png'],
  },
];