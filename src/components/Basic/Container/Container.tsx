import React from "react";

import styles from "./Container.module.scss";

interface ContainerInterface {
	children: React.ReactNode;
}

const Container: React.FunctionComponent<ContainerInterface> = ({
	children,
}) => {
	return <div className={`${styles["container"]} `}>{children}</div>;
};

export default Container;
