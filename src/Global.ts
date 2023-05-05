import { createGlobalStyle } from "styled-components"

export const GlobalStyled = createGlobalStyle`

:root{
    --background-primary:#ffffff; 
    --background-secundary:#191919; 
    --background-third:#101010; 
    --background-shadow:#00000041; 
    --text-white:#ffffff; 
    --text-description:#929d8d;
    --text-enphasis-1:#f9004d; 
    --text-enphasis-2:#ef0a5e;
    --text-enphasis-3:#f61b12;
    --max-width: 1100px
}

*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Saira Condensed', sans-serif;
}


.App{
  display: flex;
  flex-direction: column;
  min-height: calc(100vh + 10rem);
  background: var(--background-secundary);
  font-family: 'Saira Condensed', sans-serif;
}

::-webkit-scrollbar{
  width: 6px;
}

::-webkit-scrollbar-track{
  background-color: var(--text-description);
}

::-webkit-scrollbar-thumb{
  background: var(--background-secundary);
}

h1, h2, h3, h4, p{
  margin: 0;
  padding: 0;
}

ul, li{
  margin: 0;
  padding: 0;
  list-style: none;
}

a{
  text-decoration: none;
}

html{

    @media(max-width:1080px){
        font-size:93.75%;
    }

    @media(max-width:720px){
        font-size:87.5%;
    }
}

body{
      background: background-secundary;
}
`