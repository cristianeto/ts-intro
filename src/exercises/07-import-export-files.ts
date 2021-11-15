import { calculateTAX, Product } from './06-arguments-destructuring';

/*
    ===== Código de TypeScript =====
*/

const shoppingCart: Product[] = [
  {
    description: 'iPhone 12',
    price: 1000,
  },
  {
    description: 'iPhone 13 Pro',
    price: 1199,
  },
];

const [total, tax] = calculateTAX(shoppingCart);
console.log('Total: ', total);
console.log('Tax: ', tax);
