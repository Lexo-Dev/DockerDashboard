import React from "react";

import { Pane, Spinner, Group, Button, ChevronLeftIcon, TagIcon, AddIcon } from "evergreen-ui";

import { getContainers } from "../store/actions/container.action"
import { genericGroups } from "../store/actions/groups.action"

import NewGroupForm from "./groups/new_group_form";

const SecondaryNavBar = (props) => {

    const { loading, segment, showNewGroupForm, showGroupsPage } = props;

    const containerFilters = () => {
        const options = [
            { label: loading === "all" ? <Spinner size={16} /> : "All", value: "all" },
            { label: loading === "active" ? <Spinner size={16} /> : "Active", value: "active" },
            { label: loading === "stopped" ? <Spinner size={16} /> : "Stopped", value: "stopped" }
        ];
        return (
            <Group>
                {options.map((opt) => (
                    <Button
                        width={200}
                        height={26}
                        onClick={() => { console.log(segment); getContainers(opt.value); }}
                    >
                        {opt.label}
                    </Button>
                ))}
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
                    genericGroups({
                        showGroupsPage: false,
                        showNewGroupForm: groupForm,
                    })
                    if (groupForm) {
                        getContainers("all")
                    }
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
                    genericGroups({
                        showGroupsPage: !showGroupsPage,
                        showNewGroupForm: false,
                    })
                }}
            >
                {isBack ? "Back" : "Groups"}
            </Button>
        );
    };

    const renderBody = () => {
        if (showNewGroupForm) {
            return <NewGroupForm />
        } else if (showGroupsPage) {
            return newGroupButton()
        } else {
            return containerFilters()
        }
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

// const mapStateToProps = state => {
//   return {
//     segment: state.container.segment,
//     loading: state.container.loading,
//     showGroupsPage: state.groups.showGroupsPage,
//     showNewGroupForm: state.groups.showNewGroupForm,
//   }
// }

export default SecondaryNavBar;
