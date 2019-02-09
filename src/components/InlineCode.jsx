import React from "react";
import {Code} from "spectacle";

const InlineCode = (props) => {
    const {children, ...rest} = props;

    return <Code style={{fontSize : "0.9em"}} {...rest}>{children}</Code>;
}

export default InlineCode;