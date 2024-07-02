import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { Pane, Icon, Button, ShieldIcon, LayersIcon, ProjectsIcon } from "evergreen-ui";

const NavBar = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const [active, setActive] = useState("containers");

    useEffect(() => {
        let path = location.pathname === "/" ? "containers" : location.pathname.replace("/", "");
        setActive(path);
    }, [location]);

    const buttonHeight = 48;
    const buttonWidth = 250;

    const handlePageChange = (destination) => {
        setActive(destination);
        // replace?: boolean;
        // state?: any;
        // preventScrollReset?: boolean;
        // relative?: RelativeRoutingType;
        // unstable_flushSync?: boolean;
        // unstable_viewTransition?: boolean;
        const navigateOptions = {
            replace: true,
        };
        navigate(destination, navigateOptions);
    };

    return (
        <Pane display="flex" justifyContent="center" padding={26} background="#f9f9fc">
            <Button
                height={buttonHeight}
                width={buttonWidth}
                justifyContent="center"
                alignItems="center"
                fontSize={14}
                borderTopRightRadius={0}
                borderBottomRightRadius={0}
                appearance={active === "containers" ? "primary" : "default"}
                component={Link}
                to="/"
                onClick={() => {
                    handlePageChange("containers");
                }}
            >
                <Icon icon={LayersIcon} marginRight={5} size={14} /> Container
            </Button>
            <Button
                height={buttonHeight}
                width={buttonWidth}
                justifyContent="center"
                alignItems="center"
                fontSize={14}
                borderTopLeftRadius={0}
                borderBottomLeftRadius={0}
                borderTopRightRadius={0}
                appearance={active === "images" ? "primary" : "default"}
                borderBottomRightRadius={0}
                component={Link}
                to="/images"
                onClick={() => {
                    handlePageChange("images");
                }}
            >
                <Icon icon={ProjectsIcon} marginRight={5} size={14} /> Image
            </Button>
            <Button
                height={buttonHeight}
                width={buttonWidth}
                justifyContent="center"
                alignItems="center"
                fontSize={14}
                borderTopLeftRadius={0}
                borderBottomLeftRadius={0}
                appearance={active === "cleanup" ? "primary" : "default"}
                component={Link}
                to="/cleanup"
                onClick={() => {
                    handlePageChange("cleanup")
                }}
            >
                <Icon icon={ShieldIcon} marginRight={5} size={14} /> Clean-up
            </Button>
        </Pane>
    );
};

export default NavBar;
