import React from "react";
import { useDispatch } from "react-redux";

import { Switch } from "evergreen-ui";

import { toggleContainerRequest } from "../../store/reducers/container";

const ContainerSwitch = (props) => {

    const dispatch = useDispatch();

    const { container } = props;

    const command = container.State.Running ? "stop" : "start";
    const disabled = !!container.stateToggling;

    return (
        <Switch
            marginRight={10}
            height={18}
            marginTop={2}
            checked={container.State.Running}
            disabled={disabled}
            onChange={() => {
                dispatch(toggleContainerRequest({ container, command }));
            }}
        />
    );
};

export default ContainerSwitch;
