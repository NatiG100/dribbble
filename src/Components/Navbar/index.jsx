import React from 'react';
import Button from '../Button';
import {
    StyledNavbar,
    StyledNavigation,
    StyledActions,
} from './style';

const Navbar = () => {
    return (
        <StyledNavbar>
            <h1>Besnik</h1>
            <StyledNavigation>
                <a href="#">About Us</a>
                <a href="#">Services</a>
                <a href="#">Blog</a>
            </StyledNavigation>
            <StyledActions>
                <Button
                    color="primary"
                    text="Contact Now"
                />
                <Button
                    color="white"
                    text="Sign In"
                />
            </StyledActions>
        </StyledNavbar>
    );
}

export default Navbar;