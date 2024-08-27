import { isSymetric, TreeNode } from "./symetric-tree";

describe("is tree symetric", () => {
  it("should be symetric when there is no tree", () => {
    expect(isSymetric(null)).toBe(true);
  });

  it("should be symetric", () => {
    expect(isSymetric(new TreeNode(1, null, null))).toBe(true);
    expect(
      isSymetric(
        new TreeNode(
          1,
          new TreeNode(2, null, new TreeNode(1, null, null)),
          new TreeNode(2, new TreeNode(1, null, null), null)
        )
      )
    ).toBe(true);
  });

  it("should not be symetric", () => {
    expect(
      isSymetric(
        new TreeNode(
          1,
          new TreeNode(2, null, null),
          new TreeNode(3, null, null)
        )
      )
    ).toBe(false);

    expect(
      isSymetric(
        new TreeNode(
          1,
          new TreeNode(2, new TreeNode(1, null, null), null),
          new TreeNode(2, null, new TreeNode(2, null, null))
        )
      )
    ).toBe(false);
  });
});
