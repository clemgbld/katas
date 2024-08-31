import { isSameTree, TreeNode } from "./is-same-tree";

describe("is same tree", () => {
  it("is same tree", () => {
    expect(isSameTree(null, null)).toBe(true);
    expect(
      isSameTree(new TreeNode(1, null, null), new TreeNode(1, null, null))
    ).toBe(true);
    expect(
      isSameTree(
        new TreeNode(
          1,
          new TreeNode(1, new TreeNode(1, null, null), null),
          new TreeNode(1, new TreeNode(2, null, null), null)
        ),
        new TreeNode(
          1,
          new TreeNode(1, new TreeNode(1, null, null), null),
          new TreeNode(1, new TreeNode(2, null, null), null)
        )
      )
    ).toBe(true);
  });

  it("is not same tree", () => {
    expect(
      isSameTree(new TreeNode(1, null, null), new TreeNode(2, null, null))
    ).toBe(false);
    expect(
      isSameTree(
        new TreeNode(1, null, new TreeNode(1, null, null)),
        new TreeNode(1, null, new TreeNode(2, null, null))
      )
    ).toBe(false);
    expect(
      isSameTree(
        new TreeNode(1, new TreeNode(1, null, null), null),
        new TreeNode(1, new TreeNode(2, null, null), null)
      )
    ).toBe(false);
    expect(
      isSameTree(
        new TreeNode(
          1,
          new TreeNode(1, new TreeNode(1, null, null), null),
          null
        ),
        new TreeNode(
          1,
          new TreeNode(1, new TreeNode(2, null, null), null),
          null
        )
      )
    ).toBe(false);
    expect(
      isSameTree(
        new TreeNode(
          1,
          new TreeNode(1, new TreeNode(1, null, null), null),
          new TreeNode(1, new TreeNode(2, null, null), null)
        ),
        new TreeNode(
          1,
          new TreeNode(1, new TreeNode(1, null, null), null),
          new TreeNode(1, new TreeNode(1, null, null), null)
        )
      )
    ).toBe(false);
  });
});
