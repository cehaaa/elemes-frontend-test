import React from "react";

import HeroSection from "./HeroSection/HeroSection";
import TrendingSection from "./TrendingSection/TrendingSection";

import CategorySection from "./CategorySection/CategorySection";

const Home: React.FunctionComponent = () => {
	return (
		<>
			<HeroSection />
			<CategorySection />
			<TrendingSection />
		</>
	);
};

export default Home;
