import { AVAILABLE_ALGOS } from "../../shared/constants";
import DropdownMenu from "../dropdown-menu/dropdown-menu";
import { SortControlsContainer } from "./sort-controls.styles";

const SortControls = () => {
    
    return (
        <SortControlsContainer>
            {/* <DropdownMenu
                currentAlgo={AVAILABLE_ALGOS.bubbleSort}
                algoList={AVAILABLE_ALGOS}
            /> */}
        </SortControlsContainer>
    )
}

export default SortControls;
