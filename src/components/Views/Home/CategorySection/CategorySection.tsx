import React, { useState } from "react";

import styles from "./CategorySection.module.scss";

import CategoryInterface from "../../../../interfaces/Category";

import Section from "../../../Basic/Section/Section";
import Container from "../../../Basic/Container/Container";
import SectionTitle from "../../../Basic/Section/SectionTitle";
import SectionHeader from "../../../Basic/Section/SectionHeader";
import CategoryCard from "../../../CategoryCard/CategoryCard";

const CategorySection: React.FunctionComponent = () => {
	const intialData: CategoryInterface[] = [
		{
			name: "cupcake",
			total: 22,
		},
		{
			name: "pizza",
			total: 25,
		},
		{
			name: "kebab",
			total: 12,
		},
		{
			name: "salmon",
			total: 22,
		},
		{
			name: "doughnut",
			total: 11,
		},
		{
			name: "salmon",
			total: 11,
		},
		{
			name: "pizza",
			total: 11,
		},
	];

	const [categories, setCategories] = useState<CategoryInterface[]>(intialData);

	return (
		<>
			<div className={styles["category__section__container"]}>
				<Container>
					<SectionHeader>
						<SectionTitle>Browser Our Category</SectionTitle>
						<SectionTitle primary>Recipe</SectionTitle>
					</SectionHeader>
				</Container>
				<div className={styles["horizontal__scroll"]}>
					{categories.map((category, index) => (
						<CategoryCard key={index} category={category} />
					))}
				</div>

				<Container>
					<div className={styles["category__section"]}>
						<div className={styles["navigation"]}>
							<div>Next</div>
							<div className={styles["indicator"]}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={2.5}
									stroke='currentColor'
									className={styles["icon"]}>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M8.25 4.5l7.5 7.5-7.5 7.5'
									/>
								</svg>
							</div>
						</div>
						<div className={styles["navigation"]}>
							<div className={styles["indicator"]}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={2.5}
									stroke='currentColor'
									className={styles["icon"]}>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M15.75 19.5L8.25 12l7.5-7.5'
									/>
								</svg>
							</div>
							<div>Prev</div>
						</div>
					</div>
				</Container>
			</div>
		</>
	);
};

export default CategorySection;
