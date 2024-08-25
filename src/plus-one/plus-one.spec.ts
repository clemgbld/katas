import { plusOne } from "./plus-one";

describe("plus one", () => {
  it("increase  digits", () => {
    expect(plusOne([1])).toEqual([2]);
    expect(plusOne([2])).toEqual([3]);
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
  });

  it("increase the digits when the last digit is 9", () => {
    expect(plusOne([9])).toEqual([1, 0]);
    expect(plusOne([9, 9])).toEqual([1, 0, 0]);
    expect(plusOne([9, 9, 9])).toEqual([1, 0, 0, 0]);
    expect(plusOne([8, 9, 9, 9])).toEqual([9, 0, 0, 0]);
    expect(plusOne([5, 9, 9, 9])).toEqual([6, 0, 0, 0]);
    expect(plusOne([4, 5, 9, 9, 9])).toEqual([4, 6, 0, 0, 0]);
  });
});
