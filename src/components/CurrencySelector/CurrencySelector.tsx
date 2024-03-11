import VND from "@/assets/Icons/CurrencyVND";
import css from "./CurrencySelector.module.scss";
import ChevronDown from "@/assets/Icons/chevronDown";

const CurrencySelector = () => {
	return (
		<div className={css.container}>
			<VND />
			VND
			<ChevronDown />
		</div>
	);
};

export default CurrencySelector;
