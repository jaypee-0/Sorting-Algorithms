function quickSort(arr) {
	// Check the length and return as it is if < 1
	if (arr.length <= 1) { 
		return arr;
		// left & right to compare with pivot
	} else {
        let left = [];
		let right = [];
		let newArray = [];
		let pivot = arr.pop();

		for (let i = 0; i < arr.length; i++) {
			// if element is smaller push into left array
			if (arr[i] <= pivot) {
				left.push(arr[i]);
			// if element is bigger push into right array
			} else {
				right.push(arr[i]);
			}
		}
		// return a combination of left and right array
		return newArray.concat(quickSort(left), pivot, quickSort(right));
	}
}

module.exports = {quickSort : quickSort};