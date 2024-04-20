import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Pane } from "evergreen-ui";

import ImageCard from "./card";
import DeleteModal from "../delete_modal";
import Loader from "../loader";

import { getImagesRequest, toggleDeleteModal } from "../../store/reducers/image.slice";

const ImageList = () => {

    const dispatch = useDispatch();

    const { images, showModal, selectedImage, loading } = useSelector(state => state.image);

    useEffect(() => {
        dispatch(getImagesRequest());
    }, [dispatch]);

    if (loading) {
        return (
            <Loader spinner={true} />
        );
    }
    else if (images.length === 0) {
        return (<Loader />);
    }

    return (
        <Pane
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            marginTop={20}>
            {
                showModal && <DeleteModal
                    image={selectedImage}
                    toggleModal={() => {
                        dispatch(toggleDeleteModal());
                    }}
                />
            }
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
