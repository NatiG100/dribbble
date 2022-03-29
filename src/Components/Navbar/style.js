import styled from "@emotion/styled";

export const StyledNavbar = styled.div`
    h1{
        color:#4a1f4a;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif ;
    }
    display: flex;
    justify-content:space-between ;
    align-items: center;
    padding: 20px;
    margin-left: 20px;
    margin-right:20px;
`;
export const StyledNavigation = styled.div`
    display: flex;
    width:max-content;
    gap:25px;
    justify-content: center;
    align-items: center;
    a{
        color:#8f7bab;
        :active{
            color:#4a1f4a;
        }
    }
`;
export const StyledActions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap:10px;
`;