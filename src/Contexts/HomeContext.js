import React,{ createContext, useState, useEffect } from "react";
import { getMoviesByKeyword } from "../constants";
export const HomeContext = createContext();




const HomeContextProvider = ( {children} ) =>{

    const [ doneFetch, setDoneFetch ] = useState();
    const [ currentQMovie, setCurrentQMovie] = useState("");
    const [movies, setMovies] = useState([]);
    const [text, setText ] = useState(""); 

    // const enterPress = ()=> {
    //     const searchBar = document.querySelector("#qmovie");
    //     const searchBtn = document.querySelector("#search-btn");
    //     searchBar.addEventListener("focus", e =>{
    //         searchBtn.addEventListener(
    //     }); 
    // };


    const getMovies = (q_movie, getMovies) =>{
        fetch(getMoviesByKeyword(q_movie))
        .then((res)=> res.json() )
        .then((data => {
            console.log(data);
            const { results } = data;
            setText(results.length ? "Results" : "No Results" )
            setMovies(results);
            console.log(results);
            setDoneFetch(true);

        }))
        .catch((err)=>console.log(err));
    };


    const validateQMovies = (e, q_movie = document.querySelector("#q_movie").value.toLowerCase().trim() ) => {
        if(e.type === "keypress" && e.key !== "Enter") return;
        const words = q_movie.match(/\w+/g);
        q_movie = words;
        if(q_movie && q_movie !== currentQMovie){
            setCurrentQMovie(q_movie);
            setDoneFetch(false);
            getMovies(q_movie);
            setText("Results");
        }
    
    };



    return(
        <HomeContext.Provider value={{validateQMovies, doneFetch, text, movies }} >
            {children}
        </HomeContext.Provider>
    );


};

export default HomeContextProvider;
