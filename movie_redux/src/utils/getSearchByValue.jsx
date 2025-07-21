export const getSearchByValue=(movies,value)=>{
    

    const filterData=value?.length>0 ? (  movies.filter((movie)=>movie.movieName.toLowerCase().includes(value.toLowerCase()) || movie.directorName.toLowerCase().includes(value.toLowerCase()))) : movies 
    return filterData;
}