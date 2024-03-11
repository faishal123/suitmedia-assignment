import { useState, useEffect } from "react";
import localFont from "next/font/local";

export const SVNGilroyLight = localFont({ src: "../font/SVNGilroy Light.otf" });
const SVNGilroyBold = localFont({ src: "../font/SVNGilroy Bold.otf" });
export const boldClassName = SVNGilroyBold.className;

export const formatAgeInMonths = (param: string) => {
	if (param.length < 2) {
		return `0${param} months`;
	}
	return `${param} months`;
};

export const currencyFormatter = new Intl.NumberFormat();

export const useWindowSize = () => {
	const isClient = typeof window === "object";
	const [windowSize, setWindowSize] = useState({
		width: isClient ? window.innerWidth : undefined,
		height: isClient ? window.innerHeight : undefined,
	});

	function handleResize() {
		setWindowSize({
			width: isClient ? window.innerWidth : undefined,
			height: isClient ? window.innerHeight : undefined,
		});
	}

	useEffect(() => {
		if (!isClient) {
			console.error("no client");
		} else {
			window.addEventListener("resize", handleResize);
			return () => window.removeEventListener("resize", handleResize);
		}
	}, [isClient]);

	return windowSize;
};

export const useMobile = () => {
	return (useWindowSize()?.width || 0) <= 480;
};
