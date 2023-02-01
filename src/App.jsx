import { useState } from 'react';
import FilmList from './components/filmList';
import "./components/filmListStyle.css";

export default function App(props) {
  const [list, setList] = useState(["ready", "set", "GO"]);
  const [text, setText] = useState(""); 

  function onSubmit(HTMLSubmitEvent){
    HTMLSubmitEvent.preventDefault();

    setList([...list, text]);
  }

  
    return (
      <div>
        <h1 className='text-center'>Studio Ghibli Films</h1>
        <form onSubmit={onSubmit}>
          <input 
            type="text"  
            value={text} 
            onChange={(HTMLChangeEvent) => {
            // console.log(HTMLChangeEvent.target.value); 
            setText(HTMLChangeEvent.target.value)
            }}
          />
          <button type="submit" >Add</button>
        </form>
        <ul>{list.map((element, index, array) => 
          <li key={index}>{element}</li>)}
        </ul>
        <FilmList />
      </div>
    )

} 


