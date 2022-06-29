async function* insertionSort(array, highlight, swap, markSorted) {
    // for (let i = 0; i <= array.length; i++) {
    //     for (let j = i - 1; j >= 0; j--) {
    //         yield await highlight(j, j - 1)
    //         if (array[j] < array[j - 1]) {
    //             yield await swap(j, j - 1, array)
    //         } else {
    //             // breaking here, we know once we don'tencounter a big value in the left side
    //             // it means we already have that sub array sorted.
    //             break;
    //         }
    //     }
    //     markSorted(i);
    //     yield;
    // }

    for (let i = 0; i < array.length; i++) {
        let keyIndex = i;
        for (var j = i - 1; j >= 0; j--) {
          yield await highlight(keyIndex, j);
    
          if (array[j] > array[keyIndex]) {
            yield await swap(j, keyIndex, array);
            keyIndex = j;
          } else {
            yield;
            break;
          }
        }
    
        markSorted(i);
        yield;
      }
}

export default insertionSort;

