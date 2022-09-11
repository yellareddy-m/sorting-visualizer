import { delay } from "../shared/helper";

async function* quickSort(array, highlight, swap, markSorted, markPivot, markLessThanPivot, markMoreThanPivot, left = 0, right = array.length - 1,) {
    if (left < right) {
        let pivotIdx = await partition(array, left, right, highlight, swap, markSorted, markPivot, markLessThanPivot, markMoreThanPivot);
        yield* await quickSort(array, highlight, swap, markSorted, markPivot, markLessThanPivot, markMoreThanPivot, left, pivotIdx - 1,);
        yield* await quickSort(array, highlight, swap, markSorted, markPivot, markLessThanPivot, markMoreThanPivot, pivotIdx + 1, right,);
    } else if (left === right) {
        yield markSorted(left);
    }

    
}

async function partition(array, start, end, highlight, swap, markSorted, markPivot, markLessThanPivot, markMoreThanPivot,) {
    let pivot = array[start];
    // pivot index is start
    let swapIdx = start;
    await delay(100);
    markPivot(start);
    await markLessThanPivot(-1, true);
    // yield await markMoreThanPivot(-1, true);
    for (let i = start + 1; i <= end; i++) {
        await highlight(start, i)
        if (pivot > array[i]) {
            // these numbers are less than pivot
            swapIdx++;
            if (swapIdx !== i) {
                await swap(swapIdx, i, array);
            }
            // if (swapIdx !== array.length - 1)
            markLessThanPivot(swapIdx);
        } else {
            // these are greater than pivot
            // yield markMoreThanPivot(i);
        }
    }
    await swap(start, swapIdx, array);
    markSorted(swapIdx);
    markPivot(-1);
    return swapIdx;
}

export default quickSort;
