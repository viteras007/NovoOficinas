import React from 'react';
import { Button } from 'primereact/button';


//CSS
import '../../components/Card/Card.css'

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// trocar o src da tag <img> para o link salvo da foto do alimento adicionado

const Card = ({ name, link, id, add }) => {

	return (
		<div className='col-lg-4 col-md-6 col-sm-12 cardstyle'>
			<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
				<img alt='alimentos' className="imgsize" src={`${link}?200x200`} />
				<div>
					<h2> {name} </h2>
					<p> {}</p>
					<div className='cardbuttons'>
						<Button className="p-button-raised p-button-rounded p-button-success " label="Add na refeiçao" icon="pi pi-check" onClick={() => {
							alert("ID DO BAGUI: " + id)
							let iddadieta;

							// busca dieta atual do usuario
							fetch('http://localhost:3001/buscadieta', {
								method: 'post',
								headers: { 'Content-Type': 'application/json' },
								body: JSON.stringify({
									idusuario: JSON.parse(localStorage.getItem('user')).Id
								})
							})
								.then(response => response.json())
								.then(dieta => {
									iddadieta = dieta[0].id
									console.log(iddadieta)
								})


							//busca os dados do alimento
							let caloriaAlimento
							let proteinaAlimento
							let carboidratoAlimento
							let gorduraAlimento

							fetch('http://localhost:3001/buscafood', {
								method: 'post',
								headers: { 'Content-Type': 'application/json' },
								body: JSON.stringify({
									id: id
								})
							})
								.then(response => response.json())
								.then(food => {
									caloriaAlimento = food.caloria;
									proteinaAlimento = food.proteina;
									carboidratoAlimento = food.carboidrato;
									gorduraAlimento = food.gordura;

									console.log(`
							iddieta: ${iddadieta}
							caloria: ${caloriaAlimento}
							proteina: ${proteinaAlimento}
							carboidrato: ${carboidratoAlimento}
							gordura: ${gorduraAlimento}
							`)

									fetch('http://localhost:3001/refeicao', {
										method: 'post',
										headers: { 'Content-Type': 'application/json' },
										body: JSON.stringify({
											iddieta: iddadieta,
											caloria: caloriaAlimento,
											proteina: proteinaAlimento,
											carboidrato: carboidratoAlimento,
											gordura: gorduraAlimento
										})
									})
										.then(response => response.json())
										.then(refeicao => {
											console.log("REFEICAO:")
											console.log(refeicao)
										})
								})
						}}
						/>
						<Button className="p-button-raised p-button-rounded p-button-danger " label="Excluir Alimento" icon="pi pi-check" onClick="removerAlimento" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;