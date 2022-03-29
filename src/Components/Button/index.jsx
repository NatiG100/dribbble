import React from 'react';
import { StyledButton } from './style';

const Button = ({ text, color, size }) => {
    return (
        <StyledButton color={color} size={size}>
            <p>{text}</p>
        </StyledButton>
    );
}

export default Button;