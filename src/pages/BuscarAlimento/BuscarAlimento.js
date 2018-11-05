// React
import React, { Component } from 'react';

// Component
import SearchBox from "../../components/SearchBox/SearchBox";
import Scroll from "../../components/Scroll/Scroll";
import CardList from "../../components/CardList/CardList";


//CSS
import '../../pages/BuscarAlimento/BuscarAlimento.css'


export default class BuscarAlimento extends Component {
    constructor(){
	    super()
	    this.state = {
			alimentos: [],
			searchfield: ''
	    }
    }

    componentDidMount() {
        // colocar aqui a busca no banco de dados de onde vai consumir os dados
		fetch('http://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ alimentos: users }));		
	}

	onSearchChange = (event) => {
		this.setState( { searchfield: event.target.value } );
				
	}

    render(){
		const { alimentos, searchfield } = this.state;
		const alimentosBuscados = alimentos.filter(alimento =>{
			return alimento.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		if(!alimentos.length){
			return <h1 className='tc'>Loading</h1>
		} else { 
			return(
			<div className='tc container containercss'>
				<div className='centralizar'>
					<h1 className='f2'>Alimentos</h1>
					<SearchBox searchChange={this.onSearchChange}/>
				</div>
				<div className='fundobusca'>
					<Scroll>
						<CardList alimentos={alimentosBuscados}/>
					</Scroll>
				</div>
			</div>
			);
		}	
	}
}