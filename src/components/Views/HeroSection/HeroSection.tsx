import React from "react";

import styles from "./HeroSection.module.scss";

import Button from "../../Basic/Button/Button";
import RatingCard from "../../Basic/RatingCard/RatingCard";

import HeroImage from "./../../../assets/hero.png";
import BackgroundImage from "./../../../assets/background.png";

const HeroSection: React.FunctionComponent = () => {
	return (
		<section className={styles["container"]}>
			<img src={BackgroundImage} className={styles["background"]} />

			<div className={styles["hero__section"]}>
				<div className={styles["hero__section--left"]}>
					<div className={styles["hero__title"]}>
						Good Food Us <br /> Good Mood
					</div>
					<div className={styles["hero__text"]}>
						I would think that conserving our natural resources should be a
						conservative position: Not to waste food, and not to throw away a
						lot of the food that we buy.
					</div>
					<div className={styles["hero__section--left__action"]}>
						<Button>Daftar Sekarang</Button>
						<Button variant='secondary'>About Us</Button>
					</div>
				</div>
				<div>
					<div className={styles["hero__image__wrapper"]}>
						<img src={HeroImage} />

						<div className={styles["floating__card"]}>
							<RatingCard />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
