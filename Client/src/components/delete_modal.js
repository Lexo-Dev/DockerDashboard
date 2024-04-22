import React from "react";
import { useDispatch } from "react-redux";

import { Pane, Dialog } from "evergreen-ui";

import { toggleDeleteModal as toggleImageDeleteModal, deleteImageRequest } from "../store/reducers/image";
import { toggleDeleteModal as toggleContainerDeleteModal, deleteContainerRequest } from "../store/reducers/container";

import "./style/modal.css";

const DeleteModal = (props) => {

    const dispatch = useDispatch();

    const { isShown, container, image } = props;

    const handleToggle = () => {
        if (container)
            dispatch(toggleContainerDeleteModal());
        else
            dispatch(toggleImageDeleteModal());
    };

    const handleDelete = () => {
        if (container) {
            console.log(`Deleting container "${container.shortId}"...`);
            dispatch(deleteContainerRequest(container));
        }
        else {
            console.log(`Deleting image "${image.ID}"...`);
            dispatch(deleteImageRequest(image));
        }
        handleToggle();
    }

    return (
        <Pane>
            <Dialog
                isShown={isShown}
                title={`Delete ${container ? "container" : "image"}`}
                intent="danger"
                onConfirm={() => {
                    handleDelete();
                }}
                onCancel={() => {
                    handleToggle();
                }}
                confirmLabel="Delete"
            >
                {`Are you sure you want to delete this ${container ? "container" : "image"} ?`}
            </Dialog>
        </Pane>
    );
};

export default DeleteModal;
