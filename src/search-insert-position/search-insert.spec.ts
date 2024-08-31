import { searchInsert } from "./search-insert";

describe("search insert", () => {
  it("should be inserted at the first postion when the array is empty", () => {
    expect(searchInsert([], 5)).toBe(0);
  });

  it("should insert the target a the correct place", () => {
    expect(searchInsert([2], 3)).toBe(1);
    expect(searchInsert([2, 5, 7], 6)).toBe(2);
    expect(searchInsert([2, 5, 7], 5)).toBe(1);
    expect(searchInsert([3], 2)).toBe(0);
    expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
    expect(searchInsert([1, 2, 3, 4, 8, 10, 14], 13)).toBe(6);
  });
});
