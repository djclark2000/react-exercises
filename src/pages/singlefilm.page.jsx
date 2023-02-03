import React from 'react';
import { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom'; 
import "../components/filmListStyle.css";
 

export default function SingleFilmPage() {
    const [item, setItem] = useState({});
    const { id } = useParams(); 

    function getFilm() {
        fetch(`https://studioghibliapi-d6fc8.web.app/films/${id}`)
        .then(res => res.json())
        .then((data) => setItem(data))
        .catch(err => console.error(err));
    }

    useEffect(() => {
        getFilm();
    }, []);


  
  return (
    <>
    {Object.keys(item).length > 0 && (
    <div className='singleFilm-container'>
        <div>
          <h1>{item.title}</h1>
          <p>
            Directed by {item.director}. Produced by {item.producer}.
          </p>
          <p>
            The film was released in <strong>{item.release_date}</strong> and garnered
            a <strong>{item.rt_score}</strong> aggregate score on{" "}
            <a
              href="https://www.rottentomatoes.com/"
              target="_blank"
              rel="noreferrer"
            >
              Rotten Tomatoes
            </a>
            .
          </p>
        <div>
          <img src={`${item.image}`} alt={`${item.title} Poster`} />
        </div>
          <h2>Description</h2>
          <p>{item.description}</p>
        </div>
    </div>
    )}
    </>
   
    
  )
}
