import React, { useState, useContext } from 'react';

// components
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    IconButton,
    Box,
    styled
} from '@mui/material';
import Rating from '@mui/material/Rating';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

// context
import { ProductContext } from 'context';

const DiscountBadge = styled(Typography)(({ theme }) => ({
    background: "#C24B5A",
    color: theme.palette.common.white,
    padding: "3px 6px",
    borderRadius: "16px",
    fontSize: "12px",
    margin: theme.spacing(0.5),
    position: 'absolute',
  }));

const iconStyle = {
    width: "24px", 
    height: "24px",
    borderRadius: "4px", 
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center",
    border: "1px solid #C24B5A",
    margin: "2px 0px"
};

const ProductCard = ({ id, image, name, price, discount, rating, originalPrice, quantity }) => {
    const { addToCart, subtractFromCart } = useContext(ProductContext);

    const fallbackImageUrl = 'https://placekitten.com/300/200'; 

    const [imageError, setImageError] = useState(false);
    const handleIncrease = () => {
        addToCart(id);
    };

    const handleDecrease = () => {
        subtractFromCart(id);
    };

    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <Card>
             {discount && (
                <DiscountBadge variant="body2">{discount}</DiscountBadge>
            )}
            <CardMedia
                component="img" 
                alt={name} 
                height="260" // Adjust the height as needed
                style={{ objectFit: 'cover', width: '100%' }}
                image={imageError ? fallbackImageUrl : image}   
                onError={handleImageError} 
            />
            <CardContent>
                <Box display="flex" flexDirection="row">
                    <Box flexGrow={1}>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Rating
                            name="rating"
                            value={rating}
                            max={5}
                            precision={0.5}
                            readOnly
                        />
                        <Typography variant="body2" color="textSecondary">
                            <span style={{ color: "#C24B5A" }}>${price}</span> &nbsp; <strike>${originalPrice}</strike>
                        </Typography>
                    </Box>
                    <Box>
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <Box sx={{ ...iconStyle, ...(quantity === 0 ? { border: "1px solid #ffff",  } : { }) }}>
                            {Number(quantity) > 0 && (
                                <IconButton onClick={handleDecrease} disabled={quantity === 0}>
                                    <RemoveIcon />
                                </IconButton>
                            )}
                        </Box>
                        <Box sx={{ ...iconStyle, ...(quantity === 0 ? { border: "1px solid #ffff",  } : { }) }}>
                            <Typography variant="body2">{quantity || ""}</Typography>
                        </Box>
                        <Box sx={iconStyle}>
                            <IconButton onClick={handleIncrease}>
                                <AddIcon />
                            </IconButton>
                        </Box>
                    </Box>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default ProductCard;