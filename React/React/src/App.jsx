
import React, {useState} from 'react';
import { v4 as uuid } from 'uuid';

function App() {
  const [list, setlist] = useState([{id:uuid(),task:'nada'}])

function inputMudou(event){
  console.log(event.target.value)
  setlist([{ id: uuid(), task: event.target.value }])
  console.log(list)
}
function cliqueiBotao(){
  console.log('cliquei no botão')
}

  return (
    
    <div>
      <input onChange={inputMudou} placeholder='O que devo fazer...' />
      <button onClick={cliqueiBotao}>Adicionar</button>
      <ul>
        {
          list.map(item => (
            <li key={item.id}>{item.task}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default App
