const divBy2 = (num: number) => Math.floor(num / 2);

export const searchInsert = (nums: number[], target: number) => {
  let i = 0;
  let halfIndex = divBy2(nums.length);
  while (nums[i] && nums[i] < target) {
    if (halfIndex > i && nums[halfIndex] && nums[halfIndex] <= target) {
      i = halfIndex;
      halfIndex += divBy2(halfIndex);
    } else {
      i++;
      halfIndex = divBy2(halfIndex);
    }
  }
  return i;
};
