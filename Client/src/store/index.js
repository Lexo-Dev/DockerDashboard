import { configureStore } from "@reduxjs/toolkit";

import stats from "./reducers/stats.slice";
import groups from "./reducers/groups.slice";
import container from "./reducers/container.slice";
import image from "./reducers/image.slice";
import cleanup from "./reducers/cleanup.slice";

const storeOptions = {
    reducer: {
        stats,
        groups,
        container,
        image,
        cleanup,
    },
};

const store = configureStore(storeOptions);
export default store;
