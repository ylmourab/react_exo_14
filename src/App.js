import React,{useState} from 'react'


function App() {
  const [titre,setTitre] = useState("Bonjour")

  return (
    <div className="App">
      <h1>{titre}</h1>
     
    </div>
  );
}

export default App;
