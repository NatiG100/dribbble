import React, { useState } from 'react';
import Button from '../Button';
import Check from './../../../public/check.svg';

import {
    StyledCard,
    StyledCardImageContainer,
    StyledCardBody,

    StyledBody1,
    StyledHeader,
    StyledIconAndText,
    StyldedDivider,
    StyledPlanList,
    StyledPlanListItem,

    StyledCheckbox,
    StyledCheck,
    StyledBody2

} from './style';

import CheckIcon from './../../../public/check-fill-icon.svg';

export const Card = ({ children }) => {
    return (
        <StyledCard>
            <StyledCardImageContainer>
                <p>placeholder</p>
            </StyledCardImageContainer>
            <StyledCardBody>
                {children}
            </StyledCardBody>
        </StyledCard>
    );
}
export const CardBody1 = () => {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    return (
        <StyledBody1>
            <StyledHeader>
                <h1>TrustedBrand</h1>
                <StyledIconAndText>
                    <CheckIcon />
                    <p>$50k+Earned this month</p>
                </StyledIconAndText>
            </StyledHeader>
            <StyldedDivider />
            <StyledPlanList>
                <StyledPlanListItem>
                    <CheckBox text="App UI Design" checked={checked1} setChecked={setChecked1} />
                    <p>20k+Screen</p>
                </StyledPlanListItem>
                <StyledPlanListItem>
                    <CheckBox text="Web UI Design" checked={checked2} setChecked={setChecked2} />
                    <p>234+Pages</p>
                </StyledPlanListItem>
                <StyledPlanListItem>
                    <CheckBox text="Illustration" checked={checked3} setChecked={setChecked3} />
                    <p>1200+Illustrations</p>
                </StyledPlanListItem>
            </StyledPlanList>
        </StyledBody1>
    );
}

const CheckBox = ({ checked, setChecked, text }) => {
    return (
        <StyledCheckbox>
            <StyledCheck onClick={() => {
                setChecked((state) => (!state))
            }}>
                {checked && <Check />}
            </StyledCheck>
            <p>{text}</p>
        </StyledCheckbox>
    );
};

export const Body2 = () => {
    return (
        <StyledBody2>
            <h1>Trusted Brand</h1>
            <p>Site helps remote team share ideas, save knowledge,
                and work together anytime, any place.
            </p>
            <Button text="Contact Now" color={"gradient"} size="small" />
        </StyledBody2>
    );
}