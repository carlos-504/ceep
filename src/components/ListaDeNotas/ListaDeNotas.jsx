import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";
class ListaDeNotas extends Component {

  constructor(){
    super();
    this.state = {
      notas: [] 
    }
    this._criarNotas = this._criarNotas.bind(this)
  }

  componentDidMount(){
    this.props.notas.inscrever(this._criarNotas)
  }

  componentWillUnmount(){
    this.props.notas.desinscrever(this._criarNotas)
  }
  _criarNotas(notas){
    this.setState({...this.state, notas})
  }

  render() {
    return (
      <ul className="lista-notas">
        {this.state.notas.map((nota, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota 
              indice={index}
              apagarNota={this.props.deletarNota} 
              titulo={nota.titulo} 
              data={nota.data} 
              texto={nota.texto}
              categoria={nota.categoria}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
