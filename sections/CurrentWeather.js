// In acest fisier sta logica pentru a face fetch-ul catre API-ul de vreme curenta, parsarea datelor primite dela API si inserarea datelor in HTML

function displayCurrentWeather(city) {
    // Ne generam link-ul pentru a primi date despre vremea curenta
    const currentWeatheEndpoint  = getCurrentWeatherEndpoint(city);

    fetch(currentWeatheEndpoint)
        .then(response => response.json())
        .then((data) => {
            // Extragem proprietatile de care avem nevoie din datele primite de la server
            const { name, dt, main, weather, wind } = data;
            const day = getDayOfTheWeek(dt);
            const hour = getHour(dt);
            // Rotunjim valorile pentru temperatura
            const temperature = Math.round(main.temp);
            const realFeel = Math.round(main.feels_like);
            // Atentie - weather este un array cu un singur element
            const weatherDescription = weather[0].description;
            const windSpeed = Math.round(windToKmPerHour(wind.speed));
            const weatherIcon = getWeatherIcon(weather[0].icon);

            // Afisam in HTML informatiile parsate mai sus
            const currentWeatherContainer = document.querySelector('.current-weather');
            currentWeatherContainer.innerHTML = `
                <div class="px-3">
                    <div class="fs-2 mb-2"><strong>${name}</strong></div>
                    <div class="fs-4"><strong>${day}</strong>, ${hour}</div>
                    <div class="d-flex align-items-center justify-content-center">
                        <strong class="fs-1">${temperature}°C</strong>
                        <img src="${weatherIcon}" />
                    </div>
                </div>
                <div class="px-3">
                    <p class="fs-5">Real feel: <strong>${realFeel}°C</strong></p>
                    <p class="fs-5 text-capitalize">${weatherDescription}</p>
                    <p class="fs-5>Vant: <strong>${windSpeed} km/h</strong></p>
                </div>
            `;
        })
}
