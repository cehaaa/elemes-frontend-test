import React from "react";

import styles from "./CategoryCard.module.scss";

import CategoryInterface from "../../interfaces/Category";

import CategoryColorEnum from "../../enums/CategoryColor";

import PizzaIcon from "./../../assets/icon/pizza.png";
import KabebIcon from "./../../assets/icon/kebab.png";
import SalmonIcon from "./../../assets/icon/salmon.png";
import DoughnutIcon from "./../../assets/icon/doughnut.png";
import CupecakeIcon from "./../../assets/icon/cupcake.png";

interface CategoryCardInteface {
	category: CategoryInterface;
}

const CategoryImage = {
	pizza: PizzaIcon,
	kebab: KabebIcon,
	salmon: SalmonIcon,
	doughnut: DoughnutIcon,
	cupcake: CupecakeIcon,
};

const CategoryCard: React.FunctionComponent<CategoryCardInteface> = ({
	category,
}) => {
	const background =
		CategoryColorEnum[
			category.name.toLowerCase() as keyof typeof CategoryColorEnum
		];

	return (
		<div
			className={styles["category__card"]}
			style={{
				backgroundColor: background,
			}}>
			<div>
				<div>
					<img
						src={CategoryImage[category.name as keyof typeof CategoryImage]}
						className='image--icon'
					/>
				</div>
				<div className={styles["category__card__title"]}>
					{category.name.charAt(0).toUpperCase() + category.name.slice(1)}
				</div>
				<div className={styles["category__card__text"]}>
					{category.total} Items
				</div>
			</div>

			<div className={styles["background__image"]}></div>
		</div>
	);
};

export default CategoryCard;
