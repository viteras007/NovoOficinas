import React from 'react';

//CSS
import '../../components/Card/Card.css'

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// trocar o src da tag <img> para o link salvo da foto do alimento adicionado

const Card = ({ name, email, id } ) => {	
	return (
		<div className='col-lg-4 col-md-4 col-sm-12 testezao'>
			<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
				<img alt='robots' src={`https://robohash.org/${ id }?200x200`}/>		
				<div>
					<h2> { name } </h2>
					<p> { email }</p>
				</div>
			</div>
		</div>
	);
}

export default Card;