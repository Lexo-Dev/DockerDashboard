import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Heading, Pane } from "evergreen-ui";

import Loader from "../loader";
import ContainerCard from "./card";

import { getContainersRequest } from "../../store/reducers/container";

const ContainersList = (props) => {

    const dispatch = useDispatch();

    const { loading, segment, containers } = useSelector(state => state.container);

    useEffect(() => {
        dispatch(getContainersRequest(segment));
    }, [dispatch]);

    if (loading) {
        return (
            <Loader
                text={"Loading containers, please wait...."}
            />
        );
    }
    else if (containers.length === 0) {
        return (
            <Heading
                size={600}
            >
                No containers available
            </Heading>
        );
    }

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
