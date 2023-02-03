import {BrowserRouter, NavLink, Routes, Route, Link} from 'react-router-dom';
import { HomePage, FilmsPage, SingleFilmPage } from './pages';
import { useState } from 'react';
import FilmList from './components/filmList';
import "./components/filmListStyle.css";

export default function App(props) {
  
  return (
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/films">Films</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="films" element={<FilmsPage />} />
          <Route path="film/:id" element={<SingleFilmPage />} />
        </Routes>
      </BrowserRouter>

    );

} 


