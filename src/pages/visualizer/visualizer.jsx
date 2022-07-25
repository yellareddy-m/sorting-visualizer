import { useContext, useEffect, useRef, useState } from 'react';

import ArrayContainer from '../../components/arrayContainer/array-container';
import { AppContext } from '../../context/app.context';
import { delay, generateRandomArray } from '../../shared/helper';
import bubbleSort from '../../sortingAlgorithms/bubbleSort';
import insertionSort from '../../sortingAlgorithms/insertionSort';
import selectionSort from '../../sortingAlgorithms/selectionSort';
import quickSort from '../../sortingAlgorithms/quickSort';
import { VisualizerContainer } from './visualizer.styles';
import SortControls from '../../components/sort-controls/sort-controls';
import InfoSection from '../../components/info-section/info-section';

const delayTime = 900;

const Visualizer = (props) => {

    const [highlightIndices, setHighlightIndices] = useState([-1, -1]);
    const [swapIndices, setSwapIndices] = useState([-1, -1]);
    const sortedIndices = useRef([]);
    const pivotIndex = useRef(-1);
    const lessThanPivotIndices = useRef([]);
    const moreThanPivotIndices = useRef([]);

    const {
        selectedAlgo,
        setSortingInProgress,
        arrayToSort,
        setArrayToSort
    } = useContext(AppContext);

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

    const markPivot = (index, clear) => {
        if (clear) {
            pivotIndex.current = -1;
        } else {
            pivotIndex.current = index;
        }
        // await delay(100);
    }

    const markLessThanPivot = (index, clear) => {
        if (clear) {
            lessThanPivotIndices.current = [];
        } else {
            lessThanPivotIndices.current = [...lessThanPivotIndices.current, index];
        }
        // await delay(100);
    }

    const markMoreThanPivot = async (index, clear) => {
        // if (clear) {
        //     moreThanPivotIndices.current = [];
        // } else {
        //     moreThanPivotIndices.current = [...moreThanPivotIndices.current, index];
        // }
        // await delay(100);
    }

    const getSortFunction = () => {
        return ({
            bubbleSort,
            insertionSort,
            selectionSort,
            quickSort
        }[selectedAlgo]);
    }

    const sortClickHandler = async () => {
        sortedIndices.current = [];
        const sortFunction = getSortFunction();
        let sortFunctionObj = null;
        if (sortFunction.name === 'quickSort') {
            sortFunctionObj = sortFunction(arrayToSort, highlight, swap, markSorted, markPivot, markLessThanPivot, markMoreThanPivot);
        } else {
            sortFunctionObj = sortFunction(arrayToSort, highlight, swap, markSorted);
        }
        let sortingFinished = false;
        setSortingInProgress(true);
        while (!sortingFinished) {
            let nextValue = await sortFunctionObj.next();
            sortingFinished = nextValue.done
        }
        if (sortingFinished) {
            clearColors();
            setSortingInProgress(false);
        }
    }

    const clearColors = () => {
        setSwapIndices([-1, -1]);
        setHighlightIndices([-1, -1]);
        markPivot(-1);
        lessThanPivotIndices.current = [];
    }

    const generateNewArray = () => {
        sortedIndices.current = [];
        clearColors();
        setArrayToSort(generateRandomArray());
    }

    return (
        <VisualizerContainer>
            <SortControls
                sortClickHandler={sortClickHandler}
                generateNewArray={generateNewArray}
            />
            <ArrayContainer
                delayTime={delayTime}
                array={arrayToSort}
                highlightIndices={highlightIndices}
                swapIndices={swapIndices}
                sortedIndices={sortedIndices.current}
                pivotIndex={pivotIndex.current}
                moreThanPivotIndices={moreThanPivotIndices.current}
                lessThanPivotIndices={lessThanPivotIndices.current}
            />
            <InfoSection selectedAlgo={selectedAlgo} />
        </VisualizerContainer>
    )
}

export default Visualizer;
