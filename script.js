const api_url_films = "https://swapi.dev/api/films/"; //films
const api_url_people = "https://swapi.dev/api/people/"; //people
const api_url_planets = "https://swapi.dev/api/planets/" //planets
const api_url_species = "https://swapi.dev/api/species/" //species

async function getapi_films(url) {
    const response = await fetch(url);
    const data = await response.json();
    showFilms(data);
}
async function getapi_people(url) {
    const response = await fetch(url);
    const data = await response.json();
    showPeople(data);
}
async function getapi_planets(url) {
    const response = await fetch(url);
    const data = await response.json();
    showPlanets(data);
}
async function getapi_species(url) {
    const response = await fetch(url);
    const data = await response.json();
    showSpecies(data);
}

getapi_films(api_url_films);
getapi_people(api_url_people);
getapi_planets(api_url_planets);
getapi_species(api_url_species);

function showFilms(data) {
    let dataItems = `
    <div class="col">Título</div>
    <div class="col">Episódio</div>
    <div class="col">Diretor</div>
    <div class="col">Estreia</div>`;

    for (const ship of data.results){
        dataItems += `
        <div>${ship.title}</div>
        <div>${ship.episode_id}</div>
        <div>${ship.director}</div>
        <div>${ship.release_date}</div>`;
    }

    document.getElementById("container-1").innerHTML = dataItems;
}
function showPeople(data) {
    let dataItems = `
    <div class="col-1">Nome</div>
    <div class="col-1">Altura</div>
    <div class="col-1">Peso</div>
    <div class="col-1">Filmes</div>`;

    for (const ship of data.results){
        dataItems += `
        <div>${ship.name}</div>
        <div>${ship.height}</div>
        <div>${ship.mass}</div>
        <div>${ship.films.map(cut => cut.substring(28,29))}</div>`;
    }

    document.getElementById("container-2").innerHTML = dataItems;
}
function showPlanets(data) {
    let dataItems = `
    <div class="col-2">Nome</div>
    <div class="col-2">População</div>
    <div class="col-2">Horas/Dia</div>
    <div class="col-2">Clima</div>`;

    for (const ship of data.results){
        dataItems += `
        <div>${ship.name}</div>
        <div>${ship.population}</div>
        <div>${ship.rotation_period}</div>
        <div>${ship.climate}</div>`;
    }

    document.getElementById("container-3").innerHTML = dataItems;
}
function showSpecies(data) {
    let dataItems = `
    <div class="col-3">Nome</div>
    <div class="col-3">Língua</div>
    <div class="col-3">Tipo</div>
    <div class="col-3">Altura média</div>`;

    for (const ship of data.results){
        dataItems += `
        <div>${ship.name}</div>
        <div>${ship.language}</div>
        <div>${ship.classification}</div>
        <div>${ship.average_height}</div>`;
    }

    document.getElementById("container-4").innerHTML = dataItems;
}