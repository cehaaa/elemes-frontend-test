import React, { useState } from "react";

import RecipeInterface from "../../../../interfaces/Recipe";

import initialData from "./intialData";

import styles from "./TrendingSection.module.scss";

import Button from "../../../Basic/Button/Button";
import Section from "../../../Basic/Section/Section";
import RecipeCard from "../../../RecipeCard/RecipeCard";
import Container from "../../../Basic/Container/Container";
import SectionBody from "../../../Basic/Section/SectionBody";
import SectionTitle from "../../../Basic/Section/SectionTitle";
import SectionHeader from "../../../Basic/Section/SectionHeader";

const TrendingSection: React.FunctionComponent = () => {
	const [recipes, setRecipes] = useState<RecipeInterface[]>(initialData);

	return (
		<>
			<Section>
				<Container>
					<SectionHeader>
						<SectionTitle>Browser Our Trending</SectionTitle>
						<SectionTitle primary>Recipe</SectionTitle>
					</SectionHeader>
					<SectionBody>
						<div className={styles["trending__list"]}>
							{recipes.map((recipe, index) => (
								<RecipeCard key={index} recipe={recipe} />
							))}
						</div>
					</SectionBody>
				</Container>
				<Container>
					<div className={styles["trending__section__container"]}>
						<Button>All Recipe</Button>
					</div>
				</Container>
			</Section>
		</>
	);
};

export default TrendingSection;
