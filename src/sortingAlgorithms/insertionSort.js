async function* insertionSort(array, highlight, swap, markSorted) {
    for (let i = 0; i < array.length; i++) {
        let j = i;
        yield await highlight(j, j-1)
        while(j >=0 && array[j] < array[j - 1]) {
          yield await swap(j, j - 1, array);
          j -= 1;
        }
        markSorted(i);
        yield;
    }
}

export default insertionSort;
