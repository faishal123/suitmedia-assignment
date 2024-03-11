import { boldClassName } from "@/utils/common";
import MonitoLogo from "@/assets/Icons/logo";
import css from "./Footer.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Facebook from "@/assets/Icons/facebook";
import Twitter from "@/assets/Icons/twitter";
import Instagram from "@/assets/Icons/instagram";
import Youtube from "@/assets/Icons/youtube";
import { useMobile } from "@/utils/common";

const Footer = () => {
	const isMobile = useMobile();
	return (
		<footer className={css.footer}>
			<div className={css.newsLetter}>
				<h5 className={`font-white ${boldClassName}`}>
					Register Now So You Don&apos;t Miss Our Programs
				</h5>
				<div className={css.inputContainer}>
					<Input rounded={false} bordered placeholder="Enter your email" />
					<Button rounded={false}>Subscribe Now</Button>
				</div>
			</div>
			<nav className={css.footerNav}>
				<div className={css.linksContainer}>
					<a target="_blank" href="/" className={`font-base-color`}>
						Home
					</a>
					<a target="_blank" href="/" className={`font-base-color`}>
						Category
					</a>
					<a target="_blank" href="/" className={`font-base-color`}>
						About
					</a>
					<a target="_blank" href="/" className={`font-base-color`}>
						Contact
					</a>
				</div>
				<div className={css.socials}>
					<Facebook />
					<Twitter />
					<Instagram />
					<Youtube />
				</div>
			</nav>
			{isMobile ? (
				<div className={css.footerMobile}>
					<div>
						<MonitoLogo />
					</div>
					<div>
						<span className="cursor-pointer">Terms of Service</span>{" "}
						<span className="cursor-pointer">Privacy Policy</span>
					</div>
					<div className="cursor-pointer">
						© 2022 Monito. All rights reserved.
					</div>
				</div>
			) : (
				<div className={css.bottomFooter}>
					<div className="cursor-pointer">
						© 2022 Monito. All rights reserved.
					</div>
					<MonitoLogo />
					<div>
						<span className="cursor-pointer">Terms of Service</span>{" "}
						<span className="cursor-pointer">Privacy Policy</span>
					</div>
				</div>
			)}
		</footer>
	);
};

export default Footer;
