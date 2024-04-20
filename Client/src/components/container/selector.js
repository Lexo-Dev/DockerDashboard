import React from "react";

import { Checkbox } from "evergreen-ui";

import { groupItemSelector } from "../../store/actions/groups.action";

const ContainerSelector = (props) => {

  const { selectedItems } = props;

  const shortId = this.props.container.shortId;
  const checked = selectedItems.includes(shortId);

  return (
    <Checkbox
      marginRight={15}
      marginTop={0}
      marginBottom={0}
      checked={checked}
      onChange={() => {
        groupItemSelector(shortId)
      }}
    />
  );
};

// const mapStateToProps = state => {
//   return {
//     selectedItems: state.groups.selectedItems,
//   }
// }

// const mapDispatchToProps = dispatch => bindActionCreators(
//   {
//     groupItemSelector
//   },
//   dispatch
// )

export default ContainerSelector;
