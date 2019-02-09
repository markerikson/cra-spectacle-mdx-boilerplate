import React from "react";

import styled, { css } from 'react-emotion';

const CodeEditorWidth = styled("div")`
  div.react-live > div > div:nth-of-type(2) {
      min-width: ${props => props.minWidth || 400}px;
  }
`;

export default CodeEditorWidth;