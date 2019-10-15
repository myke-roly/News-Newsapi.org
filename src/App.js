/**IMPORTANTE
 * Crear una referecia a la API que estamos utlizando
 * newsapi.org
 * API Key -- 31363a3726d447d2a0eb7292bdb0fd09
 */

import React, { Component } from 'react';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

//Coponents
import Header from './components/Header';
import MenuBurguer from './components/MenuBurguer';

const ListNews = React.lazy(() => import('./components/ListNews'));

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      noticias: [],
      openMenu: false
    }
    this.showCategory = this.showCategory.bind(this)
  }

  componentDidMount() {
    this.showCategory();
  }

  showCategory = async (category = 'general') => {
    const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${category}&apiKey=31363a3726d447d2a0eb7292bdb0fd09`
    const fetchApi = await fetch(url);
    const noticias = await fetchApi.json();

    this.setState({noticias: noticias.articles});
    // console.log(this.state);
  }

  openMenuBurguer = () => {
    this.setState({openMenu: !this.state.openMenu})
  }

  render() {
    return (
      <div className="container">
        <div className="background"></div>
          {/* <MenuBurguer showCategory={this.showCategory} /> */}
          <Header showCategory={this.showCategory} />
          
          <React.Suspense fallback={<div className="loading">Loading...</div>/*Podemos usar Suspense para crear un Loading mientras se carga el componente */}>
            <ListNews noticias={this.state.noticias}/>
          </React.Suspense>
      </div>
    )
  }
}
