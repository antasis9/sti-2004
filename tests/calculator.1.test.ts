// Calculator.test.ts

test("Case 1. add(1, 1)", () => {
  const calculator = new Calculator();

  const result = calculator.add(1, 1);
  assert(result == 2);
});

test("Case 2. add(-100, 1)", () => {
  const calculator = new Calculator();

  const result = calculator.add(-100, 1);
  assert(result == -99);
});
