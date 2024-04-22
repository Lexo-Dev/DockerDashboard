import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import SecondaryNavBar from "../components/secondary_nav_bar";
import ContainerLists from "../components/container/list";
import GroupsList from "../components/groups/group_list";
import DeleteModal from "../components/delete_modal";
import LogsSideView from "../components/logs_side_view";

import { getContainersStatsRequest } from "../store/reducers/container";

const ContainerPage = () => {

    const dispatch = useDispatch();

    const { showModal, selectedContainer, showLogs, logs } = useSelector(state => state.container);

    const showGroupsPage = false;

    useEffect(() => {
        dispatch(getContainersStatsRequest());
        // setInterval(() => dispatch(getContainersStatsRequest()), 2000);
    }, [dispatch]);

    return (
        <>
            <SecondaryNavBar />
            <LogsSideView
                isShown={showLogs}
                title="Container logs"
                logs={logs}
            />
            <DeleteModal
                container={selectedContainer}
                isShown={showModal}
            />
            <div className="subnavaware-view">
                {
                    showGroupsPage ? <GroupsList /> : <ContainerLists />
                }
            </div>
        </>
    );
}

export default ContainerPage;
