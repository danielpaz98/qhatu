export default function ProductCard({ title, description, image, price }) {
	return (
		<div className="product-card">
			<div className="product-card-image">
				<img alt={title} src={image} />
			</div>

			<div className="product-card-promotion">
				<div className="product-card-promotion-oldprice">
					<span>$180.000</span>
				</div>

				<div className="product-card-price-block">
					<span className="product-card-price">${price}</span>
					<span className="product-card-price-discount">60% off</span>
				</div>

				<div className="product-card-desc">
					<p>Lorem ipsum dolor lorem ipsum lorem ipsum</p>
				</div>

				<div className="product-card-promotion-shipping">
					<p>Envío Gratis</p>
				</div>
			</div>
		</div>
	);
}
