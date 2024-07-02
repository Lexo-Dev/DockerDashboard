import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Pane, Group, Button, ChevronLeftIcon, TagIcon, AddIcon } from "evergreen-ui";

import NewGroupForm from "./groups/new_group_form";

import { getContainersRequest } from "../store/reducers/container";

const SecondaryNavBar = (props) => {

    const dispatch = useDispatch();

    const { segment, loading } = useSelector(state => state.container);

    const { showNewGroupForm, showGroupsPage } = useSelector(state => state.group);

    const buttonHeight = 26;
    const buttonWidth = 100;

    const renderContainerFilters = () => {
        const options = ["all", "active", "stopped"];
        return (
            <Group>
                {
                    options.map((opt) => (
                        <Button
                            key={opt}
                            height={buttonHeight}
                            width={buttonWidth}
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

    const renderNewGroupButton = () => {
        return (
            <Button
                height={buttonHeight}
                width={buttonWidth}
                marginRight={12}
                iconBefore={AddIcon}
                paddingLeft={35}
                paddingRight={30}
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

    const renderGroupButton = () => {
        const isBack = showGroupsPage || showNewGroupForm;
        return (
            <Button
                height={buttonHeight}
                width={buttonWidth}
                marginRight={12}
                iconBefore={isBack ? ChevronLeftIcon : TagIcon}
                paddingLeft={35}
                paddingRight={30}
                onClick={() => {
                    // genericGroups({
                    //     showGroupsPage: !showGroupsPage,
                    //     showNewGroupForm: false,
                    // })
                }}
            >
                {
                    isBack ? "Back" : "Groups"
                }
            </Button>
        );
    };

    const renderBody = () => {
        if (showNewGroupForm)
            return <NewGroupForm />
        else if (showGroupsPage)
            return renderNewGroupButton();
        else
            return renderContainerFilters();
    };

    return (
        <Pane
            display="flex"
            justifyContent="center"
            padding={10}
            backgroundColor="#f1f1f1"
        >
            {
                renderGroupButton()
            }
            {
                renderBody()
            }
        </Pane>
    );
}

export default SecondaryNavBar;
