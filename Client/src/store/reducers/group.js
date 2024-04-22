import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { toaster } from "evergreen-ui";

import { request } from "../../utilities/request";

const groupSlice = createSlice({
    name: "group",
    initialState: {
        groups: [],
        activeIndex: 0,
        selectedItems: [],
        showGroupsPage: false,
        showNewGroupForm: false,
        newGroupName: "",
        createFormLoading: false,
        groupListLoading: true,
        groupsRunning: [],
        groupsSwitchDisabled: [],
    },
    reducers: {
        groupTest(state, action) {
            state.activeIndex = 1;
        },
    }
});

// Export actions created by slice
export const { groupTest } = groupSlice.actions;

export default groupSlice.reducer;
