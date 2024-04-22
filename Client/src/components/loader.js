import React from "react";

import { Pane, Heading, Spinner } from "evergreen-ui";

import "./container/style/card.css";

const Loader = (props) => {

    const { text } = props;

    return (
        <Pane
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            marginTop={20}>
            <Heading>
                {text}
            </Heading>
            <Spinner marginX="auto" marginY={120} />
        </Pane>
    );
};

export default Loader;
