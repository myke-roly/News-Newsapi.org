import React, { Component } from 'react'

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { category : 'general'};
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick = (e) => {
    this.setState({
      category: e.target.value
    }, () => {
      this.props.showCategory(this.state.category)
    });
    console.log(this.state.category);
  }

  

  render() {
    console.log(this.props)
    return (
      <div className="category">  
        <button onClick={this.handleClick} value="general" className="btn active">General</button>
        <button onClick={this.handleClick} value="businnes" className="btn">Negocios</button>
        <button onClick={this.handleClick} value="technology" className="btn">Tecnología</button>
        <button onClick={this.handleClick} value="sports" className="btn">Deportes</button>
        <button onClick={this.handleClick} value="entertainment" className="btn">Entretimiento</button>
        <button onClick={this.handleClick} value="science" className="btn">Ciencia</button>
        <button onClick={this.handleClick} value="health" className="btn">Salud</button>
      </div>
    )
  }
}
