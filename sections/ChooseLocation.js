// Selectam butoanele din dropdown-ul cu orase
const bucharestButton = document.querySelector('.dropdown-item.bucharest');
const timisoaraButton = document.querySelector('.dropdown-item.timisoara');
const oradeaButton = document.querySelector('.dropdown-item.oradea');
const clujButton = document.querySelector('.dropdown-item.cluj');
const sibiuButton = document.querySelector('.dropdown-item.sibiu');

// definim o functie care sa ne schimbe orasul curent afisat pe ecran
function updateCurrentCityName(city){
    // selectam tag-ul de html unde o sa inseram orasul curent
    const currentCity = document.querySelector(`.current-city`);
    currentCity.innerHTML= `${city}.`;
}

function updateWeather(cityName){
    // salvam in local storage optiunea aleasa
    localStorage.setItem("city",cityName);
    // Afisam vremea curenta
    displayCurrentWeather(cityName);
    // apelam functia care ne schimba orasul curent de pe ecran
    updateCurrentCityName(cityName);
    // reafisam si prognoza pentru urmatoarele 5 zile
    displayWeatherForecast(cityName);
}
// Adaugam event linstere pe butoane pentru a schimba datele despre vreme
bucharestButton.addEventListener('click', function(){
    updateWeather('București');
});

timisoaraButton.addEventListener('click', function(){
    updateWeather('Timișoara');
});


oradeaButton.addEventListener('click', function(){
    updateWeather('Oradea');
});

clujButton.addEventListener('click', function(){
    updateWeather('Cluj');
});

sibiuButton.addEventListener('click', function(){
    updateWeather('Sibiu');
});
