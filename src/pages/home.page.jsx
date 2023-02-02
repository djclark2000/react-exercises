import { useState } from 'react';
import FilmList from '../components/filmList';


export function HomePage() {
    const [text, setText] = useState("");
    const [list, setList] = useState(["ready", "set", "GO"]);
  
    function onSubmit(event) {
      event.preventDefault();
  
      let newList = [...list, text];
      setList(newList);
      setText("");
    }
  
    return (
      <div id='home-page'>
        <h1>Studio Ghibili Films</h1>
  
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="listitem"
            id="listitem"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
  
        <ul>
          {list.map((item, idx) => {
            return <li key={idx}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }



















/*export default function HomePage(props) {
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
        
      </div>
    )

} */