function addMovies(array) {

    let movieInfo = {};

    for (let line of array) {
        if (line.includes('addMovie ')) {
            let movieName = line.split('addMovie ')[1];
            if (!movieInfo.hasOwnProperty(movieName)) {
                movieInfo[movieName] = { name: movieName };
            }

        }
        else if (line.includes(' directedBy ')) {
            let [movieName, director] = line.split(' directedBy ');
            if (movieInfo.hasOwnProperty(movieName)) {
                movieInfo[movieName]['director'] = director;
            }

        }
        else if (line.includes(' onDate ')) {
            let [movieName, date] = line.split(' onDate ');
            if (movieInfo.hasOwnProperty(movieName)) {
                movieInfo[movieName]['date'] = date;
            }

        }
    }
    for (let movieName in movieInfo) {
        let movie = movieInfo[movieName];
        if (
            movie.hasOwnProperty('name') &&
            movie.hasOwnProperty('date') &&
            movie.hasOwnProperty('director')
        ) {
            console.log(JSON.stringify(movie));
        }

    }
}
addMovies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ])