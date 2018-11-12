import React from 'react';
import {Button} from 'primereact/button';


//CSS
import '../../components/Card/Card.css'

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// trocar o src da tag <img> para o link salvo da foto do alimento adicionado
let alimento = '';
const pegardados = () => {	
	fetch('http://localhost:3001/food/1')
	.then(response => response.json())
	.then(food => {
		alimento = food.imglink
	});
}
pegardados();
const Card = ({ name, email, id } ) => {	
	return (
		<div className='col-lg-4 col-md-6 col-sm-12 cardstyle'>
			<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
				<img alt='robots' src={`${ alimento }?200x200`}/>		
				<div>
					<h2> { name } </h2>
					<p> { email }</p>
					<div className='cardbuttons'>
						<Button className="p-button-raised p-button-rounded p-button-success " label="Add na refeiçao" icon="pi pi-check" />
						<Button className="p-button-raised p-button-rounded" label="Editar" />
						<Button className="p-button-raised p-button-rounded p-button-danger " label="Excluir" />
					</div>
					
				</div>
			</div>
		</div>
	);
}

export default Card;