import constants from '../constants'

const initialState = 
{
    animes: [],
    mangas: [],
    items: '',
    title: '',
    trailer: '',
    id: '',
    mangaImage: '',
    contentType: ''
}


export const items = (state = initialState, action) =>
{
    switch (action.type) 
    {
        case constants.SET_TOP_ANIMES:
            return Object.assign({}, state, 
                {
                    animes: action.animeArray 
                })

        case constants.SET_TOP_MANGAS:
            return Object.assign({}, state, 
                {
                    mangas: action.mangaArray
                })

        case constants.SET_ANIME_DESCRIPTION:
            return Object.assign({}, state, 
                {
                  items: action.item,
                  title: action.title,
                  trailer: action.trailer,
                  id: action.id,
                  contentType: action.contentType
                })

        case constants.SET_MANGA_DESCRIPTION:
            return Object.assign({}, state, 
                {
                    items: action.item,
                    title: action.title,
                    trailer: action.trailer,
                    id: action.id,
                    mangaImage: action.mangaImg,
                    contentType: action.contentType
                })

        default:
            return state
    }
}