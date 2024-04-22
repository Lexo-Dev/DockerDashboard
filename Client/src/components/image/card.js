import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Pane, Heading, Badge, Button, ApplicationIcon, TrashIcon } from "evergreen-ui";

import { runImageRequest, toggleDeleteModal, setActiveIndex } from "../../store/reducers/image";

import "../../components/container/style/card.css";

const ImageCard = (props) => {

    const dispatch = useDispatch();

    const { index, image } = props;

    const { activeIndex } = useSelector(state => state.image);

    const active = activeIndex === index;

    const buttonMarginRight = 5;
    const buttonHeight = 22;

    return (
        <Pane
            display="flex"
            flexDirection="column"
            flexGrow={1}
            padding={12}
            borderRadius={6}
            border="default"
            className={active ? "element-card card-active" : "element-card"}
            onMouseEnter={() => {
                dispatch(setActiveIndex(index));
            }}
        >
            <Pane display="flex">
                <Pane display="flex" justifyContent="center" alignItems="center">
                    <Heading size={400}>{`${image.Repository !== "<none>" ? image.Repository : "No Repository"}: ${image.Tag !== "<none>" ? image.Tag : "No Tag"}`}</Heading>
                </Pane>
                <Badge backgroundColor="#e7e9ef" fontWeight="bold" borderRadius={16} paddingLeft={10} fontSize={11} paddingRight={10} marginLeft={10} marginTop={3}>{image.ID}</Badge>
                <Badge backgroundColor="#d4eee3" fontWeight="bold" borderRadius={16} paddingLeft={10} fontSize={11} paddingRight={10} marginLeft={10} marginTop={3}>{image.Size}</Badge>
                <Badge backgroundColor="#deebf7" fontWeight="bold" borderRadius={16} paddingLeft={10} fontSize={11} paddingRight={10} marginLeft={10} marginTop={3}>{image.CreatedSince}</Badge>
            </Pane>
            {active &&
                <Pane display="flex" marginTop={12}>
                    <Button
                        marginRight={buttonMarginRight}
                        height={buttonHeight}
                        iconBefore={ApplicationIcon}
                        isLoading={image.stateToggling}
                        onClick={() => {
                            dispatch(runImageRequest(image));
                        }}
                    >
                        Run
                    </Button>
                    <Button
                        marginRight={buttonMarginRight}
                        height={buttonHeight}
                        iconBefore={TrashIcon}
                        onClick={() => {
                            dispatch(toggleDeleteModal(image));
                        }}
                    >
                        Delete
                    </Button>
                </Pane>
            }
        </Pane>
    )
}

export default ImageCard;
