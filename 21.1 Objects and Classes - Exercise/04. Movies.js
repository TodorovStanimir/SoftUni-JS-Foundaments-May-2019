function movies(input) {
    let moviesList = {};
    input.forEach(line => {
        if (line.includes('addMovie')) {
            let name = line.split(' ').filter(elem => elem !== 'addMovie').join(' ');
            moviesList[name] = {};
            moviesList[name].name = name;
        } else if (line.includes(' directedBy ')) {
            let [name, director] = line.split(' directedBy ');
            if (moviesList.hasOwnProperty(name)) {
                moviesList[name].director = director;
            }
        } else if (line.includes(' onDate ')) {
            let [name, date] = line.split(' onDate ');
            if (moviesList.hasOwnProperty(name)) {
                moviesList[name].date = date;
            }
        }
    });
    for (let film in moviesList) {
        if (moviesList[film].director !== undefined && moviesList[film].date !== undefined) {
            console.log(JSON.stringify(moviesList[film]));
        }
    }
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'])