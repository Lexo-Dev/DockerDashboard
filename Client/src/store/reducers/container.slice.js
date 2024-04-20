import { createSlice } from '@reduxjs/toolkit';

// Initial state from your schema file
const initialState = {
  containers: [],
  loading: false,
  containerListLoading: true,
  pageError: false,
  segment: 'active',
  activeIndex: 0,
  isShowingSideSheet: false,
  logData: {},
  showModal: false,
  selectedContainer: {}
};

const containerSlice = createSlice({
  name: 'container',
  initialState,
  reducers: {
    setContainers(state, action) {
      state.containers = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setContainerListLoading(state, action) {
      state.containerListLoading = action.payload;
    },
    setPageError(state, action) {
      state.pageError = action.payload;
    },
    setSegment(state, action) {
      state.segment = action.payload;
    },
    setActiveIndex(state, action) {
      state.activeIndex = action.payload;
    },
    toggleSideSheet(state) {
      state.isShowingSideSheet = !state.isShowingSideSheet;
    },
    setLogData(state, action) {
      state.logData = action.payload;
    },
    toggleModal(state) {
      state.showModal = !state.showModal;
    },
    setSelectedContainer(state, action) {
      state.selectedContainer = action.payload;
    },
  }
});

// Export the reducer and actions
export const {
  setContainers, setLoading, setContainerListLoading, setPageError,
  setSegment, setActiveIndex, toggleSideSheet, setLogData,
  toggleModal, setSelectedContainer
} = containerSlice.actions;

export default containerSlice.reducer;
