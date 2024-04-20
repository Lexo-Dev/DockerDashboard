import React from "react";

import { Pane, Heading, Spinner } from "evergreen-ui";

import "./container/style/card.css";

const Loader = (props) => {

    const { spinner } = props;

    return (
        <Pane
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            marginTop={20}>
            <Heading>
                {spinner ? "Loading images. Please wait...." : "No image on this machine"}
            </Heading>
            {spinner && <Spinner marginX="auto" marginY={120} />}
        </Pane>
    );
};

export default Loader;
