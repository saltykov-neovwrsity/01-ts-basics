function getMessage(): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Hello, world!');
    }, 2000);
  });
}

getMessage().then((result: string) => console.log(result));
