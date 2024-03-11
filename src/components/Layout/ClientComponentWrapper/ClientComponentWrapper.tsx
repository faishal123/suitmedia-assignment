"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header/Header";
import Pets from "@/components/Pets/Pets";
import Products from "@/components/Products/Products";
import PetKnowledge from "@/components/PetKnowledge/PetKnowledge";
import Footer from "@/components/Footer/Footer";
import PetSellers from "@/components/PetSellers/PetSellers";
import heroImage2 from "@/assets/hero images/hero image 2.png";
import heroImage3 from "@/assets/hero images/hero image 3.png";
import Banner2 from "@/components/Banner2/Banner";
import Paw from "@/assets/Icons/paw";
import { boldClassName } from "@/utils/common";
import { useMobile } from "@/utils/common";
import Banner3 from "@/components/Banner3/Banner";

const ClientComponentWrapper: React.FC = () => {
	const [rendered, setRendered] = useState(false);
	const isMobile = useMobile();
	useEffect(() => {
		setRendered(true);
	}, []);

	if (!rendered) {
		return null;
	}

	return (
		<>
			<Header />
			<Pets />
			<Banner2
				layout={isMobile ? "textleft" : "textright"}
				image={heroImage2}
				title1="One More Friend"
				title2="Thousands More Fun!"
				description="Having a pet means you have more joy, a new friend, a happy person who
		will always be with you to have fun. We have 200+ different pets that
		can meet your needs!"
			/>
			{!isMobile && <Products />}
			{!isMobile && <PetSellers />}
			{!isMobile && (
				<Banner3
					layout="textleft"
					image={heroImage3}
					title1={
						<>
							<h2 className={`${boldClassName} font-base-color`}>
								Adoption <Paw />
							</h2>
						</>
					}
					title2="We Need Help. So Do They."
					description="Adopt a pet, give it a home, and it will  love you back unconditionally."
				/>
			)}
			<PetKnowledge />
			<Footer />
		</>
	);
};

export default ClientComponentWrapper;
