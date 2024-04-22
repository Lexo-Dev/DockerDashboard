import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { toaster } from "evergreen-ui";

import { request } from "../../utilities/request";

export const getImagesRequest = createAsyncThunk(
    "image/fetch",
    async (_, { dispatch }) => {
        dispatch(setImagesList({ loading: true, pageError: false, activeIndex: 0 }));
        try {
            const response = await request("get", "image/fetch");
            dispatch(setImagesList({ loading: false, images: response.data, pageError: false }));
        }
        catch (error) {
            console.log(error);
            dispatch(setImagesList({ loading: false, pageError: true }));
        }
    }
);

export const runImageRequest = createAsyncThunk(
    "image/run",
    async (image, { dispatch }) => {
        const imageId = image.ID;
        dispatch(runImage({ imageId, toggleState: true }));
        try {
            const response = await request("get", `image/command?image=${imageId}&command=run`);
            console.log(response);
            toaster.success(`Image "${imageId}" has been started !`, { duration: 5 });
        }
        catch (error) {
            console.log(error);
            toaster.warning(`Failed to run image "${imageId}"`, { duration: 5 });
        }
        dispatch(runImage({ imageId, toggleState: false }));
    }
);

export const deleteImageRequest = createAsyncThunk(
    "image/delete",
    async (image, { dispatch }) => {
        const imageId = image.ID;
        try {
            const response = await request("get", `image/command?image=${imageId}&command=rm`);
            console.log(response);
            dispatch(deleteImageFromList(imageId));
            toaster.success(`Image ${imageId} deleted !`, { duration: 5 });
        }
        catch (error) {
            console.log(error);
            toaster.danger(`Failed to delete image "${imageId}"`, { duration: 5 });
        }
    }
);

const imageSlice = createSlice({
    name: "image",
    initialState: {
        loading: false,
        images: [],
        activeIndex: 0,
        showModal: false,
        selectedImage: {}
    },
    reducers: {
        // Set states concerning the images list
        setImagesList(state, action) {
            return { ...state, ...action.payload };
        },
        // Set the active image selection
        setActiveIndex(state, action) {
            state.activeIndex = action.payload;
        },
        // Set image toggle "running" state
        runImage(state, action) {
            const { imageId, toggleState } = action.payload;
            for (let i = 0; i < state.images.length; i++) {
                if (state.images[i].ID === imageId) {
                    state.images[i].stateToggling = toggleState;
                    break;
                }
            }
        },
        // Open / close the image delete modal
        toggleDeleteModal(state, action) {
            const image = action.payload;
            state.showModal = !state.showModal;
            state.selectedImage = image ? image : {};
        },
        // Delete a specific image from the list
        deleteImageFromList(state, action) {
            state.images = state.images.filter((image) => {
                return image.ID !== action.payload;
            });
        },
    }
});

// Export actions created by slice
export const {
    setImagesList,
    setActiveIndex,
    runImage,
    toggleDeleteModal,
    deleteImageFromList,
} = imageSlice.actions;

export default imageSlice.reducer;
