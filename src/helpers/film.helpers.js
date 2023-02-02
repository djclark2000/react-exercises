import React from 'react'
import { useState } from "react"; 

function filterFilmsByDirector(list, searchDirector) {
    // console.log(searchDirector);
    if(!searchDirector){
      return list; 
    }
  return list.filter(film => searchDirector === film.director); 
}


function getListOf(list, prop) {
    //return the list via this new array
    const resultArray = []; 
    for (const element of list){
      // console.log(element);
      const value = element[prop]; 
      //If we found a value that we want
      //Store it in the new array
      if (!resultArray.includes(value)){
        resultArray.push(value); 
      }
      
    }

    return resultArray;
}

export {filterFilmsByDirector, getListOf}; 
