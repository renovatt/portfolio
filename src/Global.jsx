import { createGlobalStyle } from "styled-components"

export const GlobalStyled = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Changa:wght@500;800&family=Press+Start+2P&family=Saira+Condensed:wght@100;500;600&family=Square+Peg&family=Sriracha&display=swap');

:root{
    --background-primary:#ffffff; 
    --background-secundary:#191919; 
    --background-third:#101010; 
    --text-white:#ffffff; 
    --text-description:#929d8d;
    --text-enphasis-1:#f9004d; 
    --text-enphasis-2:#f61b12; 
    --text-enphasis-3:#ef0a5e;
}

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Saira Condensed', sans-serif;
}


.App{
  display: flex;
  flex-direction: column;
  min-height: calc(100vh + 10rem);
  background: --text-enphasis-1;
}

::-webkit-scrollbar{
  width: 6px;
}

::-webkit-scrollbar-track{
  background-color: --text-description;
}

::-webkit-scrollbar-thumb{
  background: --background-secundary;
  border-radius: 8px;
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
      background: --background-secundary;
}

.fade{
  opacity: 0;
  transform: translateX(-20px);
  animation: fade .3s forwards;
}

@keyframes fade{
  to{
    opacity: 1;
    transform: initial;
  }
}
`