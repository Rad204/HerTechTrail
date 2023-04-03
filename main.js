const change = document.getElementById("image1");

change.addEventListener("click", (event) => {
    event.target.style.background = "red";
    event.target.style.color = "white"; 
    event.target.innerHTML = "Korean Drama Series: Healer"
})

const change2 = document.getElementById("image2");

change2.addEventListener("click", (event) => {
    event.target.style.background = "orange";
    event.target.style.color = "white"; 
    event.target.innerHTML = "Korean Drama Series: Love in the Moonlight"
})

const change3 = document.getElementById("image3");

change3.addEventListener("click", (event) => {
    event.target.style.background = "yellow";
    event.target.style.color = "black"; 
    event.target.innerHTML = "Korean Drama Series: Mr Queen"
})

const change4 = document.getElementById("image4");

change4.addEventListener("click", (event) => {
    event.target.style.background = "green";
    event.target.style.color = "white"; 
    event.target.innerHTML = "Korean Drama Series:  River where the moon rises"
})
const change5 = document.getElementById("image5");

change5.addEventListener("click", (event) => {
    event.target.style.background = "Blue";
    event.target.style.color = "white"; 
    event.target.innerHTML = "Korean Drama Series: Scarlet heart"
})

const change6 = document.getElementById("image6");

change6.addEventListener("click", (event) => {
    event.target.style.background = "indigo";
    event.target.style.color = "white"; 
    event.target.innerHTML = "Korean Drama Series: Under the Queen's Umbrella"
})

const change7 = document.getElementById("image7");

change7.addEventListener("click", (event) => {
    event.target.style.background = "violet";
    event.target.style.color = "white"; 
    event.target.innerHTML = "Korean Drama Series: Crowned clown"
})

const change8 = document.getElementById("image8");

change8.addEventListener("click", (event) => {
    event.target.style.background = "pink";
    event.target.style.color = "white"; 
    event.target.innerHTML = "Korean Drama Series: Alchemy of souls"
})
/*const list = document.getElementsByClassName("image2");
list[0,1].addEventListener("click", (event) =>{
    event.target.style.background = "red";
    event.target.style.color = "white"; 
    event.target.innerHTML = "Korean Drama Series: Healer"
})


/*const collection = dodocument.getElementsByClassName("image2");
for (let i = 0; i < collection.length; i++) {
  collection[i].style.backgroundColor = "blue";
}*/

/*var change2 = document.getElementsByClassName("image2");
change.addEventListener("click", (event) => {
    event.target.style.background = "yellow"
    event.target.style.color ="green"
})*/