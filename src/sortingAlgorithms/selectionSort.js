async function* selectionSort(array, highlight, swap, markSorted) {
    for (let i = 0; i < array.length; i++) {
        let smallestNumIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            yield await highlight(j, smallestNumIndex)
            if (array[smallestNumIndex] > array[j]) {
                smallestNumIndex = j;
            }
        }
        yield await swap(i, smallestNumIndex, array);
        markSorted(i);
    }
}

export default selectionSort;
