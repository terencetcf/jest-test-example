import { calculator } from "@utils";

describe("index", () => {
  describe("sum", () => {
    it("should return the sum of a and b", () => {
      const actual = calculator.sum(1, 2);

      expect(actual).toEqual(3);
    });
  });
});
