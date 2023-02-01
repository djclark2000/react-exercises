// import React, { Component } from 'react'
import { useEffect, useState } from "react";


export default function FilmList(props) {
    const [list, setList] = useState([]); 

    
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

    return (
        <ul className="tiles">
            {list.map((film) => {
                return (
                    <li key={film.id}>
                        <h2>{film.title}</h2>
                        <a href={`${film.movie_banner}`}>
                            <img src={`${film.image}`} alt="" />
                        </a>
                        
                    </li>
                )
            })}
            {list.length == 0 && <p className="loading">Loading...</p>}
        </ul>
  
    )
}




/*export default class FilmList extends Component {

    constructor(props){
        super(props); 

        //this is the only place where you set state equal to something
        this.state = {
            list: []
        }
    }

    getFilms(){
        fetch(`https://studioghibliapi-d6fc8.web.app/films`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            this.setState({
                list: data
            })
        })
        .catch(err => console.error(err));
    }

    //Lifecycle Method #2
    componentDidMount(){
        this.getFilms();
    }
   

    //Lifecycle Methos #1
    render() {
        return (
            <ul className="tiles">
                {this.state.list.map((film) => {
                    return (
                        <li key={film.id}>
                            <h2>{film.title}</h2>
                            <a href={`${film.movie_banner}`}>
                                <img src={`${film.image}`} alt="" />
                            </a>
                            
                        </li>
                    )
                })}
                {this.state.list.length == 0 && <p className="loading">Loading...</p>}
            </ul>
      
        )
    }
} */







