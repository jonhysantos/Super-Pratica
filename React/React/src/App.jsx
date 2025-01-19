

function App() {

  const list =  [
    {id:233888894,task:'Levar o Pitoco para passear',},
    {id:234345,task:'Estudar react'},
  ]
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
