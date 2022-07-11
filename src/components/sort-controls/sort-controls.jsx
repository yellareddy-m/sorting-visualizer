import { useContext } from "react";

import { AppContext } from "../../context/app.context";
import { AVAILABLE_ALGOS } from "../../shared/constants";
import DropdownMenu from "../dropdown-menu/dropdown-menu";
import { Button, SortControlsContainer } from "./sort-controls.styles";

const SortControls = ({ sortClickHandler, generateNewArray }) => {

    const { sortingInProgress, selectedAlgo } = useContext(AppContext);

    return (
        <SortControlsContainer>
            <Button disabled={sortingInProgress} onClick={generateNewArray}>Generate new array</Button>
            <DropdownMenu
                currentAlgo={null}
                algoList={AVAILABLE_ALGOS}
            />
            <Button disabled={sortingInProgress || !selectedAlgo} onClick={sortClickHandler}>Sort !</Button>
        </SortControlsContainer>
    )
}

export default SortControls;
