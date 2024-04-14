const  accesskey = "S8nRu8b_bRA1xaS7UcmqRVcOe4CYsEUzcY1OeTt0fZE";

const formEl = document.querySelector("form");
const inputEl = document.getElementById("search-input");
const searchResult = document.querySelector(".search-results");
const showMore = document.getElementById("show-more-button");

let inputData = "";
let page = 1;

 async function searchImages (){
    inputData = inputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`;

 
    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    if(page === 1){
        searchResult.innerHTML=" ";
    }
    //creating container
    results.map((result) =>{
        const imageWrapper = document.createElement("div");
        //naming class
        imageWrapper.classList.add("search-result");
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imagelink = document.createElement("a");
        imagelink.href = result.links.html;
        imagelink.target = "_blank";
        imagelink.textContent = result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imagelink);
        searchResult.appendChild(imageWrapper);
    })

    //increment the pages 
 page++;
 //displaying the show more button if the page is >1
 if(page > 1){
    showMore.style.display = "block";
 }
}

formEl.addEventListener("submit", (event) =>{
  event.preventDefault();
  page = 1;
  searchImages();

})
showMore.addEventListener("click", () =>{
    
    searchImages();
  
  })





















































