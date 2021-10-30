// STYLES
import "./styles/home-page.css";
// COMPONENTS
import MainBanner from "~/components/Banners/MainBanner";
import DiscountBanner from "~/components/Banners/DiscountBanner";
import ProductsItemSlider from "~/components/Products/ProductsItemSlider";
import ProductsCardSlider from "~/components/Products/ProductsCardSlider";
import ProductsCategorySlider from "~/components/Products/ProductsCategorySlider";
import useBreakpoint from "use-breakpoint";
// CONSTANTS
import { breakpoints } from "~/utils/constants/breakpoints";

export default function HomePage() {
	const { breakpoint: bp } = useBreakpoint(breakpoints);
	const itemsPerPageProducts = bp === "bp800" || bp === "large" || bp === "xlarge" ? 4 : 1;

	return (
		<>
			<section className="banner-section">
				<MainBanner />
			</section>

			<section className="slider-section">
				<div className="slider-section-container">
					<div className="slider-section-header">
						<h1 className="slider-section-title">Novedades Diarias</h1>
						<div className="title-divider" />
					</div>

					<ProductsItemSlider itemsPerPage={itemsPerPageProducts} />
				</div>

				<div className="slider-section-container">
					<div className="slider-section-header">
						<h1 className="slider-section-title">Nueva Colección</h1>
						<div className="title-divider" />
					</div>

					<ProductsCardSlider itemsPerPage={itemsPerPageProducts} />
				</div>
			</section>

			<section className="banner-section">
				<DiscountBanner />
			</section>

			<section className="slider-section">
				<div className="slider-section-container">
					<ProductsCategorySlider itemsPerPage={itemsPerPageProducts} />
				</div>
			</section>
		</>
	);
}
