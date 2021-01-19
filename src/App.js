import React,{useState} from 'react'
import Composant from './components/Composant'



function App() {
  const [titre,setTitre] = useState("Bonjour")
  const [test,setTest] = useState("yo")

  return (
    <div className="App">
      <h1>{titre}</h1>
      <Composant nom={test}></Composant>
  
      
     
    </div>
  );
}

export default App;
