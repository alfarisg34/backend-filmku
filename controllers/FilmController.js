const FilmConnection = require('../connection/FilmConnection');
const FormatFilm = require('../tools/FormatFilm');
const FormatGenre = require('../tools/FormatGenre');

module.exports = {
    getFilms: async (req, res) => {
        try {
            let films = await FilmConnection.getFilms(req.query);
            if (!films.bindings.length) {
                return res.status(200).json({
                    success: true,
                    status: 200,
                    data: [],
                    message: 'Data Film tidak ditemukan'
                })
            }
            films = films.bindings.map((film) => FormatFilm(film));
            if (req.params.id) {
                let film = films.filter((film) => { 
                    return film.id == req.params.id });
                
                return res.status(200).json({
                    success: true,
                    status: 200,
                    data: film[0],
                    message: film.length ? 'Data film berhasil didapatkan' : 'Data film tidak ditemukan'
                });

            } else {
                return res.status(200).json({
                    success: true,
                    status: 200,
                    data: films,
                    message: 'Data semua film berhasil didapatkan'
                });
            }
            
        } catch (err) {
            return res.status(200).json({
                success: false,
                status: 200,
                data: '',
                message: `Error: ${err.message}`
            })
        }
    },
    getGenreFilm: async (req, res) => {
        try {
            let genres = await FilmConnection.getGenreByFilm(req.query);
            if (!genres.bindings.length) {
                return res.status(200).json({
                    success: true,
                    status: 200,
                    data: [],
                    message: 'Data genre tidak ditemukan'
                })
            }

            genres = genres.bindings.map((genre) => FormatGenre(genre));

            return res.status(200).json({
                success: true,
                status: 200,
                data: genres,
                message: 'Data semua genre berhasil didapatkan'
            });
            
        } catch (err) {
            return res.status(200).json({
                success: false,
                status: 200,
                data: '',
                message: `Error: ${err.message}`
            })
        }
    },
    getFilmByGenre: async (req, res) => {
        try {
            let films = await FilmConnection.getFilmByGenre(req.params);

            if (!films.bindings.length) {
                return res.status(200).json({
                    success: true,
                    status: 200,
                    data: [],
                    message: 'Data film tidak ditemukan'
                })
            }

            films = films.bindings.map((film) => FormatFilm(film));

            return res.status(200).json({
                success: true,
                status: 200,
                data: films,
                message: 'Data semua film berhasil didapatkan'
            });
            
        } catch (err) {
            return res.status(200).json({
                success: false,
                status: 200,
                data: '',
                message: `Error: ${err.message}`
            })
        }
    },
    getFilmByActor: async (req, res) => {
        try {
            let films = await FilmConnection.getFilmByActor(req.params);

            if (!films.bindings.length) {
                return res.status(200).json({
                    success: true,
                    status: 200,
                    data: [],
                    message: 'Data film tidak ditemukan'
                })
            }

            films = films.bindings.map((film) => FormatFilm(film));

            return res.status(200).json({
                success: true,
                status: 200,
                data: films,
                message: 'Data semua film berhasil didapatkan'
            });
            
        } catch (err) {
            return res.status(200).json({
                success: false,
                status: 200,
                data: '',
                message: `Error: ${err.message}`
            })
        }
    },
}