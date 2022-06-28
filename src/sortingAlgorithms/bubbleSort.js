async function* bubbleSort(array, highlight, swap, markSorted) {
    let isSorted = false;
    let counter = 0;
    while (!isSorted) {
        isSorted = true;
        for (let i = 0; i < array.length - 1 - counter; i++) {
            yield await highlight(i, i + 1)
            if (array[i] > array[i + 1]) {
                yield await swap(i, i + 1, array);
                isSorted = false;
            }
        }
        markSorted(array.length - 1 - counter);
        counter++;
    }
    yield;
}



export default bubbleSort;
