import styled from '@emotion/styled';

export const StyledButton = styled.div`
    ${({ size, color }) => `
        background-color:${color === "primary" ? "#7751f6" : color === "gradient" ? "none" : "#ffffff"};
        padding:${size === "large" ? "20px" : "10px"};
        ${color === "gradient" && " background:linear-gradient(20deg,#ff865d,#fa6ed1)"};
    `}
    p{
        ${({ size, color }) => `
        color:${color === "primary" ? "#ffffff" : color === "gradient" ? "#fff" : "#7751f6"};
        
        `}
        font-size : 13px;
        margin:0px;
        font-weight:bold ;
        font-smooth:initial;
        letter-spacing: 1px;
    }
    width: max-content;
    border-radius: 10px;
    box-shadow:10px 10px 15px #2222;
`;
