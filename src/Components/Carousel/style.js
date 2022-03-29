import styled from "@emotion/styled";


export const StyledCarousel = styled.div`
    position:relative;
    height:400px;
    width:380px;
    img{
        position:absolute;
        top:0px;
        left:0px;
        height: 100%;
        width:100%
    }
`;
export const StyledActions = styled.div`
    position: absolute;
    /* z-index: -; */
    bottom:10px ;
    right:10px;
    display: flex;
    gap:4px
`;