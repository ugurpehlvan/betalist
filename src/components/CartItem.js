import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const CartItem = ({ name, price, quantity  }) => {
	return (
		<Card>
			<CardContent>
				<Typography variant="h6">{name}</Typography>
				<Typography variant="body1">Price: ${price}</Typography>
				<Typography variant="body1">Quantity: {quantity}</Typography>
				<Typography variant="body1">Total: ${price * quantity}</Typography>
				<Button variant="outlined" color="secondary">
					Remove
				</Button>
			</CardContent>
		</Card>
	);
};

export default CartItem;