import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import Products from 'pages/products';
import Cart from 'pages/cart';

// services
import { axiosClient } from 'service';

function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		const sessionId = localStorage.getItem('sessionId');
		if (sessionId) {
			axiosClient.defaults.headers.common['Session-ID'] = sessionId;
			setIsAuthenticated(true);
			return;
		} else {
			axiosClient.get("/createsession").then((res) => {
				const sessionId = res.data;
				axiosClient.defaults.headers.common['Session-ID'] = sessionId;
				localStorage.setItem('sessionId', sessionId);
				setIsAuthenticated(true);
			}).catch((err) => {
				console.log(err);
			});
		}
	}, []);

	if (!isAuthenticated) {
		return <div>Loading...</div>;
	}

	return (
		<div className="App">
			<BrowserRouter basename={"/"}>
				<Routes>
					<Route path="/" element={<Products />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
