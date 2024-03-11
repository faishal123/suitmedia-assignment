import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import css from "./Banner.module.scss";
import Play from "@/assets/Icons/play";
import Button from "../Button/Button";
import { boldClassName } from "@/utils/common";

type BannerPropTypes = {
	image: StaticImageData;
	title1: ReactNode;
	title2: ReactNode;
	description: ReactNode;
	layout: "textleft" | "textright";
	imageClassName?: string;
};

const Banner3: React.FC<BannerPropTypes> = ({
	image,
	title1,
	title2,
	description,
	layout,
	imageClassName,
}) => {
	const renderImage = () => (
		<div className={`${imageClassName} ${css.imageContainer}`}>
			<Image src={image} width={350} alt="test" />
		</div>
	);

	const renderViewIntroButton = () => (
		<Button rightIcon={<Play />} type="secondary">
			View Intro
		</Button>
	);

	const renderExploreButton = () => <Button>Expore Now</Button>;

	const renderTexts = () => (
		<div className={`${css[layout]} ${css.textContents}`}>
			{title1}
			<h4 className={`${boldClassName} font-base-color`}>{title2}</h4>
			<p>{description}</p>
			<div className={css.buttonContainer}>
				{layout === "textleft" ? (
					<>
						{renderExploreButton()}
						{renderViewIntroButton()}
					</>
				) : (
					<>
						{renderViewIntroButton()}
						{renderExploreButton()}
					</>
				)}
			</div>
			<div className={css.squareYellow}></div>
		</div>
	);
	return (
		<article className={`position-relative ${css.banner}`}>
			{layout === "textleft" ? (
				<>
					{renderTexts()}
					{renderImage()}
				</>
			) : (
				<>
					{renderImage()}
					{renderTexts()}
				</>
			)}
		</article>
	);
};

export default Banner3;
