import React from 'react';
import {
    StyledCardContainer,
    StyledCards,
} from './style';

import { Card, CardBody1, Body2 } from './../Card';
const CardContainer = () => {
    return (
        <StyledCardContainer>
            <StyledCards>
                <Card>
                    <CardBody1 />
                </Card>
                <Card>
                    <Body2 />
                </Card>
            </StyledCards>
        </StyledCardContainer>
    );
}

export default CardContainer;