class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/characters';
    _apiKey = 'apikey=b71a15405ecfefbd256a4c6fc0d4483b';
    _baseOfset = 310

    getResource = async (url) => {
        let res = await fetch(url);

        if(!res.ok){
            throw new Error(`ошибка по адресу ${url}, status ${res.status}`)
        }

        return await res.json()
    } 

    getAllCharacters = async (offset = this._baseOfset) => {
        const res = await this.getResource(`${this._apiBase}?limit=9&offset=${offset}&${this._apiKey}`)
        return res.data.results.map(this._transforsCharacter)
    }

    getCharacter = async (id) => {
        const res = await this.getResource(`${this._apiBase}/${id}?${this._apiKey}`)
        return this._transforsCharacter(res.data.results[0])
    }

    _transforsCharacter = (char) => {
        return {
            id: char.id,
            name: char.name,
            desctiptoin: char.description ? `${char.description.slice(0, 210)}...` : 'There is no description for this character',
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        }
    }
}

export default MarvelService