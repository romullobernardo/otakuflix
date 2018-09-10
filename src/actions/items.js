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


export const itemsIsLoading = bool => 
{
    return {
        type: constants.ITEMS_IS_LOADING,
        isLoading: bool
    }
}


export const fetchItem = (item, contentType) =>
{
    const url1 = `https://api.jikan.moe/v3/${contentType}/`

    return (dispatch) =>
    {
        dispatch(itemsIsLoading(true))


        fetch(`${url1}${item}`)
        .then( r => 
        {
            if (!r.ok) 
            {
                throw Error(r.statusText)
            }

            dispatch(itemsIsLoading(false))

            return r.json()
        })

        .then((data) => 
        {
            if(contentType === 'anime')
            {
                dispatch(
                    {
                        type: constants.SET_ANIME_DESCRIPTION,

                        synopsis: data.synopsis,
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

                        synopsis: data.synopsis,
                        title: data.title,
                        id: data.mal_id,
                        mangaImg: data.image_url,
                        contentType
                    })
            }
        })

    }
}
