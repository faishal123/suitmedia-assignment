import * as React from "react";

type ChevronDownPropTypes = {
	className?: string;
};

const ChevronDown: React.FC<ChevronDownPropTypes> = ({ className }) => (
	<svg
		className={className}
		xmlns="http://www.w3.org/2000/svg"
		width={8}
		height={5}
		fill="none"
	>
		<path
			stroke="#002A48"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M7 1 4 4 1 1"
		/>
	</svg>
);
export default ChevronDown;
