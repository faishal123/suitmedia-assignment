import productImage1 from "@/assets/products/1.png";
import productImage2 from "@/assets/products/2.png";
import productImage3 from "@/assets/products/3.png";
import productImage4 from "@/assets/products/4.png";
import productImage5 from "@/assets/products/5.png";
import productImage6 from "@/assets/products/6.png";
import productImage7 from "@/assets/products/7.png";
import productImage8 from "@/assets/products/8.png";
import ItemsList from "../Layout/ItemsList/ItemsList";

const productsData = [
	{
		name: "Reflex Plus Adult Dog Food Salmon",
		tags: [
			{ key: "Product", value: "Dog Food" },
			{ key: "Size", value: "385gm" },
		],
		price: 140000,
		image: productImage1,
		free: ["toy", "shaker"],
	},
	{
		name: "Reflex Plus Adult Cat Food Salmon",
		tags: [
			{ key: "Product", value: "Cat Food" },
			{ key: "Size", value: "1.5kg" },
		],
		price: 165000,
		image: productImage2,
		free: ["toy", "shaker"],
	},
	{
		name: "Cat scratching ball toy kitten sisal rope ball",
		tags: [{ key: "Product", value: "Toy" }],
		price: 1100000,
		image: productImage3,
		free: ["cat food"],
	},
	{
		name: "Cute Pet Cat Warm Nest",
		tags: [{ key: "Product", value: "Toy" }],
		price: 410000,
		image: productImage4,
		free: ["cat food"],
	},
	{
		name: "NaturVet Dogs - Omega-Gold Plus Salmon Oil",
		tags: [
			{ key: "Product", value: "Dog Food" },
			{ key: "Size", value: "385gm" },
		],
		price: 350000,
		image: productImage5,
		free: ["toy", "shaker"],
	},
	{
		name: "Costumes Fashion Pet Clother Cowboy Rider",
		tags: [
			{ key: "Product", value: "Costume" },
			{ key: "Size", value: "1.5kg" },
		],
		price: 500000,
		image: productImage6,
		free: ["toy", "shaker"],
	},
	{
		name: "Costumes Chicken Drumstick Headband",
		tags: [{ key: "Product", value: "Costume" }],
		price: 400000,
		image: productImage7,
		free: ["cat food "],
	},
	{
		name: "Plush Pet Toy",
		tags: [{ key: "Product", value: "Toy" }],
		price: 250000,
		image: productImage8,
		free: ["toy", "shaker"],
	},
];

const Products = () => {
	return (
		<ItemsList
			uniqueKey="products"
			data={productsData}
			title="Our Products"
			subtitle="Hard to choose the right products for your pets?"
		/>
	);
};

export default Products;
