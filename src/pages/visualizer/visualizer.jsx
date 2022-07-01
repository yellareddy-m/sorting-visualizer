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

    const [arrayToSort, setArrayToSort] = useState(defaultSortArray)
    const [highlightIndices, setHighlightIndices] = useState([-1, -1]);
    const [swapIndices, setSwapIndices] = useState([-1, -1]);
    const sortedIndices = useRef([]);
    const { selectedAlgo, setSortingInProgress } = useContext(AppContext);

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

    const getSortFunction = () => {
        return ({
            bubbleSort,
            insertionSort,
            selectionSort
        }[selectedAlgo]);
    }

    const sortClickHandler = async () => {
        const sortFunction = getSortFunction()
        const sortFunctionObj = sortFunction(arrayToSort, highlight, swap, markSorted);
        let sortingFinished = false;
        setSortingInProgress(true);
        while (!sortingFinished) {
            let nextValue = await sortFunctionObj.next();
            sortingFinished = nextValue.done
        }
        if (sortingFinished) {
            setSwapIndices([-1, -1]);
            setHighlightIndices([-1, -1]);
            setSortingInProgress(false);
        }
    }

    return (
        <VisualizerContainer>
            <SortControls sortClickHandler={sortClickHandler} />
            <ArrayContainer delayTime={delayTime} array={arrayToSort} highlightIndices={highlightIndices} swapIndices={swapIndices} sortedIndices={sortedIndices.current} />
        </VisualizerContainer>
    )
}

export default Visualizer;
