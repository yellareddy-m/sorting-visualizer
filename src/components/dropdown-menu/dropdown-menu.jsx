import { useContext } from "react";
import { AppContext } from "../../context/app.context";

import { DropdownCaret, DropdownItem, DropdownListContainer, DropdownMenuButton, DropdownMenuContainer, DropdownPlaceholder } from "./dropdown-menu.styles";


const DropdownMenu = ({ algoList }) => {

    const { menuOpen, toggleMenuOpen, selectedAlgo, setSelectedAlgo } = useContext(AppContext);


    const algoClickHandler = (algo) => {
        setSelectedAlgo(algo);
        toggleMenuOpen();
    }

    return (
        <DropdownMenuContainer>
            <DropdownMenuButton onClick={toggleMenuOpen}>
                {selectedAlgo ? <span>{selectedAlgo}</span> :
                    <DropdownPlaceholder>Select an algorithm</DropdownPlaceholder>
                }
                <DropdownCaret>
                    {menuOpen ? 'expand_less' : 'expand_more'}
                </DropdownCaret>
            </DropdownMenuButton>
            {menuOpen ? <DropdownListContainer>
                {algoList && Object.values(algoList).map(algo => <DropdownItem onClick={() => algoClickHandler(algo)}>
                    {algo}
                </DropdownItem>)}
            </DropdownListContainer> : null}
        </DropdownMenuContainer>
    )
}

export default DropdownMenu;
