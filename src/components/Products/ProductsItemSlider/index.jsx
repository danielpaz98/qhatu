// STYLES
import "./styles/products-item-slider.css";
// COMPONENTS
import ProductItem from "./ProductItem";
import LoadingGif from "~/components/LoadingGif";
// ICONS
import { ArrowLeft, ArrowRight } from "~/components/SvgIcons";
// CUSTOM HOOKS
import { useProducts } from "../hooks";
// HOOKS
import { usePagination } from "~/hooks";

export default function ProductsItemSlider({ itemsPerPage = 4 }) {
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
				<div className="product-item-slider">
					{totalItems > itemsPerPage && (
						<button
							className={`btn-slider-arrow-left${disabledBtnPrev ? " disabled" : ""}`}
							type="button"
							onClick={prevPage}
						>
							<ArrowLeft fill={disabledBtnPrev ? "#d6d6d6" : undefined} />
						</button>
					)}

					<div className="product-item-list">
						{data.map(({ id, title, image, price }) => (
							<ProductItem key={id} image={image} price={price} title={title} />
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
