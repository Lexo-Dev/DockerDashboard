import React from "react";

import { Checkbox } from "evergreen-ui";

import { groupItemSelector } from "../../store/actions/groups.action";

const ContainerSelector = (props) => {

    const { container, selectedItems } = props;

    const shortId = container.shortId;
    const checked = selectedItems.includes(shortId);

    return (
        <Checkbox
            marginRight={15}
            marginTop={0}
            marginBottom={0}
            checked={checked}
            onChange={() => {
                groupItemSelector(shortId)
            }}
        />
    );
};

export default ContainerSelector;
