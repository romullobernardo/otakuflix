import constants from '../constants'

const initialState = 
{
    synopsis: '',
    title: '',
    trailer: '',
    id: '',
    mangaImage: '',
    contentType: ''
}


export default (state = initialState, action) =>
{
    switch (action.type) 
    {
        case constants.SET_ANIME_DESCRIPTION:
            return Object.assign({}, state, 
                {
                  synopsis: action.synopsis,
                  title: action.title,
                  trailer: action.trailer,
                  id: action.id,
                  contentType: action.contentType
                })

        case constants.SET_MANGA_DESCRIPTION:
            return Object.assign({}, state, 
                {
                    synopsis: action.synopsis,
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