function printUserInfo(name: string, age: number, email?: string): void {
  console.table({ name, age, ...(email !== undefined ? { email } : {}) });
}

printUserInfo('Andrew', 37, 'a@mail.com');
printUserInfo('Alice', 8);
