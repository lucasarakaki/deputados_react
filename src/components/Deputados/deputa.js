import React, { Component } from 'react';
import api from '../api/api';

import './deputa.css';

class Search extends Component
{

    state = {
        deputados: [],
    }

    componentDidMount()
    {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get(`/api/v2/deputados`);

        const { docs } = response.data;

        console.log(response.data.dados);
        this.setState({ deputados: response.data.dados });
    }

    render()
    {   
        const {deputados} = this.state;
        
        return(
        <div className="Takeshi3">
            {
                deputados.map((deput, k) => (
                    <div className="um" key={k}>
                        <div className="Takeshi4">
                            <img src={`${deput.urlFoto}`} class="image" />
                        </div>
                        <div className="Takeshi5">
                            <p>Deputado: { deput.nome }</p>
                            <p>Partido: { deput.siglaPartido } - { deput.siglaUf }</p>
                            <p>E-mail: { deput.email }</p>
                        </div>
                    </div>
                ))
            }
            
        </div>
        );
    }
}

export default Search;
