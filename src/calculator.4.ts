class Calculator {
  public add(a: number, b: number): number {
    return a + b;
  }

  public div(a: number, b: number): number {
    if (b == 0) {
      return -1;
    }

    return a / b;
  }
}
