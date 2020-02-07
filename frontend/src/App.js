import React, { useState, useEffect } from 'react';
import api from './services/api'

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

import DevForm from './components/DevForm'
import DevItem from './components/DevItem'

// Os 3 conceitos do react 
// Componente: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
/// Propriedade: Informção que um componente PAI passa para o componente FILHO
// Estado: Informações mantidas pelo componente (Lembrar de pesquisar: Imutabilidade)


function App() {
  const [devs, setDevs] = useState([])

  useEffect(() => {
    async function loadDevs(){
      const response = await api.get('/devs')

      setDevs(response.data)
    }

    loadDevs()
  }, [])

  async function handleAddDev(data){


    const response = await api.post('/devs', data )

      setDevs([...devs, response.data])
  }

  return(
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSumit={handleAddDev} />
      </aside>

      <main>
        <ul>
          {devs.map(dev => (//sem {} e o retorn, pois ja esta retornando
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
 
  );
}

export default App;
