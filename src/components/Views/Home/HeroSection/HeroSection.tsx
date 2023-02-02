import React from "react";

import styles from "./HeroSection.module.scss";

import Button from "../../../Basic/Button/Button";
import Container from "../../../Basic/Container/Container";
import RatingCard from "../../../RatingCard/RatingCard";

import HeroImage from "./../../../../assets/hero.png";
import BackgroundImage from "./../../../../assets/background.png";

const HeroSection: React.FunctionComponent = () => {
	return (
		<section className={styles["hero__section__container"]}>
			<img src={BackgroundImage} className={styles["background__image"]} />

			<Container>
				<div className={styles["hero__section"]}>
					<div className={styles["content"]}>
						<div className={styles["hero__title"]}>Good Food Us Good Mood</div>

						<div className={styles["hero__image__container--mobile"]}>
							<img src={HeroImage} className={styles["hero__image"]} />

							<div className={styles["floating__card"]}>
								<RatingCard />
							</div>
						</div>

						<div className={styles["hero__text"]}>
							I would think that conserving our natural resources should be a
							conservative position: Not to waste food, and not to throw away a
							lot of the food that we buy.
						</div>
						<div className={styles["content__action"]}>
							<Button>Daftar Sekarang</Button>
							<Button variant='secondary'>About Us</Button>
						</div>
					</div>
					<div className={styles["hero__image__container"]}>
						<img className={styles["hero__image"]} src={HeroImage} />

						<div className={styles["floating__card"]}>
							<RatingCard />
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default HeroSection;
