// declaram functia pt afisarea vremii pe urmatoarele 5 zile - apelul functii se va face in alte fisiere
function displayWeatherForecast(city){
    // generam link-ul de la open weather catre care o sa facem call-ul
    const forecastEndpoint =  getForecatEndpoint(city);
    
    // inainte sa facem cererea catre server si sa afisam noile informatii, selectam tag-ul de html pentru afisarea prognozei si stergem orice ar fi inauntru 
    let weatherForecastContainer = document.querySelector('.weather-forecast');
    weatherForecastContainer.innerHTML = '';

    // facem call-ul catre server
    fetch(forecastEndpoint)
        .then(response => response.json())
        .then((data)=> {
            // din datele venite de la server ne intereseaza doar list
            const {list} = data;

            // ne definim un obiect in care sa grupam predinctiile venite de la server pe zile
            const daysMap = {};

            // iteram prin predictiile venite de la server (list)
            list.forEach((element)=>{
                // extragem data predictiei pt a face gruparea pe zile
                const {dt} = element;
                // folosind utilitarul creat de noi parsam ziua curenta
                const day = getDayOfTheWeek(dt);
               

                // facem o verificare si daca avem deja ziua sapt in obiect - ii adaugam o noua predictie
                if(daysMap[day]){
                    daysMap[day].push(element);
                }else{
                    // altfel - daca nu exista ziua respectiva atunci o adaugam in obiect impreuna cu  predictia
                    daysMap[day] =  [element];
                }
            });

            // parcurgem cu for...in continutul obiectului daysMap - cheile din obiect sunt zilele sapt pt care avem predictii 
            for(key in daysMap){
                // afisam ziua curenta pe ecran
                weatherForecastContainer.innerHTML += `<h3 class="text-primary">${key}</h3>`;
                // pentru fiecare zi a sapt - extragem predictiile asociate si iteram prin ele 
                const days = daysMap[key];
                days.forEach((element) => {
                    // extragem datele de interes
                    const {dt, main, weather} = element;
                    // incepem sa parsam datele cu ajutorul functiilor utilitare create deja de noi
                    const hour = getHour(dt);
                    // rotunjim valoarea temperaturilor
                    const temperature = Math.round(main.temp);
                    const realFeel = Math.round(main['feels_like']);
                    // pentru a obtine descrierea trebuie sa avem grija ca weather este un arrray cu un singur element
                    const weatherDescrption = weather[0].description;
                    // parsam iconita
                    const weatherIcon = getWeatherIcon(weather[0].icon);

                    // console.log(hour, temperature, realFeel, weatherDescrption, weatherIcon)

                    //  afisam datele pe ecran
                    weatherForecastContainer.innerHTML += `
                        <div class="weather-forecast-box d-flex w-100 justify-content-between align-items-center border rounded p-3 mb-3">
                            <div>${hour}</div>
                            <div><img src="${weatherIcon}" alt="" /></div>
                            <div class="fs-3"><strong>${temperature}°C</strong></div>
                             <div class="real-feel">Real feel: <strong>${realFeel}</strong></div>
                        </div>
                    `
                })
            }
        });
}
