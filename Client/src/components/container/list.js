import React, { useEffect } from "react";

import { Pane } from "evergreen-ui";

import ContainerCard from "./card";

import { getContainers, toggleDeleteModal, resetLogSideSheet } from "../../store/actions/container.action";

const ContainersList = (props) => {

    const { segment } = props;

    const containers = [];

    useEffect(() => {
        getContainers(segment);
    });

    return (
        <Pane
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            marginTop={20}>

            {
                containers.map((container, index) =>
                    <ContainerCard
                        key={index}
                        index={index}
                        container={container}
                    />
                )
            }
        </Pane>
    );
}

// const mapStateToProps = state => {
//   return {
//     segment: state.container.segment,
//     containers: state.container.containers,
//   }
// }

// const mapDispatchToProps = dispatch => bindActionCreators(
//   {
//     getContainers
//   },
//   dispatch
// )

export default ContainersList;
