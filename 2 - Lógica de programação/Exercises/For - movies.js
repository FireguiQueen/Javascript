const movies = [
    { title: "The Shawshank Redemption", director: "Frank Darabont", year: 1994 },
 
    { title: "The Godfather", director: "Francis Ford Coppola", year: 1972 },
 
    { title: "The Dark Knight", director: "Christopher Nolan", year: 2008 },
 
    { title: "12 Angry Men", director: "Sidney Lumet", year: 1957 },
 
    { title: "Schindler's List", director: "Steven Spielberg", year: 1993 },
 
    { title: "The Lord of the Rings: The Return of the King", director: "Peter Jackson", year: 2003 },
 
    { title: "Pulp Fiction", director: "Quentin Tarantino", year: 1994 },
 
    { title: "The Good, the Bad and the Ugly", director: "Sergio Leone", year: 1966 },
 
    { title: "Forrest Gump", director: "Robert Zemeckis", year: 1994 },
 
    { title: "Inception", director: "Christopher Nolan", year: 2010 }
  ];
 

// Conte o número de filmes. [concluído]
function countMovies(obj){
    return obj.length;
}; console.log(countMovies(movies))


// Conte o número de filmes dirigidos por Christopher Nolan. [concluído]
// Liste todos os filmes dirigidos por Christopher Nolan. [concluído]
const allNolanMovies = [];
for(let movie of movies){
    if(movie.director.toLocaleLowerCase() === 'christopher nolan'){
        allNolanMovies.push(movie);
    }
}
console.log(allNolanMovies.length, allNolanMovies)

console.log('/////////////////////////////////////////')

// Conte o número de filmes lançados na década de 90. [concluído]
// Liste todos os filmes lançados na década de 90. [concluído]
// Liste todos os filmes lançados depois da década de 90. [concluído]
    const decade90Movies = [];
    const afterdecade90Movies = [];
    for(let movie of movies){
        if(movie.year >= 1990 && movie.year < 2000){
            decade90Movies.push(movie);
        } else if(movie.year >= 2000){
            afterdecade90Movies.push(movie)
        }
    }


console.log('/////////////////////////////////////////')

