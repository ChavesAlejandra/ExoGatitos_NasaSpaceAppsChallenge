// 51 Peg b --> Home
// HIP 105854 b, HIP 14810 b, HIP 56640 b  HIP --> Gas Giants
// HAT-P-1 b, HAT-P-11 b, HAT-P-12 b  HAT-P --> Neptunian Planets
// Kepler-452 b, Kepler-22 b, Kepler-10 b  Kepler --> Super Earths
// TRAPPIST-1 b, TRAPPIST-1 c, TRAPPIST-1 d  Trappist --> Terrestrial Planets

document.addEventListener('DOMContentLoaded', () => { fetchData() })


const fetchData = async () => {
    const url = '../data/exoplanetsData.json'
    const res = await fetch(url)
    const data = await res.json();
    // Esto son las entradas sin comentarios
    const noCommendData = data.map(el => Object.values(el)[0]).filter(el => !el.startsWith('#'))
    const columns = noCommendData.shift().split(',');

    const parsedArray = noCommendData.map((item) => {
        return item.split(',').map((columnValue, columnIndex) => {
            return [columns[columnIndex], columnValue]
        })
    }).map(el => Object.fromEntries(el));

    console.log(parsedArray);

    printGasGiants(parsedArray);
    printNeptunianPlanets(parsedArray);
    printSuperEarths(parsedArray);
    printTerrestrialPlanets(parsedArray);
}

const printGasGiants = (generalData) => {
    const currentCategoryPlanets = Array.from(document.getElementsByClassName('category')[0].getElementsByClassName('exoplanetsInfo')[0].getElementsByClassName('planet'))
    const currentPlanets = [];
    currentPlanets[0] = generalData.filter(el => el.pl_name == 'HIP 14810 b' && el.default_flag == 1);
    currentPlanets[1] = generalData.filter(el => el.pl_name == 'HIP 56640 b' && el.default_flag == 1);
    currentPlanets[2] = generalData.filter(el => el.pl_name == 'HIP 105854 b' && el.default_flag == 1);
    currentCategoryPlanets.forEach((element, index) => {
        const planetInfo = element.children[1]
        const name = planetInfo.appendChild(document.createElement('h1'))
        name.textContent = currentPlanets[index][0].pl_name
        const year = planetInfo.appendChild(document.createElement('p'))
        year.innerHTML = `<b>Discovery Year:</b> ${currentPlanets[index][0].disc_year}`
        const orbit = planetInfo.appendChild(document.createElement('p'))
        orbit.innerHTML = `<b>Orbit Period:</b> ${Number.parseFloat(currentPlanets[index][0].pl_orbper).toFixed(2)} days`
        // If the value is null --> it doesn't print anything
        if (currentPlanets[index][0].pl_bmasse != '') {
            const mass = planetInfo.appendChild(document.createElement('p'))
            mass.innerHTML = `<b>Mass:</b> ${Number.parseFloat(currentPlanets[index][0].pl_bmasse).toFixed(2)} times The Earth's mass (${(currentPlanets[index][0].pl_bmasse * 5.972e24).toPrecision(2).replace('+', '')} kg)`
        }
        // If the value is null --> it doesn't print anything
        if (currentPlanets[index][0].st_rad != '') {
            const starDistance = planetInfo.appendChild(document.createElement('p'))
            starDistance.innerHTML = `<b>Distance from the nearest star:</b> ${Number.parseFloat(currentPlanets[index][0].st_rad).toFixed(2)} times the Sun's Radius (${(currentPlanets[index][0].st_rad * 695508).toExponential(2).replace('+', '')} km)`
        }
    })
}

const printNeptunianPlanets = (generalData) => {
    const currentCategoryPlanets = Array.from(document.getElementsByClassName('category')[1].getElementsByClassName('exoplanetsInfo')[0].getElementsByClassName('planet'))
    const currentPlanets = [];
    currentPlanets[0] = generalData.filter(el => el.pl_name == 'HAT-P-1 b' && el.default_flag == 1);
    currentPlanets[1] = generalData.filter(el => el.pl_name == 'HAT-P-12 b' && el.default_flag == 1);
    currentPlanets[2] = generalData.filter(el => el.pl_name == 'HAT-P-11 b' && el.default_flag == 1);
    currentCategoryPlanets.forEach((element, index) => {
        const planetInfo = element.children[1]
        const name = planetInfo.appendChild(document.createElement('h1'))
        name.textContent = currentPlanets[index][0].pl_name
        const year = planetInfo.appendChild(document.createElement('p'))
        year.innerHTML = `<b>Discovery Year:</b> ${currentPlanets[index][0].disc_year}`
        const orbit = planetInfo.appendChild(document.createElement('p'))
        orbit.innerHTML = `<b>Orbit Period:</b> ${Number.parseFloat(currentPlanets[index][0].pl_orbper).toFixed(2)} days`
        if (currentPlanets[index][0].pl_bmasse != '') {
            const mass = planetInfo.appendChild(document.createElement('p'))
            mass.innerHTML = `<b>Mass:</b> ${Number.parseFloat(currentPlanets[index][0].pl_bmasse).toFixed(2)} times The Earth's mass (${(currentPlanets[index][0].pl_bmasse * 5.972e24).toPrecision(2).replace('+', '')} kg)`
        }
        if (currentPlanets[index][0].st_rad != '') {
            const starDistance = planetInfo.appendChild(document.createElement('p'))
            starDistance.innerHTML = `<b>Distance from the nearest star:</b> ${Number.parseFloat(currentPlanets[index][0].st_rad).toFixed(2)} times the Sun's Radius (${(currentPlanets[index][0].st_rad * 695508).toExponential(2).replace('+', '')} km)`
        }
    })
}

