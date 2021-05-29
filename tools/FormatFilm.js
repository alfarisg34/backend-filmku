module.exports = fn = data => {
    return {
        "id": data.id ? data.id.value : '',
        "title": data.title ? data.title.value : '',
        "releaseYear": data.releaseYear ? data.releaseYear.value : '',
        "actor": data.actor ? data.actor.value : '',
        "director": data.director ? data.director.value : '',
        "genre": data.genre ? data.genre.value : '',
        "description": data.description ? data.description.value : '',
        "urlPic": data.urlPic ? data.urlPic.value : '',
        "duration": data.duration ? data.duration.value : '',
    }
}