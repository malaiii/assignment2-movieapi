"use strict"
let data = "{}";
let movieData = {};
const url = "https://api.themoviedb.org/3/search/movie?api_key=b8787dd277a654c3543ad9efad8c19ba&query="
let ul = document.createElement('ul');

class movieSearchResults{
  constructor(){

  }
  getSearchResults(searchTerm){
    let xhr = new XMLHttpRequest();
    let _this = this;
    xhr.withCredentials = false;
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        let response = JSON.parse(this.responseText)
        movieData.results = response.results;
        _this.renderMovies();
      }
    });
    xhr.open("GET", url+searchTerm,true);
    xhr.send(data);
  }
  renderMovies(){
    //let ul = document.createElement('ul');
    while (ul.hasChildNodes()) {
      ul.removeChild(ul.lastChild);
    }
   // ul.removeChild(ul.firstChild);
    ul.setAttribute('class','event-list');
    let productList = ['Electronics Watch','House wear Items','Kids wear','Women Fashion'];
    console.log(movieData.results);
    document.getElementById('renderList').innerHTML = "";
    document.getElementById('renderList').appendChild(ul);
    let liList = movieData.results.forEach(this.renderProductList);
    
  }

  renderProductList(element, index, arr) {
    let t, tt;
    let li = document.createElement('li');
    let imgtag = document.createElement('img');
    let divTag = document.createElement('div');
    let h2Tag = document.createElement('h2');
    let pTag = document.createElement('p');
    imgtag.src = "https://image.tmdb.org/t/p/w185_and_h278_bestv2/"+element.poster_path;
    li.setAttribute('class','item');
    divTag.setAttribute('class','info');
    h2Tag.setAttribute('class','title');
    pTag.setAttribute('class','desc');
   // li.appendChild(img);
    h2Tag.innerHTML = element.original_title;
    ul.appendChild(li);
    li.appendChild(imgtag);
    li.appendChild(divTag);
    divTag.appendChild(h2Tag);
    divTag.appendChild(pTag);
   // t = document.createTextNode(element.original_title);
    li.innerHTML = li.innerHTML ;
  }
  
}
document.getElementById("searchMovieButton").addEventListener("click", function () {
  document.getElementById('renderList').innerHTML = "";
  
  let moviename = document.getElementById("moviename").value;
  const movieResult = new movieSearchResults();
  const renderMoviews = movieResult.getSearchResults(moviename);
});
