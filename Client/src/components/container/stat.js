import React from "react";

import { Badge } from "evergreen-ui";

const ContainerStat = (props) => {

  const { stats, containerID } = props;

  const getMemoryUsage = (memory) => {
    [memory] = memory.split("/");
    let memoryFormated = memory.replace(/[a-zA-Z]/g, "").trim();
    return Number(memoryFormated).toFixed(1) + "mb";
  }

  const renderBadges = () => {
    const data = stats.find(n => n.id === containerID);
    return (
      data ? <>
        <Badge backgroundColor="#deebf7" fontWeight="bold" borderRadius={16} paddingLeft={10} fontSize={11} paddingRight={10} marginLeft={10} marginTop={3}>
          cpu {data.cpu_percentage}
        </Badge>
        <Badge backgroundColor="#ebe7f8" fontWeight="bold" borderRadius={16} paddingLeft={10} fontSize={11} paddingRight={10} marginLeft={10} marginTop={3}>
          ram {getMemoryUsage(data.memory_usage)}
        </Badge>
        <Badge backgroundColor="#ebe7f8" fontWeight="bold" borderRadius={16} paddingLeft={10} fontSize={11} paddingRight={10} marginLeft={10} marginTop={3}>
          net {getMemoryUsage(data.network_io)}
        </Badge>
      </> : null
    );
  };

  return renderBadges();
};

// const mapStateToProps = state => {
//   return {
//     stats: state.stats.containerStats
//   }
// }

export default ContainerStat;
