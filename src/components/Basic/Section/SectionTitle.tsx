import React from "react";

import styles from "./Section.module.scss";

interface SectionTitleInterface {
	children: React.ReactNode;
	primary?: boolean;
}

const SectionTitle: React.FunctionComponent<SectionTitleInterface> = ({
	children,
	primary = false,
}) => {
	const className = `
  ${styles["title"]} ${primary && styles["primary"]}
  `;

	return <div className={className}>{children}</div>;
};

export default SectionTitle;
