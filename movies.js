const movieWrapper = document.querySelector('.movies')



async function renderMovies(filter){
    const posts = await fetch(`https://www.omdbapi.com/?s=${localStorage.getItem("name")}&apikey=f7e62637`)
    const moviePosts = (await posts.json()).Search
    
    if(filter === "NEW_TO_OLD"){
        const filteredBooks = moviePosts.sort((a, b) => b.Year - a.Year)
        console.log(filteredBooks)
    }
    if(filter === "OLD_TO_NEW"){
        const filteredBooks = moviePosts.sort((a, b) => a.Year - b.Year)
        console.log(filteredBooks)
    }

    movieWrapper.innerHTML = moviePosts.map(movie => movieHTML(movie)).join('')
}

renderMovies();

function showMovieInfo(id){
    localStorage.setItem('movieId', id)
    window.location.href= `${window.location.origin}/poster.html`
}

function movieHTML(movie){
    return`
    <div class="movie">
        <figure class="movie--image-wrapper">
            <img  class="movie-img" src="${movie.Poster}" alt="" onclick = "showMovieInfo('${movie.imdbID}')")">
        </figure>
        <div class ="movie--description-wrapper">
            <div class="movie-title">
                ${movie.Title}
            </div>
            <div class="movie-year">
                ${movie.Year}
            </div>
            <div class="movie-rating">
        </div>
            </div>
    </div>`
}

function filterMovies(event){
    renderMovies(event.target.value)
}



