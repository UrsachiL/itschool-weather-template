// ne selecatam tag-ul de html care contine orasul curent si impreuna cu cheia din localstorage o as setam ce folosim
const currentCityTag= document.querySelector('.current-city');
let currentCityFromLocalStorage = localStorage.getItem('city');

// daca nu avem un oras salvat in localStorage, atunci salvam ca default Bucuresti
if(!currentCityFromLocalStorage){
    localStorage.setItem('city','București');
    currentCityFromLocalStorage = 'București';
}
// actualizam pe ecran numele orasului
currentCityTag.innerHTML = currentCityFromLocalStorage;

// Afisam vremea curenta pentru Bucuresti
displayCurrentWeather(currentCityFromLocalStorage);

// afisam prognoza pentru urmatoarele 5 zile 
displayWeatherForecast(currentCityFromLocalStorage);

// ne selctam butonul de scroll
const scrollToTopButton = document.getElementById("scroll-to-top");

document.addEventListener("scroll",function(){
    if(window.scrollY > window.innerHeight / 2){
        scrollToTopButton.style.visibility = "visible";
    }else {
    scrollToTopButton.style.visibility = "hidden";
  }
});
scrollToTopButton.addEventListener("click", function(){
    // functia scrollTo este o functie predefinita
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

