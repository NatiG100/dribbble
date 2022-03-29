import styled from '@emotion/styled';

export const StyledIconButtonWithText = styled.div`
    display: grid;
    grid-template-columns:max-content max-content ;
    gap:15px;
    p{
        color:#6a3f6a ;
        font-weight: bold;
        
    }
`;
export const StyledIcon = styled.div`
    background-color:white ;
    box-shadow:15px 15px 25px #2222 ;
    display: grid;
    padding:15px;
    border-radius: 25px;
    height: 50px;
    width:50px;
    justify-content:center ;
    align-items:center ;
    display:flex ;

    svg{
        height:15px;
        *{
            fill:#7751f6;
        }
    }
`;