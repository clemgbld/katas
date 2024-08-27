export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const recur = (
  left: TreeNode | null | undefined,
  right: TreeNode | null | undefined
): boolean =>
  !left && !right
    ? true
    : left?.val === right?.val
    ? recur(left?.left, right?.right) && recur(right?.left, left?.right)
    : false;

export const isSymetric = (root: TreeNode | null): boolean =>
  !root ? true : recur(root.left, root.right);
