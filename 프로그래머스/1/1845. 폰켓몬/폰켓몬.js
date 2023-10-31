function solution(nums) {
  const pick = nums.length / 2;
  const arr = [...new Set(nums)];

  return arr.length > pick ? pick : arr.length;
}