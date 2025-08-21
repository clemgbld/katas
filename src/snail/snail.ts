export function renderSnailTable(n: number): string {
  if (!Number.isInteger(n) || n < 0)
    throw new Error("the input must be a positive integer");
  if (n === 0) return "";
  const matrix = generateSnailMatrix(n);
  return `<table border=1>${matrix
    .flatMap(
      (row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`
    )
    .join("")}</table>`;
}

export function generateSnailMatrix(n: number): number[][] {
  const matrix = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => 0)
  );
  let count = 1;
  let left = 0;
  let right = n - 1;
  let top = 0;
  let bottom = n - 1;

  while (left <= right && top <= bottom) {
    // left -> right
    for (let i = left; i <= right; i++) {
      matrix[top][i] = count;
      count++;
    }
    top++;

    // top -> bottom
    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = count;
      count++;
    }
    right--;

    // right -> left
    for (let i = right; i >= left; i--) {
      matrix[bottom][i] = count;
      count++;
    }
    bottom--;

    // bottom -> top
    for (let i = bottom; i >= top; i--) {
      matrix[i][left] = count;
      count++;
    }
    left++;
  }

  return matrix;
}
