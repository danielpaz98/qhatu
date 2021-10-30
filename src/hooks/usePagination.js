import { useState } from "react";

export function usePagination({ items, itemsPerPage }) {
	const [currentPage, setCurrentPage] = useState(0);
	const data = items?.slice(currentPage, currentPage + itemsPerPage);
	const itemsLength = items?.length;

	const disabledBtnNext = currentPage + itemsPerPage >= itemsLength;
	const disabledBtnPrev = currentPage === 0;

	const nextPage = () => setCurrentPage((curr) => (curr + itemsPerPage < itemsLength ? curr + itemsPerPage : curr));
	const prevPage = () => setCurrentPage((curr) => (curr > 0 ? curr - itemsPerPage : curr));

	return { data, disabledBtnNext, disabledBtnPrev, totalItems: itemsLength, nextPage, prevPage };
}
