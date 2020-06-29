import React from 'react';
import Routes from './routes'
import api from './services/api';
import logo from '../src/assets/img/logo-white.png'
import {Image} from 'react-bootstrap/'

function App() {
  api.get('/startup')

  return (

    <body>

      <div>
        <h1 class="title" >Encontre, salve e faça.</h1>

      </div>
      <div class="container">
        <Routes />
        <br></br>
        <br></br>
        <br></br>
      </div>
      <div id="grad1"></div>

      <footer id="grad2">
      <Image className="logo-footer"
                            src={logo}
                        />
        <h5 class="text-footer">made with love by GLLL, 2020</h5>
        <h6 class="text-footer"> Frameworks utilizados: </h6>
        <h6 class="text-footer">React bootstrap</h6>
      </footer>
    </body>


  );
}

export default App;