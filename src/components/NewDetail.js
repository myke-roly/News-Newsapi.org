import React from 'react';
import New from './New';
import ListNews from './ListNews';

const NewDetail = (props) => {
  return (
    <div className="detail-new">
      <div className="new-header">
        <h2>title</h2>
        <p>Desctioption</p>
        <p>Date</p>
      </div>
      <section className="social">
        <a href="#!">Facebook</a>
        <a href="#!">twitter</a>
      </section>
      <main className="main">
        <img src="#!" alt="" />
        <section className="news-similars">
          <h4></h4>
        </section>
      </main>
      <footer  className="list-news-footer">
        {/* <ListNews noticias={props.noticias}/> */}
      </footer>
    </div>
  )
}

export default NewDetail
