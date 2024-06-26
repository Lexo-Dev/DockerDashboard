import React from "react";

import { Pane, Button, Heading, Paragraph, TrashIcon } from "evergreen-ui";

import { pruneCommand } from "../../store/actions/cleanup.action"

import "../container/style/card.css";

const CleanupInfo = (props) => {

    const { pruneCommand, apiCallStarted } = props;

    const selectedSegment = {
        value: ""
    };

    return (
        <Pane
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            marginTop={20}
        >
            <Pane
                display="flex"
                flexDirection="column"
                flexGrow={1}
                padding={12}
                borderRadius={6}
                border="default"
                className={"element-card card-active"}
            >
                <Pane display="flex">
                    <Pane display="flex" >
                        <Heading>{`Prune Docker ${selectedSegment.value}s`}</Heading>
                    </Pane>
                </Pane>
                <Pane display="flex" marginTop={12}>
                    <Paragraph>{selectedSegment.message} </Paragraph>
                </Pane>
                <Pane display="flex" marginTop={12} >
                    <Button marginRight={5}
                        height={22}
                        iconBefore={TrashIcon}
                        intent="danger"
                        isLoading={apiCallStarted}
                        onClick={() => {
                            pruneCommand(selectedSegment.value)
                        }}
                    >
                        {`Proceed to Prune ${selectedSegment.value}`}
                    </Button>
                </Pane>
            </Pane>
        </Pane>
    );
};

export default CleanupInfo;
