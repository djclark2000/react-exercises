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




function getFilmStats(list){
  
  let acc_score = 0; 
  // list.forEach((film) => {
  //   acc_score += film.rt_score;
  // }); 
  acc_score = list.reduce((acc, curr) => acc + parseInt(curr.rt_score), 0); 

  const total = list.length; 

  const avg_score = acc_score/total;

  let latest = 0; 
  list.forEach((film) => {
    if (latest < film.release_date){
      latest = film.release_date;
    }
  })

  return {
    avg_score, 
    acc_score, 
    total, 
    latest
  }
  // let resultArray = {}; 
  // let sum = 0; 
  // let averageScore = 0; 
  // let latest = ""; 
  // for (let i = 0; i < list.length; i++){
  //   sum += list[i].rt_score; 

  // }
  // averageScore = sum/list.length; 
} 



export {filterFilmsByDirector, getListOf, getFilmStats}; 
