import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Pane, Group, Button, ChevronLeftIcon, TagIcon, AddIcon } from "evergreen-ui";

import NewGroupForm from "./groups/new_group_form";

import { getContainersRequest } from "../store/reducers/container";

const SecondaryNavBar = (props) => {

    const dispatch = useDispatch();

    const { segment, loading } = useSelector(state => state.container);

    const { showNewGroupForm, showGroupsPage } = useSelector(state => state.group);

    const handleContainerFiler = () => {
        const options = ["all", "active", "stopped"];
        return (
            <Group>
                {
                    options.map((opt) => (
                        <Button
                            key={opt}
                            width={200}
                            height={26}
                            appearance={segment === opt ? "primary" : "default"}
                            isLoading={loading}
                            onClick={() => {
                                dispatch(getContainersRequest(opt));
                            }}
                        >
                            {opt}
                        </Button>
                    ))
                }
            </Group>
        );
    };

    const newGroupButton = () => {
        return (
            <Button
                marginRight={12}
                iconBefore={AddIcon}
                paddingLeft={35}
                paddingRight={30}
                height={26}
                onClick={() => {
                    const groupForm = !showNewGroupForm
                    // genericGroups({
                    //     showGroupsPage: false,
                    //     showNewGroupForm: groupForm,
                    // })
                    if (groupForm)
                        getContainersRequest("all");
                }}
            >
                Create New Group
            </Button>
        );
    };

    const groupsToggler = () => {
        const isBack = showGroupsPage || showNewGroupForm;
        return (
            <Button
                marginRight={12}
                iconBefore={isBack ? ChevronLeftIcon : TagIcon}
                paddingLeft={35}
                paddingRight={30}
                height={26}
                onClick={() => {
                    // genericGroups({
                    //     showGroupsPage: !showGroupsPage,
                    //     showNewGroupForm: false,
                    // })
                }}
            >
                {isBack ? "Back" : "Groups"}
            </Button>
        );
    };

    const renderBody = () => {
        if (showNewGroupForm)
            return <NewGroupForm />
        else if (showGroupsPage)
            return newGroupButton();
        else
            return handleContainerFiler();
    };

    return (
        <Pane
            backgroundColor="#f1f1f1"
            display="flex"
            justifyContent="center"
            padding={10}>
            {groupsToggler()}
            {renderBody()}
        </Pane>
    );
}

export default SecondaryNavBar;
