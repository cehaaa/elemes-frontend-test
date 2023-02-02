import React from "react";

import styles from "./RecipeCard.module.scss";

import RecipeInterface from "../../interfaces/Recipe";

import CategoryColorEnum from "../../enums/CategoryColor";

import StarIcon from "../Basic/icons/StarIcon/StarIcon";

interface RecipeCardInterface {
	recipe: RecipeInterface;
}
const RecipeCard: React.FunctionComponent<RecipeCardInterface> = ({
	recipe,
}) => {
	const background =
		CategoryColorEnum[
			recipe.category.toLowerCase() as keyof typeof CategoryColorEnum
		];

	return (
		<div
			className={styles["recipe__card__container"]}
			style={{
				backgroundColor: background,
			}}>
			<div className={styles["recipe__card__body"]}>
				<img src={recipe.image} className={styles["recipe__card__image"]} />

				<div>
					<div className={styles["recipe__card__title"]}> {recipe.name} </div>

					<div className={styles["recipe__card__subtitle"]}>
						{recipe.category}
					</div>
				</div>

				<div className={styles["recipe__stars"]}>
					{Array(5)
						.fill(0)
						.map((el, index) => {
							return <StarIcon key={index} active={index !== recipe.rate} />;
						})}
				</div>
			</div>

			<div className={styles["background__image"]}></div>
		</div>
	);
};

export default RecipeCard;
