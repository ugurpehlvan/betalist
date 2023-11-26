import React from 'react';
import { useNavigate } from 'react-router';

// components
import { 
    AppBar, 
    Card,
    IconButton,
    InputBase,
    Grid,
} from '@mui/material';

// icons
import { Cancel, Search, ShoppingCart } from '@mui/icons-material';

const SearchBar = ({ searchParam, onChange, onSearchClear, onSearchClick }) => {
	const navigate = useNavigate();

	return (
		<AppBar style={{ display: "flex" }} position="static">
			<Grid sx={{
				backgroundColor: 'white',
				p: '1rem 0',
			}}>
				<Grid maxWidth={1360} container sx={{
					display: 'flex',
					justifyContent: 'space-around',
					alignItems: 'center',
					margin: '0 auto',
				}}>
					<img style={{ width: "120px" }} src='./app-logo.png' alt='logo' className='logo' />
					<Card
						component="form"
						sx={{ p: '0px 0px 0px 10px', display: 'flex', alignItems: 'center', width: 700, borderRadius: '20px' }}
					>
						<IconButton sx={{ p: '0 5px 0 5px' }} aria-label="menu">
							<Search />
						</IconButton>
						<InputBase
							sx={{ ml: 1, flex: 1 }}
							placeholder="Searching for..."
							value={searchParam}
							onChange={(e) => onChange(e.target.value)}
						/>
						{searchParam && 
							<IconButton 
								onClick={onSearchClear} 
								sx={{ p: '0 5px 0 5px' }} 
								aria-label="close"
							>
								<Cancel />
							</IconButton>
						}
						<IconButton id='search-button'
							type="button"
							onClick={onSearchClick}
							sx={[
								{
									p: '12.5px 50px',
									backgroundColor: '#C24B5A',
									borderRadius: '0px 20px 20px 0px',

								},
								{
									'&:hover': { backgroundColor: '#de3b50' }
								}
							]} aria-label="search">
							<div style={{ fontSize: '16px', color: 'white' }}>Search</div>
						</IconButton>
					</Card>
					<IconButton onClick={() => navigate("/cart")}>
						<ShoppingCart />
					</IconButton>
				</Grid>
			</Grid>
		</AppBar>
	);
};

export default SearchBar;