import React, {useState} from 'react';
import {Pagination} from "react-bootstrap";

type Props = {
	amountOfPages: number
	onChangePage: (i: number) => void
}

const PaginationComponent = ({amountOfPages, onChangePage}: Props) => {
	const paginationItems = []
	const [currentPage, setCurrentPage] = useState<number>(1)

	const handleClick = (currentPage: number) => {
		setCurrentPage(currentPage)
		onChangePage(currentPage)
	}
	for (let i = 1; i <= amountOfPages; i++) {
		paginationItems.push(<Pagination.Item key={i} onClick={() => handleClick(i)} active={i === currentPage}>{i}</Pagination.Item>)
	}

	return (
		<div>
			<Pagination size='lg'>
				{paginationItems}
			</Pagination>
		</div>
	);
};

export default PaginationComponent;