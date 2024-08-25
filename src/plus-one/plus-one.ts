export const plusOne = (digits: number[]) => {
  let lastDigitIndex = digits.length - 1;

  while (digits[lastDigitIndex] === 9) {
    if (lastDigitIndex !== 0) {
      digits[lastDigitIndex] = 0;
    } else {
      digits[lastDigitIndex] = 1;
      digits.push(0);
    }
    lastDigitIndex--;
  }

  if (lastDigitIndex >= 0) {
    digits[lastDigitIndex] = digits[lastDigitIndex] + 1;
  }

  return digits;
};
