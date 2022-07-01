import { GithubIcon, HeaderContainer, HeaderLabel, HeaderLeftSection } from "./header.styles";


const Header = () => {


    return (
        <HeaderContainer>
            <HeaderLabel>Sorting Visualizer</HeaderLabel>
            <HeaderLeftSection>
                <a title="Go to github repo" rel="noreferrer" href="https://github.com/yellareddy-m/sorting-visualizer" target="_blank">
                    <GithubIcon />
                </a>
            </HeaderLeftSection>
        </HeaderContainer>
    )
}

export default Header;
