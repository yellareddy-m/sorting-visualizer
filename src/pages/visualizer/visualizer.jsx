import { useRef, useState } from 'react';

import ArrayContainer from '../../components/arrayContainer/array-container';
import { delay } from '../../helpers';
import bubbleSort from '../../sortingAlgorithms/bubbleSort';
import { VisualizerContainer } from './visualizer.styles';

const defaultSortArray = [8, 5, 2, 9, 6, 3];

const Visualizer = (props) => {

    const arrayToSort = useRef(defaultSortArray);
    const [highlightIndices, setHighlightIndices] = useState([-1, -1]);
    const [swapIndices, setSwapIndices] = useState([-1, -1]);
    const sortedIndices = useRef([]);

    const clearHighlightIndices = () => {
        setHighlightIndices([-1, -1]);
    }

    const clearSwapIndices = () => {
        setSwapIndices([-1, -1]);
    }

    const highlight = async (i, j) => {
        // console.log('highlight', i, j);
        clearSwapIndices();
        setHighlightIndices([i, j])
        await delay(900)
    }

    const swap = async (i, j, array) => {
        clearHighlightIndices();
        setSwapIndices([i, j]);
        await delay(900)

        const temp = array[j];
        array[j] = array[i];
        array[i] = temp;


        // console.log('swap');
    }

    const markSorted = (index) => {
        sortedIndices.current = [index, ...sortedIndices.current];
    }

    const sortClickHandler = async () => {
        const sortFunc = bubbleSort(arrayToSort.current, highlight, swap, markSorted);
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

    return (
        <VisualizerContainer>
            <ArrayContainer array={arrayToSort.current} highlightIndices={highlightIndices} swapIndices={swapIndices} sortedIndices={sortedIndices.current} />
            <button type="button" onClick={sortClickHandler}>Sort !</button>
        </VisualizerContainer>
    )
}

export default Visualizer;
