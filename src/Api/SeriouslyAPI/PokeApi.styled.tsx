import styled from "styled-components";


export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 15vw);
    gap: 2vh;
    justify-content: center;  
    align-items: center;

    @media screen and (max-width: 1200px) {
    
        grid-template-columns: repeat(3, 1fr);

    }

    @media screen and (max-width: 720px) {
    
    grid-template-columns: repeat(2, 1fr);

}
    
`

export const StyledCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: var(--secondary-color);
    padding: 1rem;  
    border-radius: 4px;  
    transition: all 0.3s ease-in-out;

    &:hover{
        -webkit-box-shadow: 0px 0px 16px -1px rgba(255, 255, 255, 1);
-moz-box-shadow: 0px 0px 16px -1px rgba(255, 255, 255, 1);
box-shadow: 0px 0px 16px -1px rgba(255, 255, 255, 1);
    }

    h3, h4  {
        color: var(--font-color);
    }

 
`