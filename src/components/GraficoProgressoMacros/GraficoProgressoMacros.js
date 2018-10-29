import React, { Component } from 'react';

import ProgressBar from 'react-bootstrap/lib/ProgressBar';

// CSS
import '../../components/GraficoProgressoMacros/GraficoProgressoMacros.css';

export default class GraficoProgressoMacros extends Component {

	constructor(props) {
        super(props);
        this.state = {
            proteina: '30',
            gordura: '40',
            carboidrato: '50'
        }
	}

	render() {
        const { proteina, gordura, carboidrato } = this.state;
		return (
            <div className="">
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Progresso de Macro Nutrientes</h1>
                    </div>
                </div>
                <p>Proteína</p><ProgressBar now={proteina} label={`${proteina}%`} />
                <p>Gordura</p><ProgressBar now={gordura} label={`${gordura}%`} />
                <p>Carboidrato</p><ProgressBar now={carboidrato} label={`${carboidrato}%`} />
            </div>
		)
	}
}