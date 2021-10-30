import useSWR from "swr";
// IMAGES
import categoryImage1 from "~/assets/img/product-categories-img-1.jpg";
import categoryImage2 from "~/assets/img/product-categories-img-2.jpg";
import categoryImage3 from "~/assets/img/product-categories-img-3.jpg";
import categoryImage4 from "~/assets/img/product-categories-img-4.jpg";

const fetcher = (...args) => window.fetch(...args).then((res) => res.json());

export function useProductCategories() {
	const categoriesImg = [categoryImage1, categoryImage2, categoryImage3, categoryImage4];

	const { data, error } = useSWR("https://fakestoreapi.com/products/categories", fetcher);
	const categories = data?.map((category, index) => ({ category, img: categoriesImg[index] }));

	return {
		categories,
		isLoading: !error && !data,
		isError: error,
	};
}
