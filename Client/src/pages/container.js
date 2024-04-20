import React, { useEffect } from "react";

import SecondaryNavBar from "../components/secondary_nav_bar";
import ContainerLists from "../components/container/list";
import GroupsList from "../components/groups/group_list";
import LogSideSheet from "../components/log_side_sheet";
import Modal from "../components/delete_modal";

import store from "../store"

import { containerStatsProcess } from "../store/actions/stats.action";
import { toggleDeleteModal, resetLogSideSheet } from "../store/actions/container.action";

const ContainerPage = (props) => {

    const { showGroupsPage, showModal, selectedContainer, isShowingSideSheet, logData } = props

    useEffect(() => {
        store.dispatch(containerStatsProcess());
    });

    return (
        <>
            <SecondaryNavBar />
            {/* <LogSideSheet resetLogSideSheet={resetLogSideSheet} isShowingSideSheet={isShowingSideSheet} logData={logData} /> */}
            {showModal && <Modal container={selectedContainer} toggleModal={toggleDeleteModal} />}
            <div className="subnavaware-view">
                {
                    showGroupsPage ? <GroupsList /> : <ContainerLists />
                }
            </div>
        </>
    );
}

export default ContainerPage;
