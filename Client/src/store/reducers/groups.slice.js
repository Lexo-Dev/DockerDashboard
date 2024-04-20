import { createSlice } from '@reduxjs/toolkit';

// Initial state from your schema file
const initialState = {
  groups: [],
  selectedItems: [],
  showGroupsPage: false,
  showNewGroupForm: false,
  activeIndex: 0,
  newGroupName: '',
  createFormLoading: false,
  groupListLoading: true,
  groupsRunning: [],
  groupsSwitchDisabled: []
};

const groupsSlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {
    setGroups(state, action) {
      state.groups = action.payload;
    },
    setSelectedItems(state, action) {
      state.selectedItems = action.payload;
    },
    toggleGroupsPage(state) {
      state.showGroupsPage = !state.showGroupsPage;
    },
    toggleNewGroupForm(state) {
      state.showNewGroupForm = !state.showNewGroupForm;
    },
    setActiveIndex(state, action) {
      state.activeIndex = action.payload;
    },
    setNewGroupName(state, action) {
      state.newGroupName = action.payload;
    },
    setCreateFormLoading(state, action) {
      state.createFormLoading = action.payload;
    },
    setGroupListLoading(state, action) {
      state.groupListLoading = action.payload;
    },
    setGroupsRunning(state, action) {
      state.groupsRunning = action.payload;
    },
    setGroupsSwitchDisabled(state, action) {
      state.groupsSwitchDisabled = action.payload;
    },
  }
});

// Export the reducer and actions
export const {
  setGroups, setSelectedItems, toggleGroupsPage, toggleNewGroupForm,
  setActiveIndex, setNewGroupName, setCreateFormLoading, setGroupListLoading,
  setGroupsRunning, setGroupsSwitchDisabled
} = groupsSlice.actions;
export default groupsSlice.reducer;
