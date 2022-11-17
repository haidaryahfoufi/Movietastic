function onSearchChange(event){
    const movieName = event.target.value
    localStorage.setItem('name', movieName)
    window.location.href = `${window.location.origin}/movies.html`
}

