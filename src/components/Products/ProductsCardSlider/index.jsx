// STYLES
import "./styles/products-card-slider.css";
// COMPONENTS
import ProductCard from "./ProductCard";
import LoadingGif from "~/components/LoadingGif";
// ICONS
import { ArrowLeft, ArrowRight } from "~/components/SvgIcons";
// CUSTOM HOOKS
import { useProducts } from "../hooks";
// HOOKS
import { usePagination } from "~/hooks";

export default function ProductsCardSlider({ itemsPerPage = 4 }) {
	const { products, isLoading } = useProducts();
	const { data, disabledBtnNext, disabledBtnPrev, totalItems, nextPage, prevPage } = usePagination({
		items: products,
		itemsPerPage,
	});

	return (
		<>
			{isLoading ? (
				<LoadingGif />
			) : (
				<div className="product-card-slider">
					{totalItems > itemsPerPage && (
						<button
							className={`btn-slider-arrow-left${disabledBtnPrev ? " disabled" : ""}`}
							type="button"
							onClick={prevPage}
						>
							<ArrowLeft fill={disabledBtnPrev ? "#d6d6d6" : undefined} />
						</button>
					)}

					<div className="product-card-list">
						{data.map(({ id, title, image, price }) => (
							<ProductCard key={id} image={image} price={price} title={title} />
						))}
					</div>

					{totalItems > itemsPerPage && (
						<button
							className={`btn-slider-arrow-right${disabledBtnNext ? " disabled" : ""}`}
							type="button"
							onClick={nextPage}
						>
							<ArrowRight fill={disabledBtnPrev ? "#d6d6d6" : undefined} />
						</button>
					)}
				</div>
			)}
		</>
	);
}
