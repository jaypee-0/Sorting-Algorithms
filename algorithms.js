// BubbleSort (Linear)
console.log("BUBBLE SORT")
const bubble = require('./bubbleSort')

const arrayOne = [234, 43, 55, 63, 5, 6, 235, 547]
bubble.bubbleSort(arrayOne);
console.log(`First Array: ${arrayOne}`);

const arrayTwo = [1, 4, 2, 5, -2, 3]
bubble.bubbleSort(arrayTwo);
console.log(`Second Array: ${arrayTwo}`);

const arrayThree = [52, 37, 63, 14, 17, 8, 6, 25]
bubble.bubbleSort(arrayThree);
console.log(`Third Array: ${arrayThree}`);
/* Time Complexity:
Average Case: O(n^2)
Worst Case: O(n^2)
Best Case: O(n)
*/

// MergeSort (Divide and Conquer)
console.log("MERGE SORT")
const merge = require('./mergeSort')

console.log(`First Array:`);
console.log(merge.mergeSort([234, 43, 55, 63], [5, 6, 235, 547]));
console.log(`Second Array:`);
console.log(merge.mergeSort([1, 4, 2], [5, -2, 3]));
console.log(`Third Array:`);
console.log(merge.mergeSort([52, 37, 63, 14], [17, 8, 6, 25]));
/* Time Complexity:
Average Case: O(n^Log n)
Worst Case: O(n^Log n)
Best Case: O(n^log(n))
*/

// QuickSort (Divide and Conquer)
console.log("QUICK SORT")
const quick = require('./quickSort')
quick.quickSort(arrayOne);
console.log(`First array: ${arrayOne}`);
quick.quickSort(arrayTwo);
console.log(`Second array: ${arrayTwo}`);
quick.quickSort(arrayThree);
console.log(`Third array: ${arrayThree}`);
/* Time Complexity:
Average Case: O(n^log(n))
Worst Case: O(n^2)
Best Case: O(n^log(n))
*/