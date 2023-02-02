// static image
import PizzaPepperoniImage from "./../../../../assets/pizza-pepperoni.png";
import PizzaMeatImage from "./../../../../assets/pizza-meat.png";
import DonerKebabImage from "./../../../../assets/doner-kebab.png";
import KathiKebabImage from "./../../../../assets/kathi-kebab.png";
import SalmonRollImage from "./../../../../assets/salmon-roll.png";
import DoughnutMilkImage from "./../../../../assets/doughnut-milk.png";
import DoughnutUnicornImage from "./../../../../assets/doughnut-unicorn.png";
import CupcakeChocoImage from "./../../../../assets/cupcake-choco.png";

import RecipeInterface from "../../../../interfaces/Recipe";

const initialData: RecipeInterface[] = [
	{
		image: PizzaPepperoniImage,
		name: "Pizza Paperoni",
		category: "Pizza",
		rate: 4,
	},
	{
		image: PizzaMeatImage,
		name: "Pizza Meat",
		category: "Pizza",
		rate: 4,
	},
	{
		image: DonerKebabImage,
		name: "Doner Kebab",
		category: "Kebab",
		rate: 5,
	},
	{
		image: SalmonRollImage,
		name: "Salmon Roll",
		category: "Salmon",
		rate: 4,
	},
	{
		image: CupcakeChocoImage,
		name: "Cupcake Choco",
		category: "Cupcake",
		rate: 4,
	},
	{
		image: DoughnutMilkImage,
		name: "Doughnut Milk",
		category: "Doughnut",
		rate: 5,
	},
	{
		image: DoughnutUnicornImage,
		name: "Doughnut Unicorn",
		category: "Doughnut",
		rate: 4,
	},
	{
		image: KathiKebabImage,
		name: "Kathi Kebab",
		category: "Kebab",
		rate: 4,
	},
];

export default initialData;
