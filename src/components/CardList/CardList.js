import React from 'react';
import Card from '../Card/Card';

//CSS
import '../../components/CardList/CardList.css'
let arrayLink = [];
const pegardados = () => {
	fetch('http://localhost:3001/allfood')
	.then(response => response.json())
	.then(food => {
		let i = 0;
		food.map((alimento, i) => {			
			arrayLink.push(food[i].imglink)			
		})		
	})
}
pegardados();

const CardList = ({ alimentos, add }) => {	
	const CardArray = alimentos.map((user, i) =>{		
		return( 
			<Card
				add={add}							
				key={alimentos[i].Id} 
				id={alimentos[i].Id} 
				name={alimentos[i].name}
				link={arrayLink[i]}							
			/>
			);
	})
	return(
		<div>
			{CardArray};
		</div>
	);
}
export default CardList;