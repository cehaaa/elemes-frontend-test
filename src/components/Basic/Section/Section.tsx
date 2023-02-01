import React from "react";

import styles from "./Section.module.scss";

interface SectionInterface {
	children: React.ReactNode;
}

const Section: React.FunctionComponent<SectionInterface> = ({ children }) => {
	return <section className={styles["container"]}>{children}</section>;
};

export default Section;
