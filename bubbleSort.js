function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    do {
        swapped = false;

        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap elements
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;

                swapped = true;
            }
        }

        // Reduce n since the last element is in place
        n--;
    } while (swapped);

    return arr;
}

module.exports = bubbleSort;