import { HTMLProps, ReactNode } from "react";
import css from "./Input.module.scss";

interface InputPropTypes extends HTMLProps<HTMLInputElement> {
	leftIcon?: ReactNode;
	rounded?: boolean;
	bordered?: boolean;
}

const Input: React.FC<InputPropTypes> = ({
	placeholder,
	leftIcon,
	rounded = true,
	bordered = false,
}) => {
	return (
		<div className={`${css.inputContainer} position-relative`}>
			<div className={css.leftIconContainer}>{leftIcon}</div>
			<input
				className={`${bordered ? css.bordered : ""} ${
					rounded ? css.rounded : ""
				} ${css.input}`}
				placeholder={placeholder}
			/>
		</div>
	);
};

export default Input;
