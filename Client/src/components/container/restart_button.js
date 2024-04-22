import React from "react";
import { Button, RefreshIcon } from "evergreen-ui";

const ContainerRestartButton = (props) => {
    const { container } = props
    const disabled = !!container.stateToggling;
    return (
        <Button
            marginRight={5}
            height={22}
            iconBefore={RefreshIcon}
            disabled={disabled}
            onClick={() => {
                // restartContainer(container, "restart");
            }}
        >
            Restart
        </Button>
    );
}

export default ContainerRestartButton;
