"use client";
import Button from "@/components/Button/Button";
import css from "./ItemsList.module.scss";
import Image, { StaticImageData } from "next/image";
import { boldClassName } from "@/utils/common";
import ChevronDown from "@/assets/Icons/chevronDown";
import { currencyFormatter } from "@/utils/common";
import React, { useEffect, useState } from "react";
import { useMobile } from "@/utils/common";
import Free from "@/assets/Icons/free";

type ItemsListPropTypes = {
	data: {
		name: string;
		tags: { key: string; value: string }[];
		price: number;
		image: StaticImageData;
		free?: string[];
	}[];
	uniqueKey: string;
	title: string;
	subtitle: string;
};

const ItemsList: React.FC<ItemsListPropTypes> = ({
	uniqueKey,
	data,
	title,
	subtitle,
}) => {
	const isMobile = useMobile();
	const [containerWidth, setContainerWidth] = useState(0);
	useEffect(() => {
		const containerElement = document.getElementById(`${uniqueKey}-container`);
		if (containerElement) {
			setContainerWidth(containerElement.getBoundingClientRect().width);
		}
	}, []);

	return (
		<section className={css.section}>
			<div className={css.titleContainer}>
				<div>
					<span>{subtitle}</span>
					<h5 className={boldClassName}>{title}</h5>
				</div>
				{!isMobile && (
					<Button
						rightIcon={<ChevronDown className="rotate-270" />}
						type="secondary"
					>
						View More
					</Button>
				)}
			</div>
			<div id={`${uniqueKey}-container`} className={css.container}>
				{data.map((singleData) => {
					const articleWidth = isMobile
						? (containerWidth - 12) / 2
						: (containerWidth - 60) / 4;
					const petImageWidth = articleWidth - 16;
					const free = singleData.free;
					const freeLength = free?.length || 0;
					return (
						<article
							style={{ width: `${articleWidth}px` }}
							className={css.article}
							key={JSON.stringify(singleData)}
						>
							<Image
								className={css.image}
								src={singleData.image}
								width={petImageWidth}
								alt={singleData.name}
							/>
							<div className={css.textContainer}>
								<span className={boldClassName}>{singleData.name}</span>
								<span className={`font-size-12 ${css.greyText}`}>
									{singleData.tags.map((tag, i) => {
										const isLastItem = i + 1 === singleData.tags.length;
										return (
											<React.Fragment key={tag.value}>
												<span>
													{tag.key}:{" "}
													<span className={boldClassName}>{tag.value}</span>
												</span>
												{!isLastItem && <span> • </span>}
											</React.Fragment>
										);
									})}
								</span>
								<span className={`font-size-14 ${boldClassName}`}>
									{currencyFormatter
										.format(singleData.price)
										.replaceAll(",", ".")}{" "}
									VND
								</span>
								{free && (
									<div className={`${boldClassName} ${css.freeContainer}`}>
										<Free />
										<span> • </span>
										{free.map((singleFree, freeIndex) => {
											const isLastItem = freeIndex + 1 === freeLength;
											return (
												<React.Fragment key={singleFree}>
													{freeLength > 1
														? freeIndex !== 0 && !isLastItem
															? ", "
															: isLastItem
															? " & "
															: ""
														: ""}
													<span>Free {singleFree}</span>
												</React.Fragment>
											);
										})}
									</div>
								)}
							</div>
						</article>
					);
				})}
			</div>
			{isMobile && (
				<div className={css.buttonMobileContainer}>
					<Button
						rightIcon={<ChevronDown className="rotate-270" />}
						type="secondary"
					>
						View More
					</Button>
				</div>
			)}
		</section>
	);
};

export default ItemsList;
