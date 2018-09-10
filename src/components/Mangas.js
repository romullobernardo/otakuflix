import React, { Component } from 'react'
import { connect }          from 'react-redux'

import { getMangas }        from '../actions/items'

import                           'materialize-css/dist/css/materialize.min.css'



class Mangas extends Component
{
 
    componentDidMount() 
    {
      const { fetchMangas } = this.props
      
      fetchMangas()
    }


    render()
    {
        return (
            <div className='center'>

                <h3 className='white-text center'>TOP MANGAS</h3>      

                <div className="row">
                {
                    this.props.mangas.map(manga => 
                        {
                            return (
                                <div key={manga.mal_id} className="col s6 m3 l2 hoverable">
                                    <div className="card medium">
                                        <div className="card-image">
                                            <img src={manga.image_url} alt={manga.image_url} /> 
                                        </div>
                                        <div className="card-title">
                                            {manga.title}
                                        </div>            
                                    </div>
                                </div>
                            )
                        }
                    )                
                }
                </div>

            </div>
        )
    }
}


const mapStateToProps = state =>
{
    return {
        mangas: state.top.mangas
    }
}


const mapDispatchToProps = dispatch =>
(
    {
        fetchMangas: () => 
        {
            dispatch(getMangas())
        }
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Mangas)