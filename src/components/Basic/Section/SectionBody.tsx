import React from "react";

import styles from "./Section.module.scss";

interface SectionBodyInterface {
	children: React.ReactNode;
}

const SectionBody: React.FunctionComponent<SectionBodyInterface> = ({
	children,
}) => {
	return <div className={styles["body"]}>{children}</div>;
};

export default SectionBody;
