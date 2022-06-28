import { ArrayItem, ArrayItems } from "./array-container.styles";


const ArrayContainer = ({
    array,
    highlightIndices,
    swapIndices,
    sortedIndices }) => {

    const getBackgroundColor = (index) => {
        if (highlightIndices.includes(index)) {
            return 'yellow';
        }
        if (swapIndices.includes(index)) {
            return 'red';
        }
        if (sortedIndices.includes(index)) {
            return 'lightgreen';
        }
        return '';
    }

    return (
        <ArrayItems>
            {
                array.map((ele, i) => (
                    <ArrayItem key={i} bgColor={getBackgroundColor(i)}>
                        {ele}
                    </ArrayItem>)
                )
            }
        </ArrayItems>
    )
}

export default ArrayContainer;
