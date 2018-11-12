import React from 'react';
import {Button} from 'primereact/button';


//CSS
import '../../components/Card/Card.css'

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// trocar o src da tag <img> para o link salvo da foto do alimento adicionado

const Card = ({ name, link, id } ) => {	
	return (
		<div className='col-lg-4 col-md-6 col-sm-12 cardstyle'>
			<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
				<img alt='robots' src={`${ link }?200x200`}/>		
				<div>
					<h2> { name } </h2>
					<p> {  }</p>
					<div className='cardbuttons'>
						<Button id="btadd" className="p-button-raised p-button-rounded p-button-success " label="Add na refeiçao" icon="pi pi-check" />
					</div>
					
				</div>
			</div>
		</div>
	);
}

export default Card;