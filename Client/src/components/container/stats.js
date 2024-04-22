import React from "react";
import { useSelector } from "react-redux";

import { Badge } from "evergreen-ui";

const ContainerStats = (props) => {

    const { containerId } = props;

    const { stats } = useSelector(state => state.container);

    const statsData = stats.find(n => n.id === containerId);

    const getMemoryUsage = (memory) => {
        [memory] = memory.split("/");
        let memoryFormated = memory.replace(/[a-zA-Z]/g, "").trim();
        return Number(memoryFormated).toFixed(1) + "mb";
    };

    return (
        statsData ? (
            <>
                <Badge backgroundColor="#deebf7" fontWeight="bold" borderRadius={16} paddingLeft={10} fontSize={11} paddingRight={10} marginLeft={10} marginTop={3}>
                    cpu {statsData.cpu_percentage}
                </Badge>
                <Badge backgroundColor="#ebe7f8" fontWeight="bold" borderRadius={16} paddingLeft={10} fontSize={11} paddingRight={10} marginLeft={10} marginTop={3}>
                    ram {getMemoryUsage(statsData.memory_usage)}
                </Badge>
                <Badge backgroundColor="#ebe7f8" fontWeight="bold" borderRadius={16} paddingLeft={10} fontSize={11} paddingRight={10} marginLeft={10} marginTop={3}>
                    net {getMemoryUsage(statsData.network_io)}
                </Badge>
            </>
        ) : null
    );
};

export default ContainerStats;
