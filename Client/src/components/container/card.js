import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Pane, Button, Heading, Badge, ApplicationIcon, TrashIcon } from "evergreen-ui";

import ContainerSwitch from "./switch";
import ContainerSelector from "./selector";
import ContainerRestart from "./restart_button";
import ContainerStats from "./stats";
import CreatedAt from "../created_at";

import {
    setActiveIndex,
    getContainerLogsRequest,
    toggleDeleteModal,
} from "../../store/reducers/container";

import "./style/card.css";

const ContainerCard = (props) => {

    const dispatch = useDispatch();

    const { activeIndex } = useSelector(state => state.container);

    const { index, container } = props;

    // TO DO !!!
    const { showNewGroupForm, noHoverStyle, showStatsInNewLine } = false;

    // Is current container selected
    const active = activeIndex === index;
    // Some setup
    let cardName = "element-card";
    if (!noHoverStyle && active)
        cardName += " card-active";
    const showColumn = !!showStatsInNewLine ? "column" : "row";

    /** Render the container actions buttons */
    const renderActions = () => {
        return (
            <Pane display="flex" marginTop={12} marginLeft={46}>
                <ContainerRestart
                    container={container}
                />
                <Button marginRight={5}
                    height={22}
                    iconBefore={ApplicationIcon}
                    onClick={() => {
                        dispatch(getContainerLogsRequest(container));
                    }}
                >
                    Logs
                </Button>
                <Button marginRight={5}
                    height={22}
                    iconBefore={TrashIcon}
                    disabled={container.State.Running}
                    onClick={() => {
                        dispatch(toggleDeleteModal(container));
                    }}
                >
                    Delete
                </Button>
            </Pane>
        );
    };

    /** Render container statistics */
    const renderStats = () => {
        const marginLeft = !!showStatsInNewLine ? 35 : 0;
        const marginTop = !!showStatsInNewLine ? 5 : 0;
        return (
            <Pane display="flex" marginLeft={marginLeft} marginTop={marginTop}>
                <ContainerStats
                    containerId={container.shortId}
                />
            </Pane>
        );
    };

    return (
        <Pane
            display="flex"
            flexDirection="column"
            flexGrow={1}
            padding={12}
            borderRadius={6}
            border="default"
            className={cardName}
            onMouseEnter={() => {
                dispatch(setActiveIndex(index));
            }}
        >
            <Pane display="flex" flexDirection={showColumn}>
                <Pane display="flex" alignItems="flex-start">
                    {
                        showNewGroupForm ?
                            <ContainerSelector container={container} /> :
                            <ContainerSwitch container={container} />
                    }
                    <Heading size={400} fontWeight="bold" color="#234361">
                        {container.Name}
                    </Heading>
                    <Badge
                        backgroundColor="#e7e9ef"
                        fontWeight="bold"
                        borderRadius={16}
                        paddingLeft={10}
                        fontSize={11}
                        paddingRight={10}
                        marginLeft={10}
                        marginTop={3}
                    >
                        {container.shortId}
                    </Badge>
                    <CreatedAt time={container.Created} />
                </Pane>
                {
                    !showNewGroupForm && container.State.Running && renderStats()
                }
            </Pane>
            {
                !showNewGroupForm && active && renderActions()
            }
        </Pane>
    );
}

export default ContainerCard;
