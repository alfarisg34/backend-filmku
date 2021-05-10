module.exports = fn = data => {
    return {
        "id": data.id ? data.id.value : '',
        "title": data.title ? data.title.value : '',
        "platform": data.platform ? data.platform.value : '',
        "genre": data.genre ? data.genre.value : '',
        "publisher": data.publisher ? data.publisher.value : '',
        "developer": data.developer ? data.developer.value : '',
        "urlFoto": data.urlFoto ? data.urlFoto.value : ''
    }
}