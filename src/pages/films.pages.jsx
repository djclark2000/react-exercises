import { useEffect, useState } from "react";
import { filterFilmsByDirector, getListOf, getFilmStats } from "../helpers/film.helpers";
import { Link } from 'react-router-dom'; 
import "../components/filmListStyle.css";

export default function FilmsPage(props) {
    const [list, setList] = useState([]); 
    const [searchDirector, setSearchDirector] = useState(""); 

    
    function getFilms() {
        fetch(`https://studioghibliapi-d6fc8.web.app/films`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            setList(data);
        })
        .catch(err => console.error(err));
    }

    useEffect(() => {
        getFilms();
    }, []);

    

    //Derived State
    const filmsByDirector = filterFilmsByDirector(list, searchDirector);
    const directors = getListOf(list, "director"); 
    const { avg_score, total, latest } = getFilmStats(filmsByDirector); 

    return (
        <div >
            <div className="film-header-section">
            <h1>Studio Ghibili Films</h1>
            <form action="">
                <div className="form-group">
                    <label htmlFor="selectDirector" >Director</label>
                    <select 
                        name="selectDirector"
                        id="selectDirector"
                        value={searchDirector}
                        onChange={(event) => {
                            setSearchDirector(event.target.value); 
                        }}   
                    >
                        <option value="">All</option> 
                        {directors.map((director, index, array) => {
                            return <option key={director+index} value={director}>{director}</option>
                        })}
                    </select>
                </div>
            </form>
            </div>
            <div id="film-stats">
                <div>
                  <span># Of Films</span>
                  <span>{total}</span>
                </div>
                <div>
                  <span>Average Rating</span>
                  <span>{avg_score.toFixed(2)}</span>
                </div>
                <div>
                  <span>Latest Film</span>
                  <span>{latest}</span>
                </div>
            </div>
            <ul className="tiles">
                {filmsByDirector.map((film) => {
                    return (
                        <li key={film.id}>
                            <h2>
                            <Link to={`/film/${film.id}`}>{film.title}</Link>   
                            </h2>
                            <a href={`${film.movie_banner}`}>
                                <img src={`${film.image}`} alt="" />
                            </a>

                        </li>
                    )
                })}
                {list.length == 0 && <p className="loading">Loading...</p>}
            </ul>
        </div>
    )
}