const wrapper = document.getElementById("wrapper");
const sortTitleBtn = document.getElementById("sortTitle");
const sortYearBtn = document.getElementById("sortYear");
const genreSelect = document.getElementById("genreSelect");
const movieCount = document.getElementById("movieCount");
const pickBtn = document.getElementById("pickBtn");
const pickedMovieDiv = document.getElementById("pickedMovieDiv");

const movies = [
    {
        title: "The Matrix", year: 1999, genre: "Sci-Fi", length:136
    },
    {
        title: "Inception", year: 2010, genre: "Sci-Fi", length:148
    },
    {
        title: "Spirited Away", year: 2001, genre: "Animation", length:125
    },
    {
        title: "Toy Story", year: 1995, genre: "Animation", length:81
    },
    {
        title: "The Godfather", year: 1972, genre: "Drama", length:175
    },
    {
        title: "The Parasite", year: 2019, genre: "Drama", length:132
    },
    {
        title: "Superbad", year: 2007, genre: "Comedy", length:113
    },
    {
        title: "Bridesmaids", year: 2011, genre: "Comedy", length:125
    },
    {
        title: "Blade Runner 2049", year: 2017, genre: "Sci-Fi", length: 164
    },
    {
        title: "Coco", year: 2017, genre: "Animation", length: 105
    }
]

function renderCard(displayedMovie) {
    const card = document.createElement("div");
    card.style.border = "2px solid black";
    card.style.margin = "10px";
    card.style.padding = "5px";

    const title = document.createElement("h1");
    title.innerHTML = displayedMovie.title;
    const genre = document.createElement("h4");
    genre.innerHTML = displayedMovie.genre;
    const year = document.createElement("h4");
    year.innerHTML = displayedMovie.year;
    const length = document.createElement("h4");
    length.innerHTML = displayedMovie.length + " min";

    card.appendChild(title);
    card.appendChild(genre);
    card.appendChild(year);
    card.appendChild(length);

    wrapper.appendChild(card);
}

function renderMovie(currentMovie) {

    wrapper.innerHTML = "";

    const mapped = currentMovie.map((item)=> {
        return renderCard(item);
    })

    wrapper.appendChild(...mapped);

    movieCount.innerHTML = "Showing " + currentMovie.length + " of " + movies.length + " movies";
}

function sort(sortType){
    const genre = genreSelect.value

    const filtered = movies.filter((movie)=> {
        if (genre === "All") {
            return true;
        }
        return movie.genre === genre;
    })
    .sort((a,b) => {
        if (sortType === "title") {
            return a.title.localeCompare(b.title);
        }

        if (sortType === "year"){
            return a.year - b.year;
        }
    })

    renderMovie(filtered);
}

sortTitleBtn.addEventListener("click", ()=> {
    sort("title");
})

sortYearBtn.addEventListener("click", ()=> {
    sort("year");
})

genreSelect.addEventListener("change", ()=>{
    const genre = genreSelect.value;

    const filtered = movies.filter((movie) => {
      if (genre === "All") {
        return true;
      }
      return movie.genre === genre;
    });

    renderMovie(filtered)
})

pickBtn.addEventListener("click", ()=>{
    const random = Math.floor(Math.random() * movies.length);
    const pickedMovie = movies[random];
    pickedMovieDiv.innerHTML= "Tonight you're watching: " + pickedMovie.title + " (" + pickedMovie.year + ")";
})

renderMovie(movies);
