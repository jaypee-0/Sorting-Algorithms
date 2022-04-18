const bubbleSort = (arr) => {
    let n = arr.length;
    // Iterate array items
    for (let i = 0; i < n; i++) {
        // Swapped variable to show iterated items
        let swapped = false;
        // Loop each array item linearly
        for (let j = 0; j < n - i - 1; j++) {
            // arrange array item in order starting with 0 index
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
                swapped = true;
            }
        }
        // break if array items have been arranged 
        if(!swapped){
            break;
        }
    }
    return; 
};
module.exports = {bubbleSort : bubbleSort};