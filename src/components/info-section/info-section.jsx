import { ColorBox, InfoContainer, SingleInfo } from "./info-section.styles";

const InfoSection = ({ selectedAlgo }) => {

    return (
        <InfoContainer>
            {selectedAlgo === 'quickSort' && <>
                <SingleInfo>
                    <ColorBox bgColor="red" />
                    <span>Pivot</span>
                </SingleInfo>
                <SingleInfo>
                    <ColorBox bgColor="blue" />
                    <span>Less than pivot</span>
                </SingleInfo>
            </>}
            {selectedAlgo &&
                <>
                    <SingleInfo>
                        <ColorBox bgColor="yellow" />
                        <span>Comparing</span>
                    </SingleInfo>
                    <SingleInfo>
                        <ColorBox bgColor="pink" />
                        <span>Swapping</span>
                    </SingleInfo>
                </>
            }

            {/* <div>
            <ColorBox bgColor="#03fc62" />
            <span>Sorted</span>
        </div> */}
        </InfoContainer>
    );
}

export default InfoSection;
