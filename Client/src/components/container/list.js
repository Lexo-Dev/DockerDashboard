import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Pane } from "evergreen-ui";

import ContainerCard from "./card";

import { getContainersRequest } from "../../store/reducers/container";

const ContainersList = (props) => {

    const dispatch = useDispatch();

    const { segment, containers } = useSelector(state => state.container);

    useEffect(() => {
        dispatch(getContainersRequest(segment));
    }, [dispatch]);

    return (
        <Pane
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            marginTop={20}
        >
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

export default ContainersList;
