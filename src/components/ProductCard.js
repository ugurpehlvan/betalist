import React, { useState } from 'react';

// components
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Button,
    IconButton,
} from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const QuantityButtons = ({ quantity, onIncrease, onDecrease }) => {
  return (
    <div>
        <IconButton onClick={onDecrease} disabled={quantity === 1}>
            <RemoveIcon />
        </IconButton>
        <Typography variant="body2">{quantity}</Typography>
        <IconButton onClick={onIncrease}>
            <AddIcon />
        </IconButton>
    </div>
  );
};

const ProductCard = ({ image, name, price, discountRate, ratings, reviews }) => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    };

    return (
        <Card>
            <CardMedia component="img" alt={name} height="140" image={image} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Price: ${price}
                </Typography>
                {discountRate && (
                    <Typography variant="body2" color="error">
                        Discount: {discountRate}%
                    </Typography>
                )}
                <Typography variant="body2">
                    Ratings: {ratings} ({reviews} reviews)
                </Typography>
                <QuantityButtons
                    quantity={quantity}
                    onIncrease={handleIncrease}
                    onDecrease={handleDecrease}
                />
                <Button variant="contained" color="primary" fullWidth>
                    Add to Cart
                </Button>
            </CardContent>
        </Card>
    );
};

export default ProductCard;