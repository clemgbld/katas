const memo: Record<number, number> = {};
export function climbStairs(n: number): number {
  if (n === 0) return 1;
  if (n < 0) return 0;
  if (memo[n]) {
    return memo[n];
  }
  memo[n] = climbStairs(n - 1) + climbStairs(n - 2);
  return memo[n];
}
