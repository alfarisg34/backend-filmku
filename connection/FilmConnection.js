const axios = require('axios');
const qs = require('qs');

const DATA_URL = "http://localhost:3030";

const headers = {
    'Accept': 'application/sparql-results+json,*/*;q=0.9',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
}
exports.getFilms = async(param)=>{
    // Query
    const queryData = {
    query: `PREFIX data:<http://example.com/>
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
    SELECT ?id ?title ?releaseYear ?director ?description ?urlPic ?duration
    WHERE{
        ?sub rdf:type data:film
        OPTIONAL {?sub data:id ?id.}
        OPTIONAL {?sub data:title ?title.}
        OPTIONAL {?sub data:releaseYear ?releaseYear.}
        OPTIONAL {?sub data:director ?director.}
        OPTIONAL {?sub data:description ?description.}
        OPTIONAL {?sub data:urlPic ?urlPic.}
        OPTIONAL {?sub data:duration ?duration.}
        FILTER regex(?title, "${param.title ? param.title : ''}", "i")
        FILTER regex(?releaseYear, "${param.releaseYear ? param.releaseYear : ''}", "i")
        FILTER regex(?director, "${param.director ? param.director : ''}", "i")
        FILTER regex(?description, "${param.description ? param.description : ''}", "i")
        FILTER regex(?duration, "${param.duration ? param.duration : ''}", "i")
    }`
    };
    try{
        const {data} = await axios(`${DATA_URL}/filmku/query`,{
            method: 'POST',
            headers,
            data: qs.stringify(queryData)
        });
        return data.results;
    }catch(err){
        res.status(400).json(err);
    }
}
exports.getGenreByFilm = async(param) => {
    const queryData = {
        query: `PREFIX data:<http://example.com/>
        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
        
        SELECT DISTINCT ?id ?genreID ?genreName
        
        WHERE {
          ?uri rdf:type data:film.
          ?uri data:id ?id.
          ?uri data:isGenre ?genreID.
          ?genreID data:genre ?genreName.
          FILTER(regex(str(?uri), "${param.uri ? param.uri : ''}", "i"))
        }`
    }
    try{
        const {data} = await axios(`${DATA_URL}/filmku/query`,{
            method: 'POST',
            headers,
            data: qs.stringify(queryData)
        });
        console.log(data.results)
        return data.results;
    }catch(err){
        res.status(400).json(err);
    }
}
exports.getFilmByGenre = async(param) => {
    const queryData = {
        query: `PREFIX data:<http://example.com/>
        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
        SELECT ?id ?title ?releaseYear ?director ?genreName ?description ?urlPic ?duration
        WHERE {
            ?sub rdf:type data:film.
            OPTIONAL {?sub data:id ?id.}
            OPTIONAL {?sub data:title ?title.}
            OPTIONAL {?sub data:releaseYear ?releaseYear.}
            OPTIONAL {?sub data:director ?director.}
            OPTIONAL {?sub data:description ?description.}
            OPTIONAL {?sub data:urlPic ?urlPic.}
            OPTIONAL {?sub data:duration ?duration.}
            OPTIONAL {?sub data:isGenre ?genreID.}
            OPTIONAL {?genreID data:genreName ?genreName.}
          FILTER(regex(str(?genreName), "${param.genre ? param.genre : ''}", "i"))
        }`
    }
    try{
        const {data} = await axios(`${DATA_URL}/filmku/query`,{
            method: 'POST',
            headers,
            data: qs.stringify(queryData)
        });
        return data.results;
    }catch(err){
        res.status(400).json(err);
    }
}
module.exports = exports;
