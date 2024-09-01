class Calculator {
  /**
   * CAUTION!!
   * ATTENTION!!
   * If b is zero, it should raise error.
   */
  public div(a: number, b: number): number {
    if (b == 0) {
      throw new ArithmeticError();
    }

    return a / b;
  }
}
