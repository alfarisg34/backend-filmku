module.exports = fn = data => {
    return {
        "id": data.genreID ? data.genreID.value.substring(19) : '',
        "genreID": data.genreID ? data.genreID.value : '',
        "genreName": data.genreName ? data.genreName.value : '',
    }
}