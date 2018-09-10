import React, { Component } from 'react'
import { Link }             from 'react-router-dom'
import { connect }          from 'react-redux'

import { getAnimes }        from '../actions/items'

import                           'materialize-css/dist/css/materialize.min.css'



class Animes extends Component 
{

    componentDidMount() 
    {
      const { fetchAnimes } = this.props
      
      fetchAnimes()
    }



    render() 
    {
        return (
            <div>
                <div className='center'>
                    <h3 className='white-text center olha-eu'>TOP ANIMES AIRING</h3>      

                    <div className="row">
                    {
                        this.props.animes.map(anime => 
                            (                              
                                <div key={anime.mal_id} className="col s6 m3 l2 hoverable"> 
                                    <div className="card medium">
                                        <div className="card-image">
                                            <img src={anime.image_url} alt={anime.image_url} />
                                        </div>
                                        <div className="card-title">
                                            {anime.title}
                                        </div>            
                                    </div>
                                </div>                                
                            )
                        )                
                    }
                    </div>
                </div>

            </div>
        )
    }
}


const mapStateToProps = state =>
{
    return {
        animes: state.items.animes
    }
}


const mapDispatchToProps = dispatch =>
(
    {
        fetchAnimes: () => 
        {
            dispatch(getAnimes())
        }
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Animes)