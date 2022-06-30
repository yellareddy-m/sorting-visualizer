import { AVAILABLE_ALGOS } from "../../shared/constants";
import DropdownMenu from "../dropdown-menu/dropdown-menu";
import { HeaderContainer, HeaderLabel, HeaderLeftSection, SortButton } from "./header.styles";

const Header = () => {
    const sortClickHandler = () => {
        console.log('sort clicked');
    }

    return (
        <HeaderContainer>
            <HeaderLabel>Sorting Visualizer</HeaderLabel>
            <HeaderLeftSection>
                <DropdownMenu
                    currentAlgo={null}
                    algoList={AVAILABLE_ALGOS}
                />
                <SortButton onClick={sortClickHandler}>Sort !</SortButton>
            </HeaderLeftSection>
        </HeaderContainer>
    )
}

export default Header;
