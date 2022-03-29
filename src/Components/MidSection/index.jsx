import React from 'react';
import Button from '../Button';
import IconButtonWithText from '../IconButtonWithText';
import {
    StyledMidSection,
    StyledMidLeft,
    StyledActions,
} from "./style.js";
import PlayIcon from './../../../public/play.svg';

const MidSection = () => {
    return (
        <StyledMidSection>
            <h1>
                Strategic Consepts For
                Businesses.
            </h1>
            <StyledMidLeft>
                <h2>Digital Agency</h2>
                <p>Besnik helps remote teams share ideas,
                    ,save knowledge, and work together anytime,
                    any place.
                </p>
                <StyledActions>
                    <Button
                        text="Get Started Now"
                        color="primary"
                        size="large"
                    />
                    <IconButtonWithText
                        text={"Watch Now"}
                        Icon={PlayIcon}
                    />
                </StyledActions>
            </StyledMidLeft>
        </StyledMidSection>
    );
}

export default MidSection;

