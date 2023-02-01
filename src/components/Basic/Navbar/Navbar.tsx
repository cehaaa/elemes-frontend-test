import React from "react";

import Logo from "./../../../assets/logo.png";

import Button from "../Button/Button";

import styles from "./Navbar.module.scss";

interface NavbarInterface {
	children?: React.ReactNode;
}

const Navbar: React.FunctionComponent<NavbarInterface> = () => {
	return (
		<nav className={styles["navbar"]}>
			<div>
				<img src={Logo} alt='Logo' />
			</div>
			<div className={styles["navbar__items"]}>
				<div className={styles["navbar__item"]}>Home</div>
				<div className={styles["navbar__item"]}>About</div>
				<div className={styles["navbar__item"]}>
					<div className={styles["badge"]}>hot</div>
					Promotions
				</div>
				<div className={styles["navbar__item"]}>Blogs</div>
				<div className={styles["navbar__item"]}>Contact Us</div>
			</div>
			<div className={styles["navbar__items"]}>
				<div>Masuk</div>
				<Button>Daftar Sekarang</Button>
			</div>
		</nav>
	);
};

export default Navbar;
