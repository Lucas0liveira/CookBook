import React from 'react';
import Routes from './routes'

function App() {
  return (

    <body>

      <div>
        <h1 class="title" >Encontre, salve e faça.</h1>

      </div>
      <div class="container">
        <Routes />
      </div>
      <footer>
        <h4 class="text-center">CookBook</h4>
        <h5 class="text-center">made with love by GLLL, 2020</h5>
        <h6 class="text-center"> Frameworks utilizados: </h6>
        <h6 class="text-center">React bootstrap</h6>
      </footer>
    </body>


  );
}

export default App;