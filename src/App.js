import React, { useState } from 'react';

// components
import {
	Container,
	Grid,
	Button
} from '@mui/material';
import SearchBar from './components/SearchBar';
import ProductCard from './components/ProductCard';

const initialProducts = [
	{
		image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
		name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
		price: 109.95,
		discountRate: null,
		ratings: 5,
		reviews: 120
	},
	{
		image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
		name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
		price: 109.95,
		discountRate: null,
		ratings: 5,
		reviews: 120
	},
	{
		image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
		name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
		price: 109.95,
		discountRate: null,
		ratings: 5,
		reviews: 120
	},
	{
		image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
		name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
		price: 109.95,
		discountRate: null,
		ratings: 5,
		reviews: 120
	},
	{
		image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
		name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
		price: 109.95,
		discountRate: null,
		ratings: 5,
		reviews: 120
	},
	{

		image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
		name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
		price: 109.95,
		discountRate: null,
		ratings: 5,
		reviews: 120
	},
];

function App() {
	const [visibleProducts, setVisibleProducts] = useState(3);
	const productsToShow = initialProducts.slice(0, visibleProducts);

	const handleLoadMore = () => {
		setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 3);
	};

	return (
		<div className="App">
			<SearchBar />
			<Container maxWidth="lg" style={{ marginTop: '20px' }}>
				<Grid container spacing={2}>
					{productsToShow.map((product, index) => (
						<Grid key={index} item xs={12} sm={6} md={4}>
							<ProductCard {...product} />
						</Grid>
					))}
					{visibleProducts < initialProducts.length && (
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

export default App;
