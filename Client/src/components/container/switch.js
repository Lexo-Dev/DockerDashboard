import React from "react";

import { Switch } from "evergreen-ui";

import { toggleContainer } from "../../store/actions/container.action";

const ContainerSwitch = (props) => {

    const { container, toggleContainer } = props;

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
                toggleContainer(container, command)
            }}
        />
    );
};

// const mapDispatchToProps = dispatch => bindActionCreators(
//   {
//     toggleContainer
//   },
//   dispatch
// )

export default ContainerSwitch;
