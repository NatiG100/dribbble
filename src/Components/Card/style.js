import styled from "@emotion/styled";

export const StyledCard = styled.div`
    display:grid;
    grid-template-rows:max-content max-content ;
    max-width:270px ;
    padding:15px;
    border:2px solid #ededed ;
    box-shadow: 15px 15px 30px #2221;
    border-radius:10px ;
    background-color:white ;
`;
export const StyledCardImageContainer = styled.div`
    margin: 4px;
    height:170px ;
    border:2px;
    border-radius: 5px;
    background:linear-gradient(-20deg, #ecf6ff,#ffe9fb) ;
`;
export const StyledCardBody = styled.div`

`;

export const StyledBody1 = styled.div`

`;
export const StyledHeader = styled.div`
    padding-top:15px ;
    display  : flex;
    align-items: center;
    flex-direction:column ;
    justify-content: center;
    h1{
        font-size:25px ;
        margin:0px;
        color:#4a1f4a;
    }
`;
export const StyledIconAndText = styled.div`
display:flex;
align-items: center;
gap:5px;
p{
    margin:0px ;
    font-size:12px ;
}
    svg{
        height: 15px;
        *{
            fill:green;
            stroke:white;
        }
    }
`;
export const StyldedDivider = styled.div`
    border-bottom:2px solid #ededed ;
    width:100% ;
    margin-top:20px;
    margin-bottom:20px;
`;
export const StyledPlanList = styled.div`
    display: grid;
    grid-gap:10px;
`;
export const StyledPlanListItem = styled.div`
    display: grid;
    grid-template-columns:1fr 1fr ;
    p{
        color:#4a1f4a;
        font-weight:bold ;
        font-size:12px ;
        margin:0px ;
        text-align:right ;
    }
`;

export const StyledCheckbox = styled.div`
    display: flex;
    gap:5px;
    align-items:center ;
    p{
        font-weight:lighter ;
        text-align:left ;
    }
`;
export const StyledCheck = styled.div`
display: flex;
justify-content:center ;
align-items: center;
    height: 20px;
    width:20px;
    border-radius:20px ;
    background-color:#f7f6fc ;
    svg{
        height:10px ;
        *{
            stroke:#8f7bab;
            stroke-width:3px;
        }
    }
`;
export const StyledBody2 = styled.div`
    display:flex ;
    flex-direction:column ;
    justify-content: center;
    align-items:center ;
    h1{
        margin:0px ;
        color:#4a1f4a;
    }
    p{
        text-align:center;
        color:#6a3f6a ;
        font-weight: lighter;
    }
`;