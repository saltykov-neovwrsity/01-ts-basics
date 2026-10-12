interface Product {
  readonly id: number;
  title: string;
  description?: string;
  price: number;
}

const product: Product = {
  id: 1,
  title: 'iPhone 18 Pro Max',
  description: 'Екран: 6,9", Пам\'ять: 256 ГБ, ОЗП: 12 ГБ',
  price: 85000,
};

console.table(product);
