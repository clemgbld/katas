import { hasPathSum, TreeNode } from "./path-sum";

describe("path sum", () => {
  it("should be false when there is no tree", () => {
    expect(hasPathSum(null, 5)).toBe(false);
  });

  it("should be true when the siplest path meet the target sum", () => {
    expect(hasPathSum(new TreeNode(5, null, null), 5)).toBe(true);
  });
  it("should be false when the simplest path does not meet the target sum", () => {
    expect(hasPathSum(new TreeNode(6, null, null), 5)).toBe(false);
  });

  it("should be true when the left path does  meet the target sum", () => {
    expect(
      hasPathSum(new TreeNode(6, new TreeNode(4, null, null), null), 10)
    ).toBe(true);
  });

  it("should be true when the left path does  meet the target sum", () => {
    expect(
      hasPathSum(new TreeNode(6, null, new TreeNode(4, null, null)), 10)
    ).toBe(true);
  });
});
