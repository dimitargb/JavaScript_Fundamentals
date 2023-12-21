function movieInfo(arr){

    let list = {};

    for(let line of arr){

        if(line.includes('addMovie ')){
            let movieName = line.split('addMovie ')[1];
            if(!list.hasOwnProperty(movieName)){
                list[movieName] = {name: movieName};
            }  
        }

        else if(line.includes(' directedBy ')){
            let [movieName, director] = line.split(' directedBy ');
            if(list.hasOwnProperty(movieName)){
              list[movieName]['director']= director;
            }
        }
        else if(line.includes(' onDate ')){
            let [movieName, date] = line.split(' onDate ');
            if(list.hasOwnProperty(movieName)){
                list[movieName]['date']= date;
              }
        }
       
    }
    for (let movieName in list) {
        let movie = list[movieName];
        if (
            movie.hasOwnProperty('name') &&
            movie.hasOwnProperty('date') &&
            movie.hasOwnProperty('director')
        ) 
        {
            console.log(JSON.stringify(movie));
        }

    }
}


movieInfo([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]);