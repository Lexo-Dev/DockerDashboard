import React from "react";

import { Button, Dialog, Heading, Badge, TrashIcon } from "evergreen-ui";

import { deleteGroup } from "../../store/actions/groups.action";

const GroupDeleteButton = (props) => {

    const { groupName, groupId } = props;

    const state = {
        deleteModal: false
    };

    const renderDeleteModal = () => {
        if (state.deleteModal) {
            return (
                <Dialog
                    isShown={this.state.deleteModal}
                    title="Confirmation"
                    hasHeader={false}
                    intent="danger"
                    onConfirm={() => {
                        deleteGroup(groupId);
                        state.deleteModal = false;
                    }}
                    onCloseComplete={() => { state.deleteModal = false }}
                    confirmLabel="Confirm"
                >
                    <Heading size={500} marginTop="default" marginBottom="default">
                        Are you sure you want to delete <Badge color="neutral">{groupName}</Badge> container group?
                    </Heading>
                </Dialog>
            );
        }
        else
            return null;
    };

    return (
        <>
            <Button marginRight={5}
                height={22}
                iconBefore={TrashIcon}
                onClick={() => {
                    this.setState({
                        deleteModal: !this.state.deleteModal
                    })
                }}
            >
                Delete Group
            </Button>
            {renderDeleteModal()}
        </>
    );
}

export default GroupDeleteButton;
