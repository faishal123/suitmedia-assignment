"use client";

import css from "./Navigation.module.scss";
import { boldClassName } from "@/utils/common";
import MonitoLogo from "@/assets/Icons/logo";
import Button from "@/components/Button/Button";
import { useMobile } from "@/utils/common";
import Search from "@/assets/Icons/search";
import Input from "@/components/Input/Input";
import Hamburger from "@/assets/Icons/hamburger";
import CurrencySelector from "@/components/CurrencySelector/CurrencySelector";

const Navigation = () => {
	const isMobile = useMobile();

	return (
		<div className={css.headerNavigation}>
			<nav className={css.navigationContainer}>
				{isMobile && <Hamburger />}
				<MonitoLogo />
				{isMobile && <Search />}
				{!isMobile && (
					<>
						<a target="_blank" href="/" className={`${boldClassName}`}>
							Home
						</a>
						<a target="_blank" href="/" className={`${boldClassName}`}>
							Category
						</a>
						<a target="_blank" href="/" className={`${boldClassName}`}>
							About
						</a>
						<a target="_blank" href="/" className={`${boldClassName}`}>
							Contact
						</a>
					</>
				)}
			</nav>
			{!isMobile && (
				<div className={css.rightHeader}>
					<div className={css.inputContainer}>
						<Input leftIcon={<Search />} placeholder="Search Something Here!" />
					</div>
					<div className={css.buttonContainer}>
						<Button customClassName={`${css.joinButton} ${boldClassName}`}>
							Join the community
						</Button>
					</div>
					<CurrencySelector />
				</div>
			)}
		</div>
	);
};

export default Navigation;
