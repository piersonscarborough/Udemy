let movies = [
    {
        title: "Inception",
        seen: "True",
        rating: "5 Stars",
    },
    {
        title: "Overlord",
        seen: "True",
        rating: "5 Stars",
    },
    {
        title: "Avengers: Endgame",
        seen: "False",
        rating: "5 Stars",
    }
]
/*
movies.forEach(function(mov){
    if(mov.seen === "True"){
        console.log(`You have watched "${mov.title}" - ${mov.rating}`);
    } else{
        console.log(`You have not watched "${mov.title}" - ${mov.rating}`);
    }
});
*/

function getMovie(mov){
    if(mov.seen === "True"){
        console.log(`You have watched "${mov.title}" - ${mov.rating}`);
    } else{
        console.log(`You have not watched "${mov.title}" - ${mov.rating}`);
    }
}

movies.forEach(function(mov){
    getMovie(mov);
});

/*
for(let i=0; i<movies.length; i++){
    if(movies[i].seen === "True"){
        console.log(`You have watched "${movies[i].title}" - ${movies[i].rating}`);
    } else{
        console.log(`You have not watched "${movies[i].title}" - ${movies[i].rating}`);
    }
}
*/
