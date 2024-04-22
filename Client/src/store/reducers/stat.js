import { createSlice } from '@reduxjs/toolkit';

// Initial state from your schema file
const initialState = {
  containerStats: [],
  isLive: false,
};

const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {
    setContainerStats(state, action) {
      state.containerStats = action.payload;
    },
    toggleLiveStatus(state) {
      state.isLive = !state.isLive;
    },
  }
});

// Export the reducer and actions
export const { setContainerStats, toggleLiveStatus } = statsSlice.actions;
export default statsSlice.reducer;
