import React from "react";

import styles from "./Section.module.scss";

interface SectionHeaderInterface {
	children: React.ReactNode;
}

const SectionHeader: React.FunctionComponent<SectionHeaderInterface> = ({
	children,
}) => {
	return <div className={styles["header"]}>{children}</div>;
};

export default SectionHeader;
