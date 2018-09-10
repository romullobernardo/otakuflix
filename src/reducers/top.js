import constants from '../constants'

const initialState = 
{
    animes: [],
    mangas: [],
}


export default (state = initialState, action) =>
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

        default:
            return state
    }
}