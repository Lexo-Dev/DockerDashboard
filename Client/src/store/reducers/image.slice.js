import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { toaster } from 'evergreen-ui';

import { request } from '../../utilities/request';

export const getImagesRequest = createAsyncThunk(
    'images/fetch',
    async (_, { dispatch }) => {
        dispatch(setGenericImage({ loading: true, pageError: false, activeIndex: 0 }));
        try {
            const response = await request('get', 'image/fetch');
            dispatch(setGenericImage({ loading: false, images: response.data, pageError: false }));
        } catch (error) {
            dispatch(setGenericImage({ loading: false, pageError: true }));
        }
    }
);

export const runImageRequest = createAsyncThunk(
    'image/run',
    async (image, { dispatch }) => {
        dispatch(runImage({ imageId: image.ID, data: { stateToggling: true } }));
        try {
            const res = await request('get', `image/command?image=${image.ID}&command=run`);
            dispatch(runImage({ imageId: image.ID, data: { stateToggling: false } }));
            toaster.success(`Image ${image.ID} has been started running.`, { duration: 5 });
        } catch (ex) {
            dispatch(runImage({ imageId: image.ID, data: { stateToggling: false } }));
            toaster.warning(`There is a problem running image ${image.ID}`, { duration: 5 });
        }
    }
);

export const deleteImageRequest = createAsyncThunk(
    'image/delete',
    async (image, { dispatch }) => {
        try {
            const imageId = image.ID;
            const res = await request('get', `image/command?image=${imageId}&command=rm`);
            console.log(res);
            dispatch(deleteImageFromList(imageId));
            toaster.success(`Image ${imageId} deleted !`, { duration: 5 });
        }
        catch (error) {
            console.log(error);
            toaster.danger(`Failed to delete image '${image.ID}'.`, { duration: 5 });
        }
    }
);

const imageSlice = createSlice({
    name: 'image',
    initialState: {
        images: [],
        loading: false,
        pageError: false,
        activeIndex: 0,
        isShowingSideSheet: false,
        logData: {},
        showModal: false,
        selectedImage: {}
    },
    reducers: {
        genericImage(state, action) {
            return { ...state, ...action.payload };
        },
        runImage(state, action) {
            return { ...state, ...action.payload.data };
        },
        // Delete a specific image from the list
        deleteImageFromList(state, action) {
            state.images = state.images.filter(image => image.ID !== action.payload);
        },
        // Set the active image selection
        setActiveIndex(state, action) {
            state.activeIndex = action.payload;
        },
        // Open / close the image delete modal
        toggleDeleteModal(state, action) {
            const image = action.payload;
            state.showModal = !state.showModal;
            state.selectedImage = image ? image : {};
        },
    }
});

// Export actions created by slice
export const {
    genericImage: setGenericImage,
    runImage,
    deleteImageFromList,
    setActiveIndex,
    toggleDeleteModal,
} = imageSlice.actions;

export default imageSlice.reducer;
