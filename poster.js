// const postWrapper = document.querySelector('.movie-poster')
// async function main() {
//     const post = await fetch(`https://www.omdbapi.com/?i=${localStorage.getItem('movieId')}&plot=short&apikey=f7e62637`)
//     const moviePost = await post.json()
//     console.log(moviePost)
    
//     postWrapper.innerHTML = moviePost.map(movie => movieHTML(movie)).join('')
// }

// main()

// function movieHTML(movie) {
//     return `<figure class="movie--image-wrapper">
//         <img class="movie-img" src="${movie.Poster}" alt="">
//     </figure>
//     <div class="movie-info">
//         <div class="movie-genre">
//             ${movie.Genre}
//         </div>
//         <div class="movie-year">
//             ${movie.Year}
//         </div>
//         <div class="movie-runtime">
//             ${movie.Runtime}
//         </div>
//     </div>
//     <div class="movie-overview">
//         <h3 class="overview">Overview</h3>
//         <p class="plot">${movie.Plot}</p>
//     </div>
//     <div class="movie--details-wrapper">
//         <div>
//             <h3 class="director">Director</h3>
//             <span class="director-name">${movie.Director}</span>
//         </div>
//         <div>
//             <h3 class="rating">Rating</h3>
//             <span class="movie-rating">${movie.imdbRating}</span>
//         </div>
//         <div>
//             <h3 class="box-office">Box Office</h3>
//             <span class="movie--box-office">${movie.BoxOffice}</span>
//         </div>
//     </div>`
// }