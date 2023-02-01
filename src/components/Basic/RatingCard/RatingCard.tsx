import React from "react";

import styles from "./RatingCard.module.scss";

import StarIcon from "../icons/StarIcon/StarIcon";

import HeroImage from "./../../../assets/hero.png";

const RatingCard: React.FunctionComponent = () => {
	return (
		<div className={styles["rating__card__wrapper"]}>
			<img src={HeroImage} className={styles["rating__card__image"]} />
			<div className={styles["rating__card__body"]}>
				<div className={styles["rating__card__title"]}>Green Salad Tomato</div>
				<div className={styles["rating__card__text"]}>Tomato</div>
				<div className={styles["rating__card__stars"]}>
					{Array(5)
						.fill(0)
						.map((el, index) => {
							return <StarIcon size='sm' active={index + 1 !== 5} />;
						})}
				</div>
			</div>
		</div>
	);
};

export default RatingCard;
