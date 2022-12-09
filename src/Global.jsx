import { createGlobalStyle } from "styled-components"

export const GlobalStyled = createGlobalStyle`

:root{
    --background-primary:#191919; 
    --background-secundary:#101010; 
    --font-white:#ffffff; 
    --font-description:#929d8d;
    --text-enphasis-1:#f9004d; 
    --text-enphasis-2:#f61b12; 
    --text-enphasis-3:#ef0a5e;
}

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

::-webkit-scrollbar{
  width: 6px;
}

::-webkit-scrollbar-track{
  background-color: #444;
}

::-webkit-scrollbar-thumb{
  background: #000;
  border-radius: 8px;
}

h1, h2, h3, h4, p{
  margin: 0;
}

ul, li{
  list-style: none;
  padding: 0;
  margin: 0;
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
        background:var(--background);
        -webkit-font-smoothing:antialiased;
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