
export enum Category {
  PIZZAS = 'Pitsad',
  SPECIALS = 'Eripakkumised',
  DRINKS = 'Joogid',
  COMBOS = 'Kombo pakkumised',
  ADDONS = 'Lisandid'
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  imageUrl: string;
  isVegetarian?: boolean;
  isNew?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}
