const connection = require('../connection/FilmConnection');
const Format = require('../tools/format');

module.exports.getFilms = async(req, res)=>{
        try{
            console.log("function starting")
            // Query data dari repo
            let films = await connection.getFilms(req.query);
            if(!films.bindings.length){
                return res.status(200).json({
                    data:[],
                    message: "Data tidak ditemukan"
                });
            }
            console.log("hai")
            films = films.bindings.map((film)=>Format(film));
            console.log("halo")
            if(req.params.id){
                let film = films.filter((film)=>{
                    return film.id == req.params.id
                });
                res.status(200).json({
                    data:film[0],
                    message: film.length ? 'Data film berhasil didapatkan' : 'Tidak ada hasil dari pencarian'
                })
            }else{
                res.status(200).json({
                    data: films,
                    message: "Show all films"
                })
            }
        }catch(err){
            res.status(400).json(err);
        }
    }