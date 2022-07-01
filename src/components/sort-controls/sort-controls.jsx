import { AVAILABLE_ALGOS } from "../../shared/constants";
import DropdownMenu from "../dropdown-menu/dropdown-menu";
import { SortButton, SortControlsContainer } from "./sort-controls.styles";

const SortControls = () => {

    

    const sortClickHandler = () => {
        console.log('sort clicked');
    }

    return (
        <SortControlsContainer>
            <DropdownMenu
                currentAlgo={null}
                algoList={AVAILABLE_ALGOS}
            />
            <SortButton onClick={sortClickHandler}>Sort !</SortButton>
        </SortControlsContainer>
    )
}

export default SortControls;
