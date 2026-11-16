
function showDetails(movie) {
    alert("Tu as sélectionné : " + movie);
}

function filterMovies(category) {
    const movies = document.querySelectorAll(".movie");

    movies.forEach(movie => {
        if (
            category === "Tous" ||
            movie.dataset.category === category
        ) {
            movie.style.display = "block";
        } else {
            movie.style.display = "none";
        }
    });
}

document.getElementById("search").addEventListener("input", function() {
    const search = this.value.toLowerCase();

    document.querySelectorAll(".movie").forEach(movie => {
        const name = movie.querySelector("h3").textContent.toLowerCase();

        movie.style.display = name.includes(search) ? "block" : "none";
    });
});
