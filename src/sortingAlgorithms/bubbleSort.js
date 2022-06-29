async function* bubbleSort(array, highlight, swap, markSorted) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            yield await highlight(j, j + 1)
            if (array[j] > array[j + 1]) {
                yield await swap(j, j + 1, array);
            }
        }
        markSorted(array.length - 1 - i);
    }
}

export default bubbleSort;
