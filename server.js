import express from 'express';
import App from './dist/ssr/app';
import React from 'react';
import { StaticRouter } from 'react-router';
import { renderToStaticMarkup } from 'react-dom/server'
import data from './src/api.json';
import Base from './src/pages/components/base';

const app = express();

app.use(express.static('dist'))
app.use('/images', express.static('images'))

app.get('/*', (req, res) => {
  // fetch('dame datos').then((datos)=>{

  // })
  res.write(renderToStaticMarkup(
    <Base
      title="Platzi Video"
      css="css/app.css"
      js="js/app.js"
    >
      <StaticRouter location={req.url}>
        <App data={data} />
      </StaticRouter>
    </Base>
  ));
  res.end();
})

app.listen(3000)

console.log('El server prendió en puerto 3000');