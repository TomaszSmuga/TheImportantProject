import styled from "styled-components";

export const BlurryBackground = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    height: 100%;
    background-color: white;
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.2); /* Semi-transparent white overlay */
    backdrop-filter: blur(3px); 
`

export const StyledModal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
    width: auto;
    height: 60%;
    width: 60%;
    background: var(--secondary-color);
`
