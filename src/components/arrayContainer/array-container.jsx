import InfoSection from "../info-section/info-section";
import { ArrayItem, ArrayItems } from "./array-container.styles";


const ArrayContainer = ({
    array,
    highlightIndices,
    swapIndices,
    sortedIndices,
    delayTime,
    pivotIndex,
    moreThanPivotIndices,
    lessThanPivotIndices }) => {

    const source = swapIndices[0];
    const destination = swapIndices[1];

    const getBackgroundColor = (index) => {
        if (swapIndices.includes(index)) {
            return 'pink';
        }
        
        if (pivotIndex === index) {
            return 'red';
        }
        if (highlightIndices.includes(index)) {
            return 'yellow';
        }
        // if (moreThanPivotIndices.includes(index)) {
        //     return 'blue';
        // }
        // if (lessThanPivotIndices.includes(index)) {
        //     return 'orange';
        // }
        
        
        if (sortedIndices.includes(index)) {
            return '#03fc62';
        }
        return '';
    }

    const calculateTransformX = (index) => {
        const multiplyFactor = index === swapIndices[0] ? 50 : -50;
        if (swapIndices.includes(index)) {
            return (destination - source) * multiplyFactor
        }
        return null
    }

    return (
        <ArrayItems>
            {
                array.map((ele, i) => (
                    <ArrayItem key={i} delay={delayTime} translateX={calculateTransformX(i)} bgColor={getBackgroundColor(i)}>
                        {ele}
                    </ArrayItem>)
                )
            }
        </ArrayItems>
    )
}

export default ArrayContainer;
