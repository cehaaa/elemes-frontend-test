import React from "react";

import styles from "./Footer.module.scss";

import Container from "./../Container/Container";

import Logo from "./../../../assets/logo.png";

import MailIcon from "../icons/MailIcon/MailIcon";
import PhoneIcon from "../icons/PhoneIcon/PhoneIcon";
import IgIcon from "../icons/IgIcon/IgIcon";

const Footer: React.FunctionComponent = () => {
	return (
		<footer className={styles["footer__container"]}>
			<Container>
				<div className={styles["footer"]}>
					<div className={styles["footer__brand"]}>
						<img src={Logo} className={styles["logo"]} />
						<div>
							Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan
							Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta
							12950
						</div>
						<div className={styles["company__socials"]}>
							<div className={styles["social"]}>
								<MailIcon color='#8bac3e' />
							</div>
							<div className={styles["social"]}>
								<PhoneIcon color='#8bac3e' />
							</div>
							<div className={styles["social"]}>
								<IgIcon color='#8bac3e' />
							</div>
						</div>
					</div>
					<div className={styles["footer__items"]}>
						<div>
							<div className={styles["footer__item__title"]}>Categories</div>

							<div className={styles["footer__item"]}>Cupcake</div>
							<div className={styles["footer__item"]}>Pizza</div>
							<div className={styles["footer__item"]}>Kebab</div>
							<div className={styles["footer__item"]}>Salmon</div>
							<div className={styles["footer__item"]}>Doughnut</div>
						</div>

						<div>
							<div className={styles["footer__item__title"]}>About Us</div>

							<div className={styles["footer__item"]}>About Us</div>
							<div className={styles["footer__item"]}>FAQ</div>
							<div className={styles["footer__item"]}>Report Problem</div>
						</div>
						<div>
							<div className={styles["footer__item__title"]}>Newsletter</div>

							<div
								className={styles["footer__item"]}
								style={{
									width: "245px",
								}}>
								Get now free 50% discount for alll products on your first order
							</div>

							<div className={styles["footer__item"]}>
								<div className={styles["form__control"]}>
									<input
										type='email'
										placeholder='Your email address'
										className={styles["input"]}
									/>
									<button className={styles["button"]}>send</button>
								</div>
							</div>

							<div className={styles["footer__item"]}>
								<div className={styles["company__contact"]}>
									<MailIcon color='#8bac3e' />
									<div className='text--black'>elemes@gmail.com</div>
								</div>
							</div>
							<div className={styles["footer__item"]}>
								<div className={styles["company__contact"]}>
									<PhoneIcon color='#8bac3e' />
									<div className='text--black'> 0888 1111 2222 </div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
			<Container>
				<div className={styles["copyright"]}>
					© 2021 Elemes id. All rights reserved
				</div>
			</Container>
		</footer>
	);
};

const Social = () => {
	return <div className={styles["social"]}></div>;
};

export default Footer;
