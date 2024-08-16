import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {
    const _apiBaseCharacter = 'https://gateway.marvel.com:443/v1/public/characters';
    const _apiBaseComics = 'https://gateway.marvel.com:443/v1/public/comics';
    const _apiKey = 'apikey=b71a15405ecfefbd256a4c6fc0d4483b';
    const _baseOfset = 310

    const {request, clearError, process, setProcess} = useHttp()

    const getAllCharacters = async (offset = _baseOfset) => {
        const res = await request(`${_apiBaseCharacter}?limit=9&offset=${offset}&${_apiKey}`)
        return res.data.results.map(_transforsCharacter)
    }

    const getCharacter = async (id) => {
        const res = await request(`${_apiBaseCharacter}/${id}?${_apiKey}`)
        return _transforsCharacter(res.data.results[0])
    }

    const getAllComics = async (offset = _baseOfset) => {
        const res = await request(`${_apiBaseComics}?limit=8&offset=${offset}&${_apiKey}`)
        return res.data.results.map(_transforsComics)
    }

    const getComics = async (id) => {
        const res = await request(`${_apiBaseComics}/${id}?${_apiKey}`)
        return _transforsComics(res.data.results[0])
    }

    const _transforsCharacter = (char) => {
        return {
            id: char.id,
            name: char.name,
            description: char.description ? `${char.description.slice(0, 210)}...` : 'There is no description for this character',
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        }
    }

    const _transforsComics = (comics) => {
        return {
            id: comics.id,
            title: comics.title,
            thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
            description: comics.description ? `${comics.description.slice(0, 210)}...` : 'There is no description for this character',
            pageCount: comics.pageCount
				? `${comics.pageCount} p.`
				: "No information about the number of pages",
            language: comics.textObjects[0]?.language || "en-us",
			price: comics.prices[0].price
				? `${comics.prices[0].price}$`
				: "not available",
        }
    }

    return {getAllCharacters, getCharacter, clearError, getAllComics, getComics, process, setProcess}
}

export default useMarvelService