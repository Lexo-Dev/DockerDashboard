import React, { useEffect } from "react"

import { Pane, Heading } from "evergreen-ui"

import GroupCard from "./group_card"

import { getContainers } from "../../store/actions/container.action"
import { getGroups } from "../../store/actions/groups.action"

const GroupsList = (props) => {

    const { groups, groupListLoading, containerListLoading } = props;

    useEffect(() => {
        getGroups()
        getContainers("all")
    });

    const renderGroupsList = () => {
        if (groupListLoading && containerListLoading) {
            return (
                <Heading size={600}>Please wait</Heading>
            );
        }
        if (groups.length <= 0) {
            return (
                <Heading size={600}>No groups found, please create a new one.</Heading>
            );
        }
        return groups.map((group, index) => {
            return <GroupCard
                key={index}
                index={index}
                group={group}
            />
        });
    };

    return (
        <Pane
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            marginTop={20}>
            {renderGroupsList()}
        </Pane>
    );
}

export default GroupsList;
