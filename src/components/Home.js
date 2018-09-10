import React, { Component }                from 'react'
import { connect }                         from 'react-redux'

import { NetflixList }                     from './NetflixList'
import { fetchItem, getAnimes, getMangas } from '../actions/items'

import                                          'materialize-css/dist/css/materialize.min.css'


class Home extends Component 
{
    componentDidMount() 
    {
      const { fetchAnimes, fetchMangas, fetchItem } = this.props
      
      fetchAnimes()
      fetchMangas()
      fetchItem()
    }


    render() 
    {        
        const { animes, mangas, fetchItem } = this.props
    
        return (
            <div>

                <h5 className='white-text'>Top animes airing</h5>

                <NetflixList 
                    items={animes} 
                    fetchItem={fetchItem}
                    contentType={'anime'}
                />


                <h5 className='white-text'>Top mangas</h5>

                <NetflixList 
                    items={mangas} 
                    fetchItem={fetchItem}
                    contentType={'manga'}
                />

            </div>
        )
    }
}


const mapStateToProps = state =>
{
    return {
        animes: state.top.animes,
        mangas: state.top.mangas
    }
}


const mapDispatchToProps = dispatch =>
(
    {
        fetchAnimes: () => 
        {
            dispatch(getAnimes(dispatch))
        },

        fetchMangas: () => 
        {
            dispatch(getMangas(dispatch))
        },

        fetchItem: (item, contentType) => 
        {
            if(item)
            {
                dispatch(fetchItem(item, contentType))
            }
        }

    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Home)