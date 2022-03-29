import React from 'react';
import Button from '../Button';
import {
    StyledCarousel,
    StyledActions
} from "./style";

const Carousel = () => {
    return (
        <StyledCarousel>
            <img src="/image.jpg" />
            <StyledActions>
                <Button
                    text={"<"}
                    color="white"
                />
                <Button
                    text={">"}
                    color="gradient"
                />
            </StyledActions>
        </StyledCarousel>
    );
}

export default Carousel; 