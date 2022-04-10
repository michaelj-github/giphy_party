// console.log("Let's get this party started!");
$("#removeAll").on("click", function(e) {
  $("#theGiphys").children().remove();
});

async function getSomeGiph(searchFor) {
  // change this to use params
  const theResponse = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=HK31362bAJuJWZ7iZJ3Vy8RlQluMoQYC&q= ${searchFor} s&limit=50&offset=0&rating=g&lang=en`);
  const theGiphIndex = Math.floor(Math.random() * theResponse.data.data.length);
  displayGiph(theResponse.data.data[theGiphIndex].images.original.url);
}

function displayGiph(theGiphs) {
  const theGiph = document.querySelector("#theGiphys");
  theGiph.append(makeGiphDiv(theGiphs));
  document.querySelector("#theGiphys").classList.add("theGiphys");
}

function makeGiphDiv(aGiph) {
  const aNewSpan = document.createElement('span');
  const aNewImg = document.createElement('img');
  aNewImg.src = aGiph;
  aNewImg.width = 200;
  aNewImg.height = 200;
  aNewSpan.append(aNewImg);
  return aNewSpan;
}

$("#aGiphy").on("click", function(e) {
  e.preventDefault();
  let theGifSearch = $("#theGif").val();
  if (theGifSearch.length >= 1) {
    // console.log(theGifSearch);
    getSomeGiph(theGifSearch)
    const clearGiph = document.querySelector("#theGif");
    clearGiph.value = '';
  }
});
