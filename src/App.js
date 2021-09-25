import React, {useState,useEffect} from 'react';
import Jokes from './components/Jokes';
import './index.css';



const App= () => {

  const[joke, setJoke] = useState({
    id: "",
    joke: "",
    status: 200
  });

 

  const fetchJoke = async () => {
   const result =  await fetch('https://icanhazdadjoke.com/', {
      headers : { 
        'Accept': 'application/json'
       }

    }).then((response) => response.json());

    console.log(result);
    return result;
    
    }

  useEffect( async () => {
    setJoke(await fetchJoke());
  
    },[])


  const jokeHandler = async () => {
    setJoke(await fetchJoke());

  }

 
  return (
    <div className="App">
      <Jokes joke={joke}/>
      <button onClick={jokeHandler}>Another one!</button>
  
   </div>
  )

  }
export default App;