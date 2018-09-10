import React     from 'react'
import { Link }  from 'react-router-dom'
import Proptypes from 'prop-types'

import               './ListItem.scss'


const handleClick = (item, fetchItem, contentType) => 
{
    fetchItem(item.mal_id, contentType)
    console.log(item.mal_id, contentType)
}


const ListItem = ({ item, fetchItem, contentType }) => 
{
    return (
        <Link 
            to='/description' 
            className='tile'
            onClick={ () => handleClick(item, fetchItem, contentType) }
        >

            <div className='tile-img'>
                <img className='tile-img' src={item.image_url} alt='' />
            </div>

            <div className='photo-overlay'>

                <div className='tile-text-container'>

                    <div><h5 className='search-tile-title'>{item.title}</h5></div>

                </div>

            </div>

        </Link>
    )
}


ListItem.propTypes = 
{
    fetchItem: Proptypes.func,
    contentType: Proptypes.string,
    item: Proptypes.object
}


export default ListItem 