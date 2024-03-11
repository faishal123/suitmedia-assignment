import petImage1 from "@/assets/pets/1.png";
import petImage2 from "@/assets/pets/2.png";
import petImage3 from "@/assets/pets/3.png";
import petImage4 from "@/assets/pets/4.png";
import petImage5 from "@/assets/pets/5.png";
import petImage6 from "@/assets/pets/6.png";
import petImage7 from "@/assets/pets/7.png";
import petImage8 from "@/assets/pets/8.png";
import { formatAgeInMonths } from "@/utils/common";
import ItemsList from "../Layout/ItemsList/ItemsList";

const petsData = [
	{
		name: "MO231 - Pomeranian White",
		tags: [
			{ key: "Gene", value: "Male" },
			{ key: "Age", value: formatAgeInMonths("2") },
		],
		price: 6900000,
		image: petImage1,
	},
	{
		name: "MO502 - Poodle Tiny Yellow",
		tags: [
			{ key: "Gene", value: "Male" },
			{ key: "Age", value: formatAgeInMonths("2") },
		],
		price: 6900000,
		image: petImage2,
	},
	{
		name: "MO102 - Poodle Tiny Sepia",
		tags: [
			{ key: "Gene", value: "Male" },
			{ key: "Age", value: formatAgeInMonths("2") },
		],
		price: 6900000,
		image: petImage3,
	},
	{
		name: "MO512 - Alaskan Malamute Grey",
		tags: [
			{ key: "Gene", value: "Male" },
			{ key: "Age", value: formatAgeInMonths("2") },
		],
		price: 6900000,
		image: petImage4,
	},
	{
		name: "MO231 - Pembroke Corgi Cream",
		tags: [
			{ key: "Gene", value: "Male" },
			{ key: "Age", value: formatAgeInMonths("2") },
		],
		price: 6900000,
		image: petImage5,
	},
	{
		name: "MO502 - Pembroke Corgi Tricolor",
		tags: [
			{ key: "Gene", value: "Male" },
			{ key: "Age", value: formatAgeInMonths("2") },
		],
		price: 6900000,
		image: petImage6,
	},
	{
		name: "MO231 - Pomeranian White",
		tags: [
			{ key: "Gene", value: "Male" },
			{ key: "Age", value: formatAgeInMonths("2") },
		],
		price: 6900000,
		image: petImage7,
	},
	{
		name: "MO512 - Poodle Tiny Dairy Cow",
		tags: [
			{ key: "Gene", value: "Male" },
			{ key: "Age", value: formatAgeInMonths("2") },
		],
		price: 6900000,
		image: petImage8,
	},
];

const Pets = () => {
	return (
		<ItemsList
			title="Take A Look At Some Of Our Pets"
			subtitle="Whats new?"
			data={petsData}
			uniqueKey="pets"
		/>
	);
};

export default Pets;
