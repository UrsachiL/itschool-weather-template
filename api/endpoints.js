const API_KEY = "fc939fd77ea2d21ce7e9262f4f6cb604";
// API key-urile Nu ar trebui stocate in repo si in format text deoarece nu este secure. API key-urile de preferat e sa fie stoacate pe un server insa fiindca API-ul de la Open Weather este gratuit momentan e ok sa il tinem aici.

// Definim endpoint-urile catre server:
// Pentru endpoint de vreme curenta trebuie sa inseram dinamic parametrul city - ne definim in functie un parametru
function getCurrentWeatherEndpoint(city) {
	// API-ul de la Open Weather are nevoie de urmatorii query params:
	// city
	// lang - noi o sa trimitem ro
	// units - metric, pentru a primit rezultatele in grade Celsius
	return `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}

function getForecatEndpoint(city) {
    return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ro&units=metric&appid=${API_KEY}`
}
