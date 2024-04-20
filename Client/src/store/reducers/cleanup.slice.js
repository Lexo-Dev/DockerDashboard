import { createSlice } from '@reduxjs/toolkit';

// Initial state from your schema file
const initialState = {
  segmentOptions: [
    { label: 'Prune Images', value: 'image', message: 'This action will allow you to clean up unused images. It cleans up dangling images. A dangling image is one that is not tagged and is not referenced by any container.' },
    { label: 'Prune Containers', value: 'container', message: 'When you stop a container, it is not automatically removed unless you started it with the --rm flag. A stopped container’s writable layers still take up disk space.' },
    { label: 'Prune Volumes', value: 'volume', message: 'Volumes can be used by one or more containers, and take up space on the Docker host. Volumes are never removed automatically, because to do so could destroy data.' },
    { label: 'Prune System', value: 'system', message: 'Remove all unused containers, networks, images (both dangling and unreferenced), and optionally, volumes.' }
  ],
  selectedSegment: { label: 'Prune Images', value: 'image', message: 'This action will allow you to clean up unused images. It cleans up dangling images. A dangling image is one that is not tagged and is not referenced by any container.' },
  responseData: {},
  isShowingSideSheet: false,
  apiCallStarted: false
};

const cleanupSlice = createSlice({
  name: 'cleanup',
  initialState,
  reducers: {
    selectSegment(state, action) {
      state.selectedSegment = action.payload;
    },
    setResponseData(state, action) {
      state.responseData = action.payload;
    },
    toggleSideSheet(state) {
      state.isShowingSideSheet = !state.isShowingSideSheet;
    },
    startApiCall(state) {
      state.apiCallStarted = true;
    },
    endApiCall(state) {
      state.apiCallStarted = false;
    },
  }
});

// Export the reducer and actions
export const { selectSegment, setResponseData, toggleSideSheet, startApiCall, endApiCall } = cleanupSlice.actions;
export default cleanupSlice.reducer;
