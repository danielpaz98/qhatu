// STYLES
import "./styles/loading-gif.css";
// IMAGES
import loadingGif from "~/assets/img/loading.gif";

export default function LoadingGif() {
	return (
		<div className="loading">
			<img alt="Spinner" src={loadingGif} />
		</div>
	);
}
