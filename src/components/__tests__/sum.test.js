import { sum } from "../sum";

test("sum function should calculate the sum two numbers", () => {
  const result = sum(3, 4);

  // asersion
  expect(result).toBe(7);
})