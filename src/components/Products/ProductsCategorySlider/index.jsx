// STYLES
import "./styles/products-category-slider.css";
// ICONS
import { ArrowLeft, ArrowRight } from "~/components/SvgIcons";
// COMPONENTS
import LoadingGif from "~/components/LoadingGif";
// HOOKS
import { usePagination, useProductCategories } from "~/hooks";

export default function ProductsCategorySlider({ itemsPerPage = 4 }) {
	const { categories, isLoading } = useProductCategories();

	const { data, disabledBtnNext, disabledBtnPrev, totalItems, nextPage, prevPage } = usePagination({
		items: categories,
		itemsPerPage,
	});

	return (
		<div className="products-category-slider">
			{totalItems > itemsPerPage && (
				<button
					className={`btn-slider-arrow-left${disabledBtnPrev ? " disabled" : ""}`}
					type="button"
					onClick={prevPage}
				>
					<ArrowLeft fill={disabledBtnPrev ? "#d6d6d6" : undefined} />
				</button>
			)}

			<>
				{isLoading ? (
					<LoadingGif />
				) : (
					<div className="products-category-list">
						{data.map(({ category, img }, index) => (
							<div key={index} className="products-category">
								<img alt={category} src={img} />

								<div className="products-category-text">
									<h2>{category}</h2>
									<a href="#">Ver más</a>
								</div>
							</div>
						))}
					</div>
				)}
			</>

			{totalItems > itemsPerPage && (
				<button
					className={`btn-slider-arrow-right${disabledBtnNext ? " disabled" : ""}`}
					type="button"
					onClick={nextPage}
				>
					<ArrowRight fill={disabledBtnNext ? "#d6d6d6" : undefined} />
				</button>
			)}
		</div>
	);
}
