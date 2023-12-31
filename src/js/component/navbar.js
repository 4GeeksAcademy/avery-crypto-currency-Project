import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";

export const Navbar = () => {
	const {store, actions} = useContext(Context);

	return (
		<nav className="navbar navbar-light bg- mb-3 sticky-top">
			<Link to="/">
			<h1>Crypto</h1>
			</Link>
			<div className="dropstart btn-group ml-auto pe-5">
				<button className="search-btn" type="button" aria-label="Menu">
					<span className="search-box">
						<span className="search-inner"></span>
					</span>
					<strong>Search</strong>
				</button>
				<button type="button" className="btn btn-info bg-warning text-black dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
					<strong>Favorites</strong>
				</button>
				<ul className="dropdown-menu">
					{store.favorites.map((favorite, index)=>{
						return(
							<div className="d-flex flex-row" key={index}>
								<li key={index}><a className="dropdown-item d-flex flex-row overflow-hidden"  href="#">{favorite.itemName}</a></li>
								<button onClick={()=>{actions.deleteFavorite(favorite.itemName)}} type="button" className="badge bg-info bg-danger mx-auto">X</button>
							</div>
						)
					})||<p>How about adding favorites?</p>}
					<li><a className="dropdown-item" onClick={()=>{actions.deleteAllFavorites()}}>Clear All</a></li>
				</ul>
				</div>
		</nav>
	);
};
