import classnames from "clsx";
// STYLES
import "./styles/alert.css";
// ICONS
import { CheckCircle } from "~/components/SvgIcons";

export default function Alert({ type, text = "Text", className, onClose = () => {} }) {
	const classNames = classnames({ [`alert-${type}`]: type }, className);

	return (
		<div className={classNames}>
			<CheckCircle />
			<span>{text}</span>
			<button type="button" onClick={onClose}>
				<i className="material-icons">close</i>
			</button>
		</div>
	);
}
