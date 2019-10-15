import React from 'react';

const New = ({noticia}) => {
  // Validacion si existe una Imagen
  const image = (noticia.urlToImage) ? <img  className="img" src={noticia.urlToImage} alt={noticia.title} /> : "no existe la imagen";
  return (

    <div className="new">
      <div className="a">
        {image}
        <div className="new-info"> 
          <h2 className="new-title">{noticia.title}</h2>
          <small>Autor: {noticia.author}</small>
          <p className="date">{noticia.publishedAt}</p>
          <p className="description">{noticia.description}</p>
          <section className="social-media">
            <a href={noticia.url} target='__blank' className="url">fuente</a>
            <div>
              <a href="https://www.facebook.com" target="__blank">
                <img src="http://www.rio11.club/wp-content/uploads/2018/03/icono-face.png" alt="facebook" />
              </a>
              <a href="https://www.twitter.com" target="__blank">
                <img src="https://png.pngtree.com/element_our/md/20180301/md_5a97a256bfab4.png" alt="twitter" />
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default New;