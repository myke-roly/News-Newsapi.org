import React from 'react';

import New from './New';

const ListNews = ({noticias}) => (
  <div className="news">
    
    {noticias.map(noticia => (
      <New 
        key={noticia.title}
        noticia={noticia} />
    ))}
  </div>
  )
export default ListNews;
