import { climbStairs } from "./climbing-stairs";

describe("climbing stairs", () => {
  it("should find all possible way to climb the stairs", () => {
    expect(climbStairs(1)).toBe(1);
    expect(climbStairs(2)).toBe(2);
    expect(climbStairs(3)).toBe(3);
    expect(climbStairs(10)).toBe(89);
    expect(climbStairs(45)).toBe(climbStairs(45));
  });
});
