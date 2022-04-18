function mergeSort(left,right) {
	let i = 0;
	let j = 0;
	let results = [];
	while (i < left.length || j < right.length) {
		if (i === left.length) {
			results.push(right[j]);
			j++;
		} else if (j === right.length || left[i] <= right[j]) {
			// if element is smaller push into left array
			results.push(left[i]);
			i++;
		} else {
			// if element is smaller push into right array
			results.push(right[j]);
			j++;
		}
	}
	return results;
}

module.exports = {mergeSort : mergeSort};