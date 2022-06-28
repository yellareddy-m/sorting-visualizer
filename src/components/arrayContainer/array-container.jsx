import { ArrayItem, ArrayItems } from "./array-container.styles";


const ArrayContainer = ({
    array,
    highlightIndices,
    swapIndices,
    sortedIndices }) => {

    const source = swapIndices[0];
    const destination = swapIndices[1];

    const getBackgroundColor = (index) => {
        if (highlightIndices.includes(index)) {
            return 'yellow';
        }
        if (swapIndices.includes(index)) {
            return 'pink';
        }
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
                    <ArrayItem key={i} translateX={calculateTransformX(i)} bgColor={getBackgroundColor(i)}>
                        {ele}
                    </ArrayItem>)
                )
            }
        </ArrayItems>
    )
}

export default ArrayContainer;
