import { useState } from "react";
import { DropdownItem, DropdownListContainer, DropdownMenuButton, DropdownMenuContainer, DropdownPlaceholder } from "./dropdown-menu.styles";


const DropdownMenu = ({
    currentAlgo,
    algoList
}) => {

    const [menuOpen, setMenuOpen] = useState(false);

    const dropdownClickHandler = () => {
        setMenuOpen(prev => !prev);
    }

    const algoClickHandler = (algo) => {
        console.log(algo);
        setMenuOpen(prev => !prev);
    }

    return (
        <DropdownMenuContainer>
            <DropdownMenuButton onClick={dropdownClickHandler}>
                {currentAlgo || <DropdownPlaceholder>Select an algorithm</DropdownPlaceholder>}
                {menuOpen ? <span className="material-symbols-outlined">
                    expand_less
                </span> : <span className="material-symbols-outlined">
                    expand_more
                </span>}
            </DropdownMenuButton>
            {menuOpen ? <DropdownListContainer>
                {algoList && Object.values(algoList).map(algo => <DropdownItem onClick={algoClickHandler}>
                    {algo}
                </DropdownItem>)}
            </DropdownListContainer> : null}
        </DropdownMenuContainer>
    )
}

export default DropdownMenu;
