import React from 'react';
import {
    StyledIcon,
    StyledIconButtonWithText
} from './style';

const IconButtonWithText = ({ text, Icon }) => {
    return (
        <StyledIconButtonWithText >
            <StyledIcon>
                <Icon />
            </StyledIcon>
            <p>{text}</p>
        </StyledIconButtonWithText>
    );
}

export default IconButtonWithText;