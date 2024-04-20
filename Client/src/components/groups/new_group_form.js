import React from "react"

import { Pane, Button, TextInput } from "evergreen-ui"

import { genericGroups, createGroup } from "../../store/actions/groups.action"

const NewGroupForm = (props) => {

    const { selectedItems, newGroupName, createFormLoading } = props;

    const state = {
        toggleLink: false,
    };

    const handleSubmit = () => {
        createGroup({ newGroupName, selectedItems })
    };

    return (
        <Pane
            display="flex"
            justifyContent="center"
            alignItems="center">
            <Pane>
                <TextInput
                    name="text-input-name"
                    placeholder="New Group Name"
                    height={26}
                    display="flex"
                    flexGrow={1}
                    onChange={e => {
                        genericGroups({
                            newGroupName: e.target.value
                        })
                    }}
                    value={newGroupName}
                />
                {
                    state.toggleLink && <TextInput
                        name="text-input-name"
                        placeholder="URL of the application"
                        height={26}
                        marginTop={6}
                        display="flex"
                        flexGrow={1}
                        onChange={e => {
                            genericGroups({
                                newGroupName: e.target.value
                            })
                        }}
                        value={newGroupName}
                    />
                }
            </Pane>
            <Pane display="flex" style={{ height: "100%" }}>
                {/*<IconButton
icon="link"
height={26}
marginLeft={6}
onClick={e => {
e.preventDefault()
setState({
toggleLink: !state.toggleLink
})
}}
/>
*/}
                <Button
                    height={26}
                    appearance="primary"
                    marginLeft={6}
                    intent="success"
                    disabled={(selectedItems.length <= 0) || (newGroupName === "")}
                    isLoading={createFormLoading}
                    onClick={(e) => {
                        e.preventDefault()
                        handleSubmit()
                    }}
                >
                    Create Group
                </Button>
            </Pane>
        </Pane>
    );
}

// const mapStateToProps = state => {
//   return {
//     newGroupName: state.groups.newGroupName,
//     selectedItems: state.groups.selectedItems,
//     createFormLoading: state.groups.createFormLoading,
//   }
// }

// const mapDispatchToProps = dispatch => bindActionCreators(
//   {
//     createGroup,
//     genericGroups,
//   },
//   dispatch
// )

export default NewGroupForm;
