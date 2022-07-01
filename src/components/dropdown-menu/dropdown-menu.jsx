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
                {selectedAlgo ? <span>{algoList[selectedAlgo]}</span> :
                    <DropdownPlaceholder>Select an algorithm</DropdownPlaceholder>
                }
                <DropdownCaret>
                    {menuOpen ? 'expand_less' : 'expand_more'}
                </DropdownCaret>
            </DropdownMenuButton>
            {menuOpen ? <DropdownListContainer>
                {algoList && Object.keys(algoList).map(algoKey => <DropdownItem onClick={() => algoClickHandler(algoKey)}>
                    {algoList[algoKey]}
                </DropdownItem>)}
            </DropdownListContainer> : null}
        </DropdownMenuContainer>
    )
}

export default DropdownMenu;
