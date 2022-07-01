import { useContext, useEffect, useRef, useState } from 'react';

import ArrayContainer from '../../components/arrayContainer/array-container';
import { AppContext } from '../../context/app.context';
import { delay } from '../../shared/helper';
import bubbleSort from '../../sortingAlgorithms/bubbleSort';
import insertionSort from '../../sortingAlgorithms/insertionSort';
import selectionSort from '../../sortingAlgorithms/selectionSort';
import { VisualizerContainer } from './visualizer.styles';
import SortControls from '../../components/sort-controls/sort-controls';

const defaultSortArray = [8, 5, 2, 9, 6, 3, 11, 10];

const delayTime = 800;

const Visualizer = (props) => {

    // const arrayToSort = useRef(defaultSortArray);
    const [arrayToSort, setArrayToSort] = useState(defaultSortArray)
    const [highlightIndices, setHighlightIndices] = useState([-1, -1]);
    const [swapIndices, setSwapIndices] = useState([-1, -1]);
    const sortedIndices = useRef([]);
    const { selectedAlgo } = useContext(AppContext);

    const clearHighlightIndices = () => {
        setHighlightIndices([-1, -1]);
    }

    const clearSwapIndices = () => {
        setSwapIndices([-1, -1]);
    }

    const highlight = async (i, j) => {
        clearSwapIndices();
        setHighlightIndices([i, j])
        await delay(delayTime)
    }

    const swap = async (i, j, array) => {
        clearHighlightIndices();
        setSwapIndices([i, j]);
        await delay(delayTime);
        const temp = array[j];
        array[j] = array[i];
        array[i] = temp;
        setArrayToSort(array);
    }

    const markSorted = (index) => {
        sortedIndices.current = [index, ...sortedIndices.current];
    }

    const bubbleSortClickHandler = async () => {
        const sortFunc = bubbleSort(arrayToSort, highlight, swap, markSorted);
        let sortingFinished = false;
        while (!sortingFinished) {
            let nextValue = null;
            nextValue = await sortFunc.next();
            // console.log(nextValue);
            sortingFinished = nextValue.done;
        }
        if (sortingFinished) {
            setSwapIndices([-1, -1]);
            setHighlightIndices([-1, -1]);
        }
    }

    const selectionSortClickHandler = async () => {
        const sortFunc = selectionSort(arrayToSort, highlight, swap, markSorted);
        let sortingFinished = false;
        while (!sortingFinished) {
            let nextValue = await sortFunc.next();
            sortingFinished = nextValue.done
        }
        if (sortingFinished) {
            setSwapIndices([-1, -1]);
            setHighlightIndices([-1, -1]);
        }
    }

    const insertionSortClickHandler = async () => {
        const sortFunc = insertionSort(arrayToSort, highlight, swap, markSorted);
        let sortingFinished = false;
        while (!sortingFinished) {
            let nextValue = await sortFunc.next();
            sortingFinished = nextValue.done
        }
        if (sortingFinished) {
            setSwapIndices([-1, -1]);
            setHighlightIndices([-1, -1]);
        }
    }

    const sortClickHandler = () => {
        console.log('started sorting');
    }

    return (
        <VisualizerContainer>
            <SortControls sortClickHandler={sortClickHandler} />
            <ArrayContainer delayTime={delayTime} array={arrayToSort} highlightIndices={highlightIndices} swapIndices={swapIndices} sortedIndices={sortedIndices.current}  />
            <button type="button" onClick={bubbleSortClickHandler}>Bubble sort</button>
            <button type="button" onClick={selectionSortClickHandler}>Selection sort</button>
            <button type="button" onClick={insertionSortClickHandler}>Insertion sort</button>
        </VisualizerContainer>
    )
}

export default Visualizer;
