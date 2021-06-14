import { calculator } from "@utils";

describe("calculator", () => {
  describe("sum", () => {
    it("should return the sum of a and b", () => {
      const actual = calculator.sum(1, 2);

      expect(actual).toEqual(3);
    });
  });

  describe("subtract", () => {
    it("should return the correct result of a - b", () => {
      const actual = calculator.subtract(3, 2);

      expect(actual).toEqual(1);
    });
  });

  describe("multiply", () => {
    it("should return the correct result of a * b", () => {
      const actual = calculator.multiply(3, 2);

      expect(actual).toEqual(6);
    });
  });
});
