import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};

    *{
        box-sizing:border-box;
        padding:0;
        margin:0;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    a{
        text-decoration:none;
        color:inherit;
    }
    
    html,body{
        overflow-x:hidden;
        background-color:black;
        color:white

    }

    input{
        all:unset;
    }
`;

export default globalStyles;
