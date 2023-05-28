### Q1. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

**Example:**
Input: nums = [2,7,11,15], target = 9
Output0 [0,1]

Solution -

Javascript code

```javascript
function twoSum(nums, target) {
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }

    numMap.set(nums[i], i);
  }

  // If no solution found
  return [];
}
```

Java code
```java
import java.util.HashMap;
import java.util.Map;

public class TwoSum {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> numMap = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];

            if (numMap.containsKey(complement)) {
                return new int[]{numMap.get(complement), i};
            }

            numMap.put(nums[i], i);
        }

        // If no solution found
        return new int[0];
    }

    public static void main(String[] args) {
        TwoSum twoSum = new TwoSum();
        int[] nums = {2, 7, 11, 15};
        int target = 9;
        int[] result = twoSum.twoSum(nums, target);
        System.out.println("Indices: [" + result[0] + ", " + result[1] + "]");
    }
}

```

Now let's explain the solution with an example. Suppose we have the following input:

```javascript
const nums = [2, 7, 11, 15];
const target = 9;
```

We want to find two numbers in the `nums` array that add up to the `target` of 9.

The solution begins by creating an empty Map object called `numMap`. This map will store the numbers from the array as keys and their indices as values.

The algorithm then iterates through the `nums` array using a for loop. In each iteration, it calculates the `complement` as the difference between the `target` and the current number in the array.

Here's a step-by-step breakdown of the algorithm's execution for the given example:

1. Iteration 1:
   - Current number: 2
   - Complement: 9 - 2 = 7
   - `numMap` is empty, so it adds the number 2 to the map with its index 0: `numMap.set(2, 0)`

2. Iteration 2:
   - Current number: 7
   - Complement: 9 - 7 = 2
   - The complement (2) is already present in `numMap` with index 0, so the algorithm returns the indices [0, 1].

The algorithm found the solution [0, 1], which represents the indices of the numbers [2, 7] in the `nums` array that add up to the target of 9.

The optimized solution utilizes a Map data structure to store the numbers and their indices, enabling constant time (O(1)) lookups. This approach improves the overall time complexity of the solution to O(n), as it only requires a single pass through the array to find the solution.

---

### Q2. Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

**Example :**
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_*,_*]
Explanation: Your function should return k = 2, with the first two elements of nums being 2. It does not matter what you leave beyond the returned k (hence they are underscores)
```javascript

var removeElement = function(nums, val) {
     let i = 0;
    let j = nums.length-1
    let c = 0;

    if(nums.length==1 && nums[0]!=val) return 1;
    if(nums.length==1 && nums[0]==val) return 0;
    while(i<=j){
        if(nums[i]==val && nums[j]!=val){

            //swap elements at i and j
            let temp = nums[i];
            nums[i]=nums[j];
            nums[j]=temp
            i++;
            j--;
            c++
        }
        else if(nums[i]!=val && nums[j]!=val){
            i++;
            c++;
        }
        else if(nums[i]==val && nums[j]==val){
            j--;
        }
        else{
            i++;
            j--;
            c++
        }

        
    }
    return c
};
```