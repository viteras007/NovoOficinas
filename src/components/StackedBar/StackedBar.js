import React, { Component } from 'react';
import { Chart } from 'primereact/chart';

import indicadoresInstituicao from '../../mock/indicadoresInstituicao';


import SelectArea from '../../components/selectArea/selectArea'

export default class StackedBar extends Component {

	anos = [];
	qualisA1;
	qualisA2;
	qualisB1;
	qualisB2;
	qualisB3;
	qualisB4;
	qualisB5;
	qualisC;
	qualisSem;

	anos = [];

	constructor(props) {
		super(props);
		this.qualisA1 = indicadoresInstituicao.listaQualisA1;
		this.qualisA2 = indicadoresInstituicao.listaQualisA2;
		this.qualisB1 = indicadoresInstituicao.listaQualisB1;
		this.qualisB2 = indicadoresInstituicao.listaQualisB2;
		this.qualisB3 = indicadoresInstituicao.listaQualisB3;
		this.qualisB4 = indicadoresInstituicao.listaQualisB4;
		this.qualisB5 = indicadoresInstituicao.listaQualisB5;
		this.qualisC = indicadoresInstituicao.listaQualisC;
		this.qualisSem = indicadoresInstituicao.listaQualisC;

		let a = indicadoresInstituicao.listaQualisTodos;
		for (let i = 0; i < a.length; i++){
			this.anos.push(a[i].ano);
		}
	}

	render() {
		const stackedData = {
			labels: this.anos,
			datasets: [{
				type: 'bar',
				label: 'Qualis A1',
				backgroundColor: '#99a',
				data: [
					this.qualisA1[0]['cienciaComputacao']
				]
			}, {
				type: 'bar',
				label: 'Qualis A2',
				backgroundColor: '#888',
				data: [
					this.qualisA2[0]['cienciaComputacao']
				]
			}, {
				type: 'bar',
				label: 'Qualis B1',
				backgroundColor: '#777',
				data: [
					this.qualisB1[0]['cienciaComputacao']
				]
			},
			{
				type: 'bar',
				label: 'Qualis B2',
				backgroundColor: '#666',
				data: [
					this.qualisB2[0]['cienciaComputacao']
				]
			},
			{
				type: 'bar',
				label: 'Qualis B3',
				backgroundColor: '#555',
				data: [
					this.qualisB3[0]['cienciaComputacao']
				]
			}, {
				type: 'bar',
				label: 'Qualis B4',
				backgroundColor: '#444',
				data: [
					this.qualisB4[0]['cienciaComputacao']
				]
			}, {
				type: 'bar',
				label: 'Qualis B5',
				backgroundColor: '#333',
				data: [
					this.qualisB5[0]['cienciaComputacao']
				]
			},
			{
				type: 'bar',
				label: 'Qualis C',
				backgroundColor: '#222',
				data: [
					this.qualisC[0]['cienciaComputacao']
				]
			},
			{
				type: 'bar',
				label: 'Sem qualis ',
				backgroundColor: '#111',
				data: [
					this.qualisSem[0]['cienciaComputacao']
				]
			}]
		};

		const stackedOptions = {
			tooltips: {
				mode: 'index',
				intersect: false
			},
			responsive: true,
			scales: {
				xAxes: [{
					stacked: true,
				}],
				yAxes: [{
					stacked: true
				}]
			}
		};

		return (
			<div>
				<SelectArea></SelectArea>
				<div className="content-section implementation">
					<h3>Stacked</h3>
					<Chart type="bar" data={stackedData} options={stackedOptions} />
				</div>
			</div>
		)
	}
}