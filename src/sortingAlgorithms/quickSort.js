import { delay } from "../shared/helper";

async function* quickSort(array, highlight, swap, markSorted, markPivot, markLessThanPivot, markMoreThanPivot, left = 0, right = array.length - 1,) {
    if (left < right) {
        let pivotIdx = yield* await partition(array, left, right);
        yield* await quickSort(array, highlight, swap, markSorted, markPivot, markLessThanPivot, markMoreThanPivot, left, pivotIdx - 1,);
        yield* await quickSort(array, highlight, swap, markSorted, markPivot, markLessThanPivot, markMoreThanPivot, pivotIdx + 1, right,);
    } else if (left === right) {
        yield markSorted(left);
    }

    async function* partition(array, start, end) {
        let pivot = array[start];
        // pivot index is start
        let swapIdx = start;
        delay(100);
        markPivot(start);
        yield await markLessThanPivot(-1, true);
        // yield await markMoreThanPivot(-1, true);
        for (let i = start + 1; i <= end; i++) {
            yield await highlight(start, i)
            if (pivot > array[i]) {
                // these numbers are less than pivot
                swapIdx++;
                if (swapIdx !== i) {
                    yield await swap(swapIdx, i, array);
                }
                // if (swapIdx !== array.length - 1)
                yield markLessThanPivot(swapIdx);
            } else {
                // these are greater than pivot
                // yield markMoreThanPivot(i);
            }
        }
        yield await swap(start, swapIdx, array);
        markSorted(swapIdx);
        markPivot(-1);
        return swapIdx;
    }
}

export default quickSort;
