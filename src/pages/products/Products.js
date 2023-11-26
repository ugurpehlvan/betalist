import React, { useEffect, useState, useContext } from 'react';

// components
import {
	Container,
	Grid,
	Button
} from '@mui/material';
import SearchBar from 'components/SearchBar';
import ProductCard from 'components/ProductCard';

// context
import { ProductContext } from 'context';

function Products() {
    const {
		getProducts,
        searchProducts,
		state: { products },
	} = useContext(ProductContext);

    const [searchParam, setSearchParam] = useState('');
	const [visibleProducts, setVisibleProducts] = useState(3);
	const productsToShow = products.slice(0, visibleProducts);

	const handleLoadMore = () => {
		setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 3);
	};

    const handleSearchClick = () => {
        searchProducts(searchParam);
    }

    const handleSearchChange = (name) => {
        setSearchParam(name);
    };

    const handleSearchClear = () => {
        setSearchParam('');
        getProducts();
    };

    useEffect(() => {
        getProducts();
    }, []);

	return (
		<div>
			<SearchBar 
                searchParam={searchParam} 
                onChange={handleSearchChange}
                onSearchClick={handleSearchClick}
                onSearchClear={() => handleSearchClear()}
            />
			<Container maxWidth="lg" style={{ marginTop: '20px' }}>
				<Grid container spacing={2}>
					{productsToShow.map((product, index) => (
						<Grid key={index} item xs={12} sm={6} md={4}>
							<ProductCard {...product} />
						</Grid>
					))}
					{visibleProducts < products.length && (
						<Grid item style={{ textAlign: 'center' }} xs={12}>
							<Button variant="contained" color="primary" onClick={handleLoadMore}>
								Load More
							</Button>
						</Grid>
					)}
				</Grid>
			</Container>
		</div>
	);
}

export default Products;
