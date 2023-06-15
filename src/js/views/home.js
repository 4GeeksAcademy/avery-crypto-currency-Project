import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { CharacterCard } from "../component/CharacterCard";


import { Context } from "../store/appContext.js"
import { Link } from "react-router-dom";

export const Home = () => {
	const {store, actions} = useContext(Context)

	useEffect(()=>{
		actions.fetchStarWars("vehicles")
		actions.fetchStarWars("people")
		actions.fetchStarWars("planets")
	}, [])
	return(
	<>
		
		<Link to="/people/">
			<h2>
				Crypto Currencies
			</h2>
		</Link>
		<div className="container-fluid overflow-scroll">
			<CharacterCard 
			widget="people"
			/>
		</div>
		
	</>
);}

