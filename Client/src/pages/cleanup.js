import React from "react";

import CleanupNavBar from "../components/cleanup/cleanup_sub_nav";
import CleanupInfo from "../components/cleanup/cleanup_info";
import LogSideSheet from "../components/log_side_sheet";

import { resetLogSideSheet } from "../store/actions/cleanup.action";

const CleanupPage = (props) => {
    const { resetLogSideSheet, isShowingSideSheet, logData } = props
    return (
        <>
            {/* <LogSideSheet resetLogSideSheet={resetLogSideSheet} isShowingSideSheet={isShowingSideSheet} logData={logData} /> */}
            <CleanupNavBar />
            <CleanupInfo />
        </>
    );
}

// const mapStateToProps = state => {
//   return {
//     isShowingSideSheet: state.cleanup.isShowingSideSheet,
//     logData: state.cleanup.responseData
//   }
// }

export default CleanupPage;
