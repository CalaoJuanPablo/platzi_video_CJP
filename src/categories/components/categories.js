import React from 'react';
import Category from './category';
import Media from '../../playlist/components/media'
import './categories.css';
import Search from '../../widgets/containers/search';

function Categories(props) {
  return (
    <div className="Categories">
      <Search />
      {
        props.isLoading &&
        <p>Buscando tus video favoritos...</p>
      }
      {
        props.search.map(item => (
          <Media
            key={item.get('id')}
            id={item.get('id')}
            cover={item.get('cover')}
            title={item.get('title')}
            author={item.get('author')}
            type={item.get('type')}
            openModal={props.handleOpenModal}
          />
        ))
      }
      {
        props.categories.map((item) =>{
          return (
            <Category
              key={item.get('id')}
              description={item.get('description')}
              title={item.get('title')}
              playlist={item.get('playlist')}
              handleOpenModal={props.handleOpenModal}
            />
          )
        })
      }
    </div>
  )
}

export default Categories
