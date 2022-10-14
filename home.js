const movies = [
  {
    Name: "Pulp Fiction",
    Genre: "Thriller, Crime",
    ReleaseDate: "10/14/1994",
    Duration: "2h 34m",
    Overview:"A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
    Director: "Quentin Tarantino",
    Story: "Roger Avary",
    Stars: "John Travolta ,Uma Thurman, Samuel L. Jackson",
    Budget: "$8,000,000.00",
    Revenue: "$214,179,088.00",
    IMDbRATING: "8.9/10",
    src: "assets/pulp_fiction.jpg",
  },
  {
    Name: "Inglourious Basterds",
    Genre: "Drama, Action, Thriller, War",
    ReleaseDate: "08/21/2009",
    Duration: "2h 33m",
    Overview:"In Nazi-occupied France during World War II, a group of Jewish-American soldiers known as The Basterds are chosen specifically to spread fear throughout the Third Reich by scalping and brutally killing Nazis. The Basterds, lead by Lt. Aldo Raine soon cross paths with a French-Jewish teenage girl who runs a movie theater in Paris which is targeted by the soldiers.",
    Director: "Quentin Tarantino",
    Stars: "Brad Pitt , Diane Kruger ,Eli Roth",
    Budget: "$70,000,000.00",
    Revenue: "$321,457,747.00",
    IMDbRATING: "8.3/10",
    src: "assets/inglourios_basterds.jpg",
  },
  {
    Name: "Reservoir Dogs",
    Genre: "Crime, Thriller",
    ReleaseDate: "09/02/1992 ",
    Duration: "1h 39m",
    Overview:"A botched robbery indicates a police informant, and the pressure mounts in the aftermath at a warehouse. Crime begets violence as the survivors -- veteran Mr. White, newcomer Mr. Orange, psychopathic parolee Mr. Blonde, bickering weasel Mr. Pink and Nice Guy Eddie -- unravel.",
    Director: "Quentin Tarantino",
    Writer: "Roger Avary",
    Stars: "Harvey Keitel , Tim Roth , Michael Madsen",
    Budget: "$1,200,000.00",
    Revenue: "$2,859,750.00",
    IMDbRATING: "8.3/10",
    src: "assets/reservoir_dogs.jpg",
  },
  {
    Name: "Jackie Brown",
    Genre: "Crime, Thriller, Drama",
    ReleaseDate: "12/25/1997",
    Duration: "2h 34m",
    Overview:"Jackie Brown is a flight attendant who gets caught in the middle of smuggling cash into the country for her gunrunner boss. When the cops try to use Jackie to get to her boss, she hatches a plan — with help from a bail bondsman — to keep the money for herself.",
    Director: "Quentin Tarantino",
    Story: "Elmore Leonard",
    Stars: "Pam Grier , Samuel L. Jackson , Robert Forster",
    Budget: "$12,000,000.00",
    Revenue: "$39,673,162.00",
    IMDbRATING: "7.5/10",
    src: "assets/jackie_brown.jpg",
  },
  {
    Name: "Django Unchained",
    Genre: "Drama, Western",
    ReleaseDate: "01/16/2013",
    Duration: "2h 45m",
    Overview:"With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
    Director: "Quentin Tarantino",
    Stars: "Jamie Foxx , Christoph Waltz , Leonardo DiCaprio",
    Budget: "$100,000,000.00",
    Revenue: "$425,368,238.00",
    IMDbRATING: "8.4/10",
    src: "assets/django_unchained.jpg",
  },
  {
    Name: "Kill Bill: Vol. 1",
    Genre: "Action, Crime",
    ReleaseDate: "12/31/2003",
    Duration: "1h 51m",
    Overview:
      "An assassin is shot by her ruthless employer, Bill, and other members of their assassination circle – but she lives to plot her vengeance.",
    Director: "Quentin Tarantino",
    Characters: "Uma Thurman",
    Stars: "Uma Thurman , David Carradine , Daryl Hannah",
    Budget: "$30,000,000.00",
    Revenue: "$180,906,076.00",
    IMDbRATING: "8.2/10",
    src: "assets/kill_bill.jpg",
  },
  {
    Name: "Natural Born Killers",
    Genre: "Crime, Thriller, Drama",
    ReleaseDate: "08/25/1994",
    Duration: "1h 58m",
    Overview:
      "Two victims of traumatized childhoods become lovers and serial murderers irresponsibly glorified by the mass media.",
    Director: "Oliver Stone",
    Screenplay: "Richard Rutowski , David Veloz",
    Story: "Quentin Tarantino",
    Stars: " Woody Harrelson , Juliette Lewis , Tom Sizemore",
    Budget: "$34,000,000.00",
    Revenue: "$50,283,563.00",
    IMDbRATING: "7.2/10",
    src: "assets/natural_born_killers.jpg",
  },

  // كمل الأفلام دول
  {
   
    Genre: "Horror, Action, Thriller, Crime",
    ReleaseDate: "01/19/1996",
    Duration: "1h 48m",
    Overview:  "Seth Gecko and his younger brother Richard are on the run after a bloody bank robbery in Texas. They escape across the border into Mexico and will be home-free the next morning, when they pay off the local kingpin. They just have to survive 'from dusk till dawn' at the rendezvous point, which turns out to be a Hell of a strip joint.",
    Director: "Robert Rodriguez",
    Screenplay: "Quentin Tarantino",
    Story: "Robert Kurtzman ",
    Stars: "  Harvey Keitel , George Clooney , Juliette Lewis",
    Budget: "$19,000,000.00",
    Revenue: "$25,836,616.00",
    IMDbRATING: "7.2/10",
    Name: "From Dusk Till Dawn",
    src: "assets/from_dusk_till_dawn.jpg",

  },
  {
    Name: "The Hateful Eight",
    src: "assets/hateful_eight.jpg",
    Genre: "Drama, Mystery, Western",
    ReleaseDate: "12/30/2015",
    Duration: "3h 8m",
    Overview:  "Bounty hunters seek shelter from a raging blizzard and get caught up in a plot of betrayal and deception.",
    Director: "Quentin Tarantino",
    Screenplay: "Quentin Tarantino",
    Story: "Quentin Tarantino",
    Stars: " Samuel L. Jackson , Kurt Russell , Jennifer Jason Leigh",
    Budget: "$44,000,000.00  ",
    Revenue: "$155,760,117.00",
    IMDbRATING: "7.8/10",
  },
  {
    Name: "Four Rooms",
    src: "assets/four_rooms.jpg",
    Genre: "Crime, Comedy    ",
    ReleaseDate: "12/25/1995",
    Duration: "1h 38m",
    Overview:  "It's Ted the Bellhop's first night on the job...and the hotel's very unusual guests are about to place him in some outrageous predicaments. It seems that this evening's room service is serving up one unbelievable happening after another.",
    Director: "Quentin Tarantino",
    Screenplay:"Allison Anders",
    Story: "Quentin Tarantino",
    Stars: " Tim Roth , Antonio Banderas , Sammi Davis",
    Budget: "$4,000,000.00  ",
    Revenue: "$155,760,117.00",
    IMDbRATING: "6.7/10",
  },
];

window.addEventListener("load", (event) => {
  const container = document.getElementById("movies-container");

  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];

    // <a class="d1" href="data.html">
    const movieEl = document.createElement("a");
    movieEl.classList.add("d1");
    movieEl.href = "data.html";
    movieEl.id = i;
    movieEl.addEventListener("click", (e)=>{
      sessionStorage.setItem('movie',JSON.stringify(movie))
    })

    // <div class="ph"> <img src="xxxx.jpg" /> </div>
    const ph = document.createElement("div");
    ph.classList.add("ph");

    const img = document.createElement("img");
    img.src = movie.src;

    ph.appendChild(img);
    movieEl.appendChild(ph);

    // <div class="info">
    //   <p>Pulp Fiction</p>
    // </div>

    const info = document.createElement("div");
    info.classList.add("info");

    const name = document.createElement("p");
    name.innerText = movie.Name;
    info.appendChild(name);

    movieEl.appendChild(info);

    container.appendChild(movieEl);
  }
});
