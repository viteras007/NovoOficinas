import React from 'react';
import Card from '../Card/Card';

//CSS
import '../../components/CardList/CardList.css'

const CardList = ({ alimentos }) => {
	const CardArray = alimentos.map((user, i) =>{
		return( 
			<Card 
				key={alimentos[i].id} 
				id={alimentos[i].id} 
				name={alimentos[i].name} 
				email={alimentos[i].email}
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