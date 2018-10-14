// Mock
import instituicoes from "../../mock/instituicoes";

// React
import React, { Component } from 'react'

// PrimeReact
import { Dropdown } from 'primereact/dropdown';

// Components
import StackedBar from "../../components/StackedBar/StackedBar";
import SelectInstituicoes from "../../components/selectInstituicoes/selectInstituicoes";


export default class IndicadorInst extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaInstituicoes: this.mapInstituicoes(instituicoes)
        };
    }

    mapInstituicoes(instituicoesArr) {
        let instituicaoAtual, indexInst = 0;
        let instMapped = [];
        for(indexInst in instituicoesArr) {
            instituicaoAtual = instituicoesArr[indexInst];
            instMapped.push({ label: instituicaoAtual.nome, value: instituicaoAtual.id });
        }
        return instMapped;
    }

    render() {
        return (
        <div>
            <SelectInstituicoes/>
            <StackedBar/>
        </div>
        )
    }
}
