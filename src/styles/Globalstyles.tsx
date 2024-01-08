import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    body,
    h1,
    h2,
    h3,
    p,
    ul,
    ol,
    li,
    figure,
    blockquote,
    dl,
    dd {
        margin: 0;
        padding: 0;
    }

    :root {
        /* colors */
        --primary-color: #EEF5FF;
        --secondary-color: #B4D4FF;
        --tertiary-color: #86B6F6;
        --font-color: #176B87
        /* fonts */
        --font-primary: 'Helvetica Neue', sans-serif;
        --font-secondary: 'Arial', sans-serif;
        --font-size-small: 14px;
        --font-size-medium: 16px;
        --font-size-large: 18px;
    }

    body {
        font-family: var(--font-primary);
        font-size: var(--font-size-medium);
        color: var(--font-color);
        background-color: var(--primary-color);
        
    }
`

export default GlobalStyle