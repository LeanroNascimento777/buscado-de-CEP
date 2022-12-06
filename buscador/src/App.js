import './styles.css'
// imports
import { useState } from 'react'; // usStates
import {FiSearch} from 'react-icons/fi' // Icons
import api from './Services/api' // API service


function App(){

  const[input, setInput] = useState('')
  const [cep, setCep] = useState({});

  async function handleSearch(){
    

    if(input === ''){
      alert(" Digite alguma coisa!")
      return;
    }

    try{
      const response = await api.get(`${input}/json`);
      setCep(response.data)
      setInput('')
      
    }
    catch{
      alert(" OPS!!Erro ao buscar CEP")
      setInput('')
    }
  }






  return (<div className = "container">
    <h1 className = "title">Buscador CEP</h1>

    <div className="containerInput">
      <input type="text" placeholder = "Digite seu CEP"
       value={input}
        onChange={(e) => setInput(e.target.value)} 
        />
      <button className = "buttonSearch" onClick={handleSearch}>
      <FiSearch size = {25} color = "FFF" background = "Black"/>
      </button>

    </div>
    <div>
      {Object.keys(cep).length > 0 &&(
      <main className = "main">
        <h2>CEP: {cep.cep}</h2>
        <span>Cidade:  {cep.localidade}</span>
        <span> Estado: {cep.uf}</span>
        <span>Endereço:{cep.logradouro}</span>
        <span> Complemento: {cep.complemento}</span>
        <span>Bairro: {cep.bairro}</span>
        
        
      </main>
      )}


    </div>






    </div>
    );
}

export default App;
