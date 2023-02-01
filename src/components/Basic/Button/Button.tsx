import React from "react";

import styles from "./Button.module.scss";

interface ButtonInterface {
	children: React.ReactNode;
	variant?: string;
}

const Button: React.FunctionComponent<ButtonInterface> = ({
	children,
	variant = "primary",
}) => {
	const className = `${styles["button"]} ${styles[variant]}`;

	return (
		<button type='submit' className={className}>
			{children}
		</button>
	);
};

export default Button;
