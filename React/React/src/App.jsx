

function App() {
  function inputMudou(event){
    console.log(event.target.value)
  }

  function cliqueiNoBotao(){
    console.log('cliquei no botao')
  }

  return (
      <div>
        <input onChange={inputMudou} placeholder='Digite o que devo fazer...' />
        <button onClick={cliqueiNoBotao}>Adicionar</button>
        <ul>
          <li>Fazer tarefa de react</li>
          <li>Estudar sobre grid</li>
        </ul>

        </div>
  )
}

export default App
