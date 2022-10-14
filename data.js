window.addEventListener('load', (e)=>{
    const movie =JSON.parse(window.sessionStorage.getItem('movie'));
console.log(movie);

const name = document.getElementById("name");

    name.innerText = movie.Name;

const img = document.getElementById("img");
    img.src=movie.src;

const duration = document.getElementById("duration");
duration.innerText=movie.Duration;

const overview = document.getElementById("overview");
overview.innerText=movie.Overview; 

const genre = document.getElementById("genre");
genre.innerText=movie.Genre;

const date = document.getElementById("date");
date.innerText="Release Date: "+movie.ReleaseDate;

const dirc = document.getElementById("dirc");
dirc.innerText="Director: "+movie.Director;

const bud = document.getElementById("bud");
bud.innerText="Budget:" +movie.Budget ;

const rate = document.getElementById("rate");
rate.innerText="IMDb RATING: " +movie.IMDbRATING ;

const star = document.getElementById("star");
star.innerText="Stars: " +movie.Stars ;
});










    

   

    





