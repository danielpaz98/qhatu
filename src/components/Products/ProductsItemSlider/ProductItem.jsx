export default function ProductItem({ title, image, price }) {
	return (
		<div className="product-item">
			<div className="product-item-image">
				<img alt={title} src={image} />
			</div>

			<div className="product-item-title">
				<p>{title}</p>
			</div>

			<div className="product-item-price">
				<h4>${price}</h4>
			</div>
		</div>
	);
}
