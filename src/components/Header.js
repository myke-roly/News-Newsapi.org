import React, {Component} from 'react';


export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { category : 'general'};
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick = (e) => {
    this.setState({
      category: e.target.name
    }, () => {
      this.props.showCategory(this.state.category)
    });
  }
  
  render() {
    return (
      <header className="header">
        <h1 className="title">hoy</h1>
        <div className="category">
          <button onClick={this.handleClick} name="general" className="btn">General</button>
          <button onClick={this.handleClick} name="business" className="btn">Negocios</button>
          <button onClick={this.handleClick} name="technology" className="btn">Tecnología</button>
          <button onClick={this.handleClick} name="sports" className="btn">Deportes</button>
          <button onClick={this.handleClick} name="entertainment" className="btn">Entretimiento</button>
          <button onClick={this.handleClick} name="science" className="btn">Ciencia</button>
          <button onClick={this.handleClick} name="health" className="btn">Salud</button>
          <a href="https://newsapi.org" className="copy">&copy; NewsApi</a>
        </div>
        
      </header>
    )
  }
}
