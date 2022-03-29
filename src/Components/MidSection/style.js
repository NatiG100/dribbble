import styled from "@emotion/styled";
export const StyledMidSection = styled.div`
    width:100% ;
    padding:30px;
    padding-left:150px;
    padding-right: 150px;
    display:grid;
    grid-template-columns:1fr 1fr ;
    justify-content:space-between ;
    align-items:center ;
    h1{
        font-size:70px ;
        margin: 0px;
        color:#4a1f4a ;
        font-weight: bolder;
        line-height: 70px;
        background: -webkit-linear-gradient(0deg,#4a1f4a, #2a1c2a);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;
export const StyledMidLeft = styled.div`
    display:grid ;
    gap:5px;
    h2{
        color:#cb55ea ;
        font-size:1.8rem ;
        font-family:cursive ;
        font-weight:bold ;
        margin:0px ;
    }
`;
export const StyledActions = styled.div`
    display:flex ;
    gap:10px;
`;