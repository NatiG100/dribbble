import React from 'react';
import CardContainer from '../CardContainer';
import Carousel from '../Carousel';
import { StyledBottomSection } from './style';

const BottomSection = () => {
    return (
        <StyledBottomSection>
            <Carousel />
            <CardContainer />
        </StyledBottomSection>
    );
}

export default BottomSection;