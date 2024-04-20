import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Pane, Dialog } from "evergreen-ui";

import { toggleDeleteModal, deleteImageRequest } from "../store/reducers/image.slice";

import "./style/modal.css";

const DeleteModal = (props) => {

   const dispatch = useDispatch();

   const { container, image } = props;

   const { showModal } = useSelector(state => state.image);

   const handleDelete = () => {
      if (container) {
         console.log(`Deleting container '${container.ID}'...`);
         dispatch(toggleDeleteModal())
      }
      else {
         console.log(`Deleting image '${image.ID}'...`);
         dispatch(deleteImageRequest(image));
         dispatch(toggleDeleteModal())
      }
   }

   return (
      <Pane>
         <Dialog
            isShown={showModal}
            title="Delete image"
            intent="danger"
            onConfirm={() => {
               handleDelete();
            }}
            onCancel={() => {
               dispatch(toggleDeleteModal());
            }}
            confirmLabel="Delete"
         >
            {`Are you sure you want to delete this ${container ? 'container' : 'image'} ?`}
         </Dialog>
      </Pane>
   );
};

export default DeleteModal;
