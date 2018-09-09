import React, { Component } from 'react'
import { connect }          from 'react-redux'

import                           'materialize-css/dist/css/materialize.min.css'


class Description extends Component 
{

    renderContent = (id, trailer, description, contentType, mangaImage, title) =>
    {
        if(contentType === 'anime')
        {
            return (
                <div className="container">

                    <h2 className='white-text center'>{ title }</h2>

                    <div className="video-container">
                        <iframe title={id} width="853" height="480" src={ trailer } frameBorder="0" allowFullScreen>
                        </iframe>
                    </div>                
                
                    <p className='white-text center'>{ description }</p>

                </div>
            )  
        }  
        else if (contentType === 'manga')
        {
            return (
                <div className="row">                    

                    <div className="col s12 m6"> 
                        <div className="card">
                            <div className="card-image">
                                <img src={mangaImage} alt={mangaImage} />
                            </div>                                  
                        </div>
                    </div>

                    <div className="col s12 m6">
                        <h2 className='white-text center'>{ title }</h2>
                        <br />
                        <p className='white-text center'>{ description }</p>
                    </div>

                </div>
            )
        }
    }


    render() 
    {
        const { description, title, trailer, id, contentType, mangaImage } = this.props 

        return (
            <div>                
                {this.renderContent(id, trailer, description, contentType, mangaImage, title)}
            </div>
        )
    }
}

const mapStateToProps = state =>
{
    return {
        description: state.items.items,
        title: state.items.title,
        trailer: state.items.trailer,
        id: state.items.id,
        mangaImage: state.items.mangaImage,
        contentType: state.items.contentType
    }
}


export default connect(mapStateToProps)(Description)