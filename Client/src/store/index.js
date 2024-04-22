import { configureStore } from "@reduxjs/toolkit";

import stat from "./reducers/stat";
import group from "./reducers/group";
import container from "./reducers/container";
import image from "./reducers/image";
import cleanup from "./reducers/cleanup";

const storeOptions = {
    reducer: {
        stat,
        group,
        container,
        image,
        cleanup,
    },
};

const store = configureStore(storeOptions);
export default store;
