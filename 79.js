function computeAverageOfNumbers(nums) {
    if (nums.length === 0) {
    return 0;
    }
    
    var result = 0;
    for (var i = 0; i < nums.length; i++) {
    result += nums[i];
    }
    return result/nums.length;
    }