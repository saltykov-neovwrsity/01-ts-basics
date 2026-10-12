interface Product {
  readonly id: number;
  title: string;
  description?: string;
  price: number;
}

const usernames: string[] = ['Alice', 'Andrew', 'Olga'];

const ratings: number[] = [90, 75, 80];

const products: Product[] = [
  { id: 1, title: 'iPhone 18 Pro', price: 75000 },
  { id: 2, title: 'iPhone 18 Pro Max', price: 85000 },
  { id: 3, title: 'iPhone 18 Duo', price: 150000 },
];

console.table({ usernames, ratings });
console.table(products);
