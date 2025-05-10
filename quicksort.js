function quickSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case
    }

    const pivot = arr[arr.length - 1]; // Choosing the last element as pivot
    const left = [];
    const right = [];

    // Partitioning
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Recursive sort and concatenate
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage
const nums = [10, 7, 8, 9, 1, 5];
console.log("Sorted array:", quickSort(nums));
