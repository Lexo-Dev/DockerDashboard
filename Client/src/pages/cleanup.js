import React from "react";

import CleanupNavBar from "../components/cleanup/cleanup_sub_nav";
import CleanupInfo from "../components/cleanup/cleanup_info";
import LogsSideView from "../components/logs_side_view";

const CleanupPage = (props) => {
    const { showLogs, logs } = props;
    return (
        <>
            <LogsSideView
                isShown={showLogs}
                title="Prune result"
                logs={logs}
            />
            <CleanupNavBar />
            <CleanupInfo />
        </>
    );
}

export default CleanupPage;
