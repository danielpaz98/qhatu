// STYLES
import "./styles/discount-banner.css";
// IMAGES
import discountBanner from "~/assets/img/discount-banner-img.jpg";

export default function DiscountBanner() {
	return (
		<div className="discount-banner">
			<div className="discount-banner-img">
				<img alt="Discount Banner" src={discountBanner} />
			</div>

			<div className="discount-banner-title">
				<p>Hasta el</p>
				<p>50%</p>
				<p>DCTO</p>
			</div>
		</div>
	);
}
