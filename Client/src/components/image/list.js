import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Heading, Pane } from "evergreen-ui";

import ImageCard from "./card";
import DeleteModal from "../delete_modal";
import Loader from "../loader";

import { getImagesRequest } from "../../store/reducers/image";

const ImageList = () => {

    const dispatch = useDispatch();

    const { loading, images, showModal, selectedImage } = useSelector(state => state.image);

    useEffect(() => {
        dispatch(getImagesRequest());
    }, [dispatch]);

    if (loading) {
        return (
            <Loader
                text={"Loading images, please wait...."}
            />
        );
    }
    else if (images.length === 0) {
        return (
            <Heading
                size={600}
            >
                No images available
            </Heading>
        );
    }

    return (
        <Pane
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            marginTop={20}>
            <DeleteModal
                image={selectedImage}
                isShown={showModal}
            />
            {
                images.map((image, index) =>
                    <ImageCard
                        key={index}
                        index={index}
                        image={image}
                    />
                )
            }
        </Pane>
    );
};

export default ImageList;
