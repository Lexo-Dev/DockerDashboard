import React from "react";

import { Pane, Group, Button } from "evergreen-ui";

import { setSelectedCleanUpSegment } from "../../store/actions/cleanup.action";

const CleanupNavBar = (props) => {

    const { selectedSegment } = props;

    const segmentOptions = [];

    return (
        <Pane
            backgroundColor="#f1f1f1"
            display="flex"
            justifyContent="center"
            padding={10}
        >
            <Group>
                {segmentOptions.map(({ value, label }) => (
                    <Button
                        width={600}
                        height={26}
                        onClick={() => {
                            setSelectedCleanUpSegment(value);
                        }}
                    >
                        {selectedSegment.value}
                    </Button>
                ))}
            </Group>
        </Pane>
    );
};

// const mapStateToProps = state => {
//   return {
//     segmentOptions: state.cleanup.segmentOptions,
//     selectedSegment: state.cleanup.selectedSegment
//   }
// }

// const mapDispatchToProps = dispatch => bindActionCreators(
//   {
//     setSelectedCleanUpSegment
//   },
//   dispatch
// )

export default CleanupNavBar;
