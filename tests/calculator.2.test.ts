// Calculator.test.ts

test("Case 1. div(10, 2)", () => {
  const calculator = new Calculator();

  const result = calculator.div(10, 2);
  assert(result == 5);
});

test("Case 2. div(100, 0)", () => {
  const calculator = new Calculator();

  try {
    const result = calculator.div(100, 0);
    assert.fail(); // don't reach
  } catch (e: ArithmeticError) {
    // success
  }
});
