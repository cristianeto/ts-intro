/*
    ===== Código de TypeScript =====
*/

export interface Product {
  description: string;
  price: number;
}

const cellphone: Product = {
  description: 'Nokia A1',
  price: 150,
};

const tablet: Product = {
  description: 'iPad Pro',
  price: 900,
};

export function calculateTAX(products: Product[]): number[] {
  let total = 0;

  products.forEach(({ price }) => {
    total += price;
  });

  return [total, total * 0.15];
}

const articles = [cellphone, tablet];

// const [total, tax] = calculateTAX(articles);

// console.log('Total is: ', total);
// console.log('Tax is: ', tax);
