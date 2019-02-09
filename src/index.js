import React from "react";
import ReactDOM from "react-dom";
import { Deck } from 'spectacle';
import styled from 'react-emotion';

import "normalize.css"

import "typeface-montserrat";

import "./monokai.css";
import "./prism";




const OverridePresentationStyles = styled("div")`
    .spectacle-slide {
        margin : 0 !important;
    }
    
    .spectacle-content {
        padding : 20px;
    }
    
    code {
        color: black;
        font-family: monospace;
        background-color: rgba(0, 0, 0, 0.15);
        font-size: 1.1em;
        margin: 0.25rem auto;
        padding: 0px 5px;
        border-radius: 3px;
    }
    
    li ul li {
        font-size: 2.25rem;
    }
`


const render = () => {
    const newTheme = require("./presentation/theme/index").default;
    const newSlides = require("./presentation/slideContents").default;

    ReactDOM.render(
        <OverridePresentationStyles>
            <Deck
                theme={newTheme}
                progress="number"
                contentWidth={1600}
                contentHeight={1000}
                showFullscreenControl={false}
            >
                {newSlides.map((S, i) => {
                    return <S  key={`slide-${i}`} />;
                })}
            </Deck>
        </OverridePresentationStyles>,
        document.getElementById("root"),
    );
}

render()

if (module.hot) {
  module.hot.accept(() => {
   render()
  });
}
