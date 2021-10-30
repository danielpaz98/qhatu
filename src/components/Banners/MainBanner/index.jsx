// STYLES
import "./styles/main-banner.css";
// ICONS
import { ArrowLeft, ArrowRight } from "~/components/SvgIcons";
// IMAGES
import mainBannerImage1 from "~/assets/img/main-banner-img-1.jpg";
import mainBannerImage2 from "~/assets/img/main-banner-img-2.jpg";
import mainBannerImage3 from "~/assets/img/main-banner-img-3.jpg";
import mainBannerImageMobile from "~/assets/img/main-banner-img-mobile.png";

export default function MainBanner() {
	return (
		<div className="main-banner">
			<button className="btn-banner-arrow-left" type="button">
				<ArrowLeft />
			</button>

			<div className="banner-images">
				<div className="banner-img">
					<img alt="Banner Image 1" src={mainBannerImage1} />
				</div>

				<div className="banner-img">
					<img alt="Banner Image 2" src={mainBannerImage2} />
				</div>

				<div className="banner-img">
					<img alt="Banner Image 3" src={mainBannerImage3} />
				</div>
			</div>

			<div className="banner-img img-mobile">
				<img alt="Banner Image Mobile" src={mainBannerImageMobile} />
			</div>

			<div className="main-banner-title">
				<p>Summer</p>
				<p>Outlet</p>
			</div>

			<button className="btn-banner-arrow-right" type="button">
				<ArrowRight />
			</button>
		</div>
	);
}
