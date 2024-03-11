import { ReactNode } from "react";
import css from "./Button.module.scss";

type ButtonPropTypes = {
	children: ReactNode;
	customClassName?: string;
	type?: "primary" | "secondary";
	rounded?: boolean;
	rightIcon?: ReactNode;
};

const Button: React.FC<ButtonPropTypes> = ({
	children,
	customClassName,
	type = "primary",
	rightIcon,
	rounded = true,
}) => {
	return (
		<button
			className={`${customClassName} ${css.button} ${css[type]} ${
				rounded ? css.rounded : ""
			}`}
		>
			{children}
			{rightIcon && rightIcon}
		</button>
	);
};

export default Button;
