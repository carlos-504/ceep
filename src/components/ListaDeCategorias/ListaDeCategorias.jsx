import React, { Component } from "react";
import "./style.css";

class ListaDeCategorias extends Component {

  constructor(){
    super();
    this.state = {
      categorias: []
    };
    this._criarCategorias = this._criarCategorias.bind(this);
  }

  componentDidMount(){
    this.props.categorias.inscrever(this._criarCategorias);
  }

  componentWillUnmount(){
    this.props.categorias.desinscrever(this._criarCategorias);
  }

  _criarCategorias(categorias){
    this.setState({...this.state, categorias}) 
  }

  _handlerEventoInput(e) {
    // O e.key é a tecla que foi pressionada
    const tecla = e.key;
    if (tecla === "Enter") {
      let valorCategoria = e.target.value;
      this.props.adicionarCategoria(valorCategoria);
    }
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.state.categorias.map((categoria, index) => {
            return (
              <li key={index} className="lista-categorias_item">
                {categoria}
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          placeholder="Adicionar Categoria"
          className="lista-categorias_input"
          onKeyUp={this._handlerEventoInput.bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;
