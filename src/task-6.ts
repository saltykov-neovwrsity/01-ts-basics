function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

console.table({
  numbers: getFirstElement<number>([1, 2, 3]),
  strings: getFirstElement<string>(['One', 'Two', 'Three']),
  booleans: getFirstElement<boolean>([true, true, false]),
});

//getFirstElement<number>([1, 2, '3']);
