import React, { useEffect, useContext } from 'react';

// components
import { Container, Typography, Grid } from '@mui/material';
import CartItem from 'components/CartItem';

// services
import { CartContext } from 'context';

const CartPage = () => {
	const {
		state: { carts },
		getCarts,
	} = useContext(CartContext);

	useEffect(() => {
		getCarts();
	}, []);

  return (
    <Container style={{ marginTop: "64px" }}>
		<Typography variant="h4" gutterBottom>
			Shopping Cart
		</Typography>
		{carts.length === 0 ? (
			<Typography variant="body1">Your cart is empty.</Typography>
		) : (
			<Grid container spacing={2}>
				{carts?.map((item) => (
					<Grid item xs={12} sm={6} md={4} key={item?.productId}>
						<CartItem {...item} />
					</Grid>
				))}
			</Grid>
		)}
    </Container>
  );
};

export default CartPage;