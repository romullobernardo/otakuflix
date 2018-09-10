import constants from '../constants'

const initialState = 
{
    isLoading: false
}


export default (state = initialState, action) =>
{
    switch (action.type) 
    {
        case constants.ITEMS_IS_LOADING:
            return Object.assign({}, state,
                {
                    isLoading: action.isLoading
                })

        default:
            return state
    }
}