// brute-force--------------------------------------------
const twoSumBF = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) return [i, j];
    }
  }
};

// using map-----------------------------------------------
function twoSum(nums, target) {
  let map1 = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map1.has(diff)) return [i, map1.get(diff)];
    map1.set(nums[i], i);
  }
  return map1;
}

let nums = [2, 1, 7, 11, 15];
//[7, 2, -3, -6];
let target = 9;
let res = twoSum(nums, target);
console.log(res);
