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
		fetch('http://localhost:3001/allfood')
			.then(response => response.json())
			.then(food => this.setState({ alimentos: food }));		
	}

	onSearchChange = (event) => {
		this.setState( { searchfield: event.target.value } );
				
	}

	adicionarAlimento = (id) => {
		/*
		fetch('http://localhost:3001/buscafood',{
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				id: id
			})
		})
			.then(response => response.json())
			.then(food => () =>{
				console.log(food)
			})*/
			alert("ADD"+id)		
	}
	removerAlimento = () => {
		alert("REMOVER ALIMENTO");
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
			<div className='tc container'>
				<div className='centralizar'>
					<h1 className='f2'>Alimentos</h1>
					<SearchBox searchChange={this.onSearchChange}/>
				</div>
				<div>
					<CardList add={this.adicionarAlimento} alimentos={alimentosBuscados}/>
				</div>
			</div>
			);
		}	
	}
}