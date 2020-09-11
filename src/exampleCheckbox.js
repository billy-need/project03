import React, {useState, useEffect} from 'react';
import './App.css';

 

function App() {

  const [store, setStore] = useState([])

  const handleChecked = (e, index) => {

    console.log("handleChecked index="+index)

    const tStore = [...store];

    tStore[index] = {label: store[index].label, checked: !store[index].checked}

    setStore( tStore);

  }

  const Checkbox = (obj,index) => ((obj.checked) ? (<input type="checkbox" onClick={(e) => handleChecked(e,index)} checked value={obj.label}/>) : 

(<input type="checkbox" onClick={(e) => handleChecked(e,index)} value={obj.label}/>))

  useEffect(()=>{

    setStore([{label: 'one', checked: true}, 

    {label: 'two', checked: false},

    {label: 'three', checked: true}])

  },[])

  useEffect(()=>{

    store.forEach( obj => console.log(obj));

  },[store]);

  return (

    <div className="App">

      {store.map((obj,index) => (

        <div key={index}>{obj.label} {Checkbox(obj,index)}</div>

      ))}

    </div>

  )

}

 

export default App;