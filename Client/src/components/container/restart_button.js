import React from "react";
import { Button, RefreshIcon } from "evergreen-ui";

import { restartContainer } from "../../store/actions/container.action";

const ContainerRestartButton = (props) => {
    const { container } = this.props
    const disabled = !!container.stateToggling;
    return (
        <Button
            marginRight={5}
            height={22}
            iconBefore={RefreshIcon}
            disabled={disabled}
            onClick={() => {
                restartContainer(container, "restart");
            }}
        >
            Restart
        </Button>
    );
}

// const mapDispatchToProps = dispatch => bindActionCreators(
//   {
//     restartContainer
//   },
//   dispatch
// )

export default ContainerRestartButton;
