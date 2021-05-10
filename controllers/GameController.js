const connection = require('../connection/GameConnection');
const Format = require('../tools/format');

module.exports.getGames = async(req, res)=>{
        try{
            console.log("function starting")
            // Query data dari repo
            let games = await connection.getGames(req.query);

            if(!games.bindings.length){
                return res.status(200).json({
                    data:[],
                    message: "Data tidak ditemukan"
                });
            }

            games = games.bindings.map((game)=>Format(game));

            if(req.params.id){
                let game = games.filter((game)=>{
                    return game.id == req.params.id
                });
                res.status(200).json({
                    data:game[0],
                    message: game.length ? 'Data game berhasil didapatkan' : 'Tidak ada hasil dari pencarian'
                })
            }else{
                res.status(200).json({
                    data: games,
                    message: "Show all games"
                })
            }
        }catch(err){
            res.status(400).json(err);
        }
    }