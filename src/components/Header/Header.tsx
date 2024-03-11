import Image from "next/image";
import css from "./Header.module.scss";
import { boldClassName } from "@/utils/common";
import Navigation from "./Navigation/Navigation";
import Play from "@/assets/Icons/play";
import heroImage from "@/assets/hero images/hero image 1.png";
import Button from "../Button/Button";
import { useMobile } from "@/utils/common";

const Header = () => {
	const isMobile = useMobile();
	const renderImage = () => {
		if (isMobile) {
			return (
				<div className={css.mobileImageContainer}>
					<Image src={heroImage} width={200} alt="hero" />
				</div>
			);
		}
		return (
			<div className={`position-relative ${css.heroImageContainer}`}>
				<Image src={heroImage} layout="fill" alt="hero" />
			</div>
		);
	};

	return (
		<header className={css.header}>
			<Navigation />
			<div className={css.headerContentContainer}>
				<div className={css.textContainer}>
					<h1 className={`font-base-color ${boldClassName}`}>
						One More Friend
					</h1>
					<h3 className={`font-base-color ${boldClassName}`}>
						Thousands More Fun!
					</h3>
					<p>
						Having a pet means you have more joy, a new friend, a happy person
						who will always be with you to have fun. We have 200+ different pets
						that can meet your needs
					</p>
					<div className={css.ctaContainer}>
						<Button rightIcon={<Play />} type="secondary">
							View Intro
						</Button>
						<Button>Explore Now</Button>
					</div>
				</div>
				{renderImage()}
			</div>
		</header>
	);
};

export default Header;
