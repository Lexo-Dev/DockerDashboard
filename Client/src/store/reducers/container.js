import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { toaster } from "evergreen-ui";

import { request } from "../../utilities/request";

export const getContainersRequest = createAsyncThunk(
    "container/fetch",
    async (filter, { dispatch }) => {
        // Initial page state
        dispatch(setContainersList({
            loading: true,
            segment: filter,
            activeIndex: 0,
        }));
        try {
            const response = await request("get", `container/fetch?status=${filter}`);
            console.log(response);
            dispatch(setContainersList({
                loading: false,
                containers: response.data,
            }));
        }
        catch (error) {
            console.log(error);
            dispatch(setContainersList({
                loading: false,
            }));
        }
    }
);

export const toggleContainerRequest = createAsyncThunk(
    "container/toggle",
    async ({ container, command }, { dispatch }) => {
        const { shortId, Name, State } = container;
        dispatch(updateContainer({
            containerId: shortId,
            data: { stateToggling: true },
        }));
        try {
            const response = await request("get", `container/command?container=${shortId}&command=${command}`);
            console.log(response);
            toaster.success(
                `Container ${Name} has been ${command === "start" ? "started" : "stopped"} !`,
                { duration: 5 }
            );
        }
        catch (error) {
            console.log(error);
            toaster.warning(`Failed to ${command} container ${Name}`, { duration: 5 });
        }
        const newContainerState = {
            Running: command === "start" ? true : false,
        };
        console.log(State);
        dispatch(updateContainer({
            containerId: container.shortId,
            data: {
                State: {
                    ...State,
                    ...newContainerState,
                },
                stateToggling: false,
            },
        }))
    }
);

export const deleteContainerRequest = createAsyncThunk(
    "container/delete",
    async (container, { dispatch }) => {
        const containerId = container.shortId;
        try {
            const response = await request("get", `container/command?container=${containerId}&command=rm`);
            console.log(response);
            dispatch(deleteContainerFromList(containerId));
            toaster.success(`Container ${containerId} deleted !`, { duration: 5 });
        }
        catch (error) {
            console.log(error);
            toaster.danger(`Failed to delete container "${containerId}"`, { duration: 5 });
        }
    }
);

export const getContainerLogsRequest = createAsyncThunk(
    "container/logs",
    async (container, { dispatch }) => {
        const containerId = container.shortId;
        console.log(containerId);
        try {
            const response = await request("get", `container/logs?container=${containerId}`);
            console.log(response);
            dispatch(toggleContainerLogs(response.data));
        }
        catch (error) {
            console.log(error);
        }
    }
);

export const getContainersStatsRequest = createAsyncThunk(
    "container/stats",
    async (_, { dispatch }) => {
        try {
            const response = await request("get", "container/stats");
            console.log(response);
            dispatch(setStatistics(response.data));
        }
        catch (error) {
            console.log(error);
        }
    }
);

const containerSlice = createSlice({
    name: "container",
    initialState: {
        loading: true,
        segment: "active",
        containers: [],
        activeIndex: 0,
        showLogs: false,
        logs: {},
        showModal: false,
        selectedContainer: {},
        stats: [],
    },
    reducers: {
        // Set states concerning the containers list
        setContainersList(state, action) {
            return { ...state, ...action.payload };
        },
        // Set the active container selection
        setActiveIndex(state, action) {
            state.activeIndex = action.payload;
        },
        // Update a container data within the list
        updateContainer(state, action) {
            const { containerId, data } = action.payload;
            for (let i = 0; i < state.containers.length; i++) {
                if (state.containers[i].shortId === containerId) {
                    state.containers[i] = {
                        ...state.containers[i],
                        ...data,
                    };
                    break;
                }
            }
        },
        // Open / close the container delete modal
        toggleDeleteModal(state, action) {
            const container = action.payload;
            state.showModal = !state.showModal;
            state.selectedContainer = container ? container : {};
        },
        // Remove a container from the list
        deleteContainerFromList(state, action) {
            state.containers = state.containers.filter((container) => {
                return container.shortId !== action.payload;
            });
        },
        // Open / close the container logs view with updated logs data
        toggleContainerLogs(state, action) {
            state.showLogs = !state.showLogs;
            state.logs = state.showLogs ? action.payload : {};
        },
        // Update all running containers statistics
        setStatistics(state, action) {
            state.stats = action.payload;
        },
    },
});

// Export actions created by slice
export const {
    setContainersList,
    setActiveIndex,
    updateContainer,
    toggleDeleteModal,
    deleteContainerFromList,
    toggleContainerLogs,
    setStatistics,

} = containerSlice.actions;

export default containerSlice.reducer;
