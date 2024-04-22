import { configureStore } from "@reduxjs/toolkit";

import container from "./reducers/container";
import group from "./reducers/group";
import image from "./reducers/image";
import cleanup from "./reducers/cleanup";

const storeOptions = {
    reducer: {
        container,
        group,
        image,
        cleanup,
    },
};

const store = configureStore(storeOptions);
export default store;
