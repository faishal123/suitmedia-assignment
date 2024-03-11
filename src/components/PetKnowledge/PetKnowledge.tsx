import { boldClassName } from "@/utils/common";
import Button from "../Button/Button";
import css from "./PetKnowledge.module.scss";
import Image from "next/image";
import ChevronDown from "@/assets/Icons/chevronDown";
import tipsImage1 from "@/assets/tips/1.png";
import tipsImage2 from "@/assets/tips/2.png";
import { useMobile } from "@/utils/common";
import tipsImage3 from "@/assets/tips/3.png";

const tips = [
	{
		image: tipsImage1,
		title: "What is a Pomeranian? How to Identify Pomeranian Dogs",
		content:
			"The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.",
	},
	{
		image: tipsImage2,
		title: "Dog Diet You Need To Know",
		content:
			"Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance.",
	},
	{
		image: tipsImage3,
		title:
			"Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively",
		content:
			"Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.",
	},
];

const PetKnowledge = () => {
	const isMobile = useMobile();
	return (
		<section className={css.container}>
			<div className={css.titleContainer}>
				<div>
					<span>You already know?</span>
					<h5 className={`${css.title} ${boldClassName}`}>
						Useful Pet Knowledge
					</h5>
				</div>
				{!isMobile && (
					<Button
						rightIcon={<ChevronDown className="rotate-270" />}
						type="secondary"
					>
						View more
					</Button>
				)}
			</div>
			<div className={css.tipsContainer}>
				{tips.map((tip) => {
					return (
						<article key={tip.title} className={css.article}>
							<div className={css.imageContainer}>
								<Image src={tip.image} fill alt={tip.title} />
							</div>
							<div className={css.textContainer}>
								<div className={`${boldClassName} ${css.blueTag}`}>
									Pet Knowledge
								</div>
								<span className={boldClassName}>{tip.title}</span>
								<p className="font-size-14">{tip.content}</p>
							</div>
						</article>
					);
				})}
			</div>
			{isMobile && (
				<Button
					customClassName={css.mobileButton}
					rightIcon={<ChevronDown className="rotate-270" />}
					type="secondary"
				>
					View more
				</Button>
			)}
		</section>
	);
};

export default PetKnowledge;
