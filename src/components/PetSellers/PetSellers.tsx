import css from "./PetSellers.module.scss";
import companyLogo1 from "@/assets/company logos/1.png";
import companyLogo2 from "@/assets/company logos/2.png";
import companyLogo3 from "@/assets/company logos/3.png";
import companyLogo4 from "@/assets/company logos/4.png";
import companyLogo5 from "@/assets/company logos/5.png";
import companyLogo6 from "@/assets/company logos/6.png";
import companyLogo7 from "@/assets/company logos/7.png";
import Button from "../Button/Button";
import Image from "next/image";
import ChevronDown from "@/assets/Icons/chevronDown";
import { boldClassName } from "@/utils/common";

const companies = [
	companyLogo1,
	companyLogo2,
	companyLogo3,
	companyLogo4,
	companyLogo5,
	companyLogo6,
	companyLogo7,
];

const PetSellers = () => {
	return (
		<section className={css.petSellers}>
			<div className={css.titleContainer}>
				<div className={css.title}>
					<span>Proud to be part of</span>
					<h5 className={boldClassName}> Pet Sellers</h5>
				</div>
				<div>
					<Button
						rightIcon={<ChevronDown className="rotate-270" />}
						type="secondary"
					>
						View all our sellers
					</Button>
				</div>
			</div>
			<div className={css.companiesContainer}>
				{companies.map((company, i) => {
					return (
						<div key={i} className={css.imageContainer}>
							<Image src={company} fill alt={`company-${i}`} />
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default PetSellers;
