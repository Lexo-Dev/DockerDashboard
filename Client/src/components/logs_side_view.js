import React from "react";
import { useDispatch } from "react-redux";

import { Pane, Pre, SideSheet, Heading } from "evergreen-ui";

import { toggleContainerLogs } from "../store/reducers/container";

const LogsSideView = (props) => {

    const dispatch = useDispatch();

    const { isShown, title, logs } = props;

    return (
        <SideSheet
            width={1000}
            isShown={isShown}
            onCloseComplete={() => {
                dispatch(toggleContainerLogs());
            }}
            containerProps={{
                display: "flex",
                flex: "1",
                flexDirection: "column",
            }}
        >
            <Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor="white">
                {
                    title && <Pane
                        padding={16}
                    >
                        <Heading size={600}>
                            {title}
                        </Heading>
                    </Pane>
                }
            </Pane>
            <Pane flex="1" overflowY="scroll" background="tint1" padding={16}>
                <Pane>
                    {
                        logs && <Pre
                            marginTop={0}
                        >
                            {logs}
                        </Pre>
                    }
                </Pane>
            </Pane>
        </SideSheet>
    );
}

export default LogsSideView;
