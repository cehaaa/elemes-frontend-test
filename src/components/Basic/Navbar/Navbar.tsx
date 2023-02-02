import React from "react";

import Logo from "./../../../assets/logo.png";

import Button from "../Button/Button";
import Container from "../Container/Container";

import styles from "./Navbar.module.scss";

interface NavbarInterface {
	children?: React.ReactNode;
}

const Navbar: React.FunctionComponent<NavbarInterface> = () => {
	return (
		<nav className={styles["navbar__container"]}>
			<Container>
				<div className={styles["navbar"]}>
					<div>
						<img src={Logo} alt='Logo' className={styles["navbar__brand"]} />
					</div>
					<div className={`${styles["navbar__items"]} ${styles["middle"]}`}>
						<div className={styles["navbar__item"]}>Home</div>
						<div className={styles["navbar__item"]}>About</div>
						<div className={styles["navbar__item"]}>
							<div className={styles["badge"]}> hot </div>
							Promotions
						</div>
						<div className={styles["navbar__item"]}>Blogs</div>
						<div className={styles["navbar__item"]}>Contact Us</div>
					</div>
					<div className={styles["navbar__items"]}>
						<div className={styles["navbar__item"]}>Masuk</div>
						<Button>Daftar Sekarang</Button>
					</div>
				</div>
			</Container>
		</nav>
	);
};

export default Navbar;
