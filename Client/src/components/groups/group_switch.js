import React from "react";

import { Switch } from "evergreen-ui";

import { groupStatusUpdater, genericGroups } from "../../store/actions/groups.action";
import { toggleContainer } from "../../store/actions/container.action";

const GroupSwitch = (props) => {

    const { containers, toggleContainer, genericGroups, groupIndex } = props;

    const isRunning = () => {
        const runningContainers = containers.filter(c => c.State.Running === true)
        return containers.length === runningContainers.length
    };

    const isLoading = () => {
        const loadingContainers = containers.filter(c => !!c.stateToggling);
        return loadingContainers === 0;
    };

    const toggleAllContainers = () => {
        const command = isRunning() ? "stop" : "start";
        genericGroups({
            activeIndex: groupIndex
        });
        containers.map((container) => {
            toggleContainer(container, command, true)
        });
    };

    return (
        <Switch
            marginRight={10}
            height={22}
            marginTop={2}
            checked={isRunning()}
            disabled={isLoading()}
            onChange={() => {
                toggleAllContainers();
            }}
        />
    );
}

// const mapStateToProps = state => {
//   return {
//     activeIndex: state.groups.activeIndex,
//   }
// }

// const mapDispatchToProps = dispatch => bindActionCreators(
//   {
//     genericGroups,
//     toggleContainer,
//     groupStatusUpdater,
//   },
//   dispatch
// )

export default GroupSwitch;
