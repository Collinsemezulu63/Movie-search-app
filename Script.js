async function getMovies() {
  const apiKey = "cefb71c7";
  const movieInput = document.querySelector("input").value;
  const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&t=${movieInput}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new error("movie data unavailable");
    }
    const data = await response.json();
    console.log(data);
    displayMovie(data);
  } catch (error) {
    alert(error.message);
  }
}

function displayMovie(W) {
  const Poster = document.querySelector(".Poster").src = W.Poster;
  const Title = document.querySelector(".Title").innerHTML = W.Title;
  const Genre = document.querySelector(".Genre").innerHTML = W.Genre;
  const Released = document.querySelector(".Released").innerHTML = W.Released;
  const Plot = document.querySelector(".Plot").innerHTML = W.Plot;
  const Language = document.querySelector(".Language").innerHTML = W.Language;
}