const printSuperEarths = (generalData) => {
    const currentCategoryPlanets = Array.from(document.getElementsByClassName('category')[2].getElementsByClassName('exoplanetsInfo')[0].getElementsByClassName('planet'))
    const currentPlanets = [];
    currentPlanets[0] = generalData.filter(el => el.pl_name == 'Kepler-22 b' && el.default_flag == 1);
    currentPlanets[1] = generalData.filter(el => el.pl_name == 'Kepler-10 b' && el.default_flag == 1);
    currentPlanets[2] = generalData.filter(el => el.pl_name == 'Kepler-452 b' && el.default_flag == 1);
    currentCategoryPlanets.forEach((element, index) => {
        const planetInfo = element.children[1]
        const name = planetInfo.appendChild(document.createElement('h1'))
        name.textContent = currentPlanets[index][0].pl_name
        const year = planetInfo.appendChild(document.createElement('p'))
        year.innerHTML = `<b>Discovery Year:</b> ${currentPlanets[index][0].disc_year}`
        const orbit = planetInfo.appendChild(document.createElement('p'))
        orbit.innerHTML = `<b>Orbit Period:</b> ${Number.parseFloat(currentPlanets[index][0].pl_orbper).toFixed(2)} days`
        if (currentPlanets[index][0].pl_bmasse != '') {
            const mass = planetInfo.appendChild(document.createElement('p'))
            mass.innerHTML = `<b>Mass:</b> ${Number.parseFloat(currentPlanets[index][0].pl_bmasse).toFixed(2)} times The Earth's mass (${(currentPlanets[index][0].pl_bmasse * 5.972e24).toPrecision(2).replace('+', '')} kg)`
        }
        if (currentPlanets[index][0].st_rad != '') {
            const starDistance = planetInfo.appendChild(document.createElement('p'))
            starDistance.innerHTML = `<b>Distance from the nearest star:</b> ${Number.parseFloat(currentPlanets[index][0].st_rad).toFixed(2)} times the Sun's Radius (${(currentPlanets[index][0].st_rad * 695508).toExponential(2).replace('+', '')} km)`
        }
    })
}

const printTerrestrialPlanets = (generalData) => {
    const currentCategoryPlanets = Array.from(document.getElementsByClassName('category')[3].getElementsByClassName('exoplanetsInfo')[0].getElementsByClassName('planet'))
    const currentPlanets = [];
    currentPlanets[0] = generalData.filter(el => el.pl_name == 'TRAPPIST-1 c' && el.default_flag == 1);
    currentPlanets[1] = generalData.filter(el => el.pl_name == 'TRAPPIST-1 d' && el.default_flag == 1);
    currentPlanets[2] = generalData.filter(el => el.pl_name == 'TRAPPIST-1 b' && el.default_flag == 1);
    currentCategoryPlanets.forEach((element, index) => {
        const planetInfo = element.children[1]
        const name = planetInfo.appendChild(document.createElement('h1'))
        name.textContent = currentPlanets[index][0].pl_name
        const year = planetInfo.appendChild(document.createElement('p'))
        year.innerHTML = `<b>Discovery Year:</b> ${currentPlanets[index][0].disc_year}`
        const orbit = planetInfo.appendChild(document.createElement('p'))
        orbit.innerHTML = `<b>Orbit Period:</b> ${Number.parseFloat(currentPlanets[index][0].pl_orbper).toFixed(2)} days`
        if (currentPlanets[index][0].pl_bmasse != '') {
            const mass = planetInfo.appendChild(document.createElement('p'))
            mass.innerHTML = `<b>Mass:</b> ${Number.parseFloat(currentPlanets[index][0].pl_bmasse).toFixed(2)} times The Earth's mass (${(currentPlanets[index][0].pl_bmasse * 5.972e24).toPrecision(2).replace('+', '')} kg)`
        }
        if (currentPlanets[index][0].st_rad != '') {
            const starDistance = planetInfo.appendChild(document.createElement('p'))
            starDistance.innerHTML = `<b>Distance from the nearest star:</b> ${Number.parseFloat(currentPlanets[index][0].st_rad).toFixed(2)} times the Sun's Radius (${(currentPlanets[index][0].st_rad * 695508).toExponential(2).replace('+', '')} km)`
        }
    })
}

