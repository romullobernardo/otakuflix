import constants from '../constants'

export const getAnimes = () =>
{
    return (dispatch) =>
    {
        fetch('https://api.jikan.moe/top/anime/1/airing')
        .then((r) => 
        {
            return r.json()
        })
        .then((data) => 
        {
            dispatch(
                {
                    type: constants.SET_TOP_ANIMES,
                    animeArray: data.top
                })
        })
    }
}


export const getMangas = () =>
{
    return (dispatch) =>
    {
        fetch('https://api.jikan.moe/top/manga/1/manga')
        .then((r) => 
        {
            return r.json()
        })
        .then((data) => 
        {
            dispatch(
                {
                    type: constants.SET_TOP_MANGAS,
                    mangaArray: data.top
                })
        })
    }
}


export const fetchItem = (item, contentType) =>
{
    const url1 = `https://api.jikan.moe/v3/${contentType}/`

    return (dispatch) =>
    {
        fetch(`${url1}${item.mal_id}`)
        .then( r => 
        {
            return r.json()
        })

        .then((data) => 
        {
            if(contentType === 'anime')
            {
                dispatch(
                    {
                        type: constants.SET_ANIME_DESCRIPTION,
                        item: data.synopsis,
                        title: data.title,
                        trailer: data.trailer_url,
                        id: data.mal_id,
                        contentType
                    })
            }
            else if (contentType === 'manga')
            {
                dispatch(
                    {
                        type: constants.SET_MANGA_DESCRIPTION,
                        item: data.synopsis,
                        title: data.title,
                        id: data.mal_id,
                        mangaImg: item.image_url,
                        contentType
                    })
            }
        })

    }
}
