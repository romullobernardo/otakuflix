import React, { Component } from 'react'
import { findDOMNode }      from 'react-dom'
import $                    from 'jquery'
import                           './ContentList.scss'
import ListItem             from './ListItem'


class ContentList extends Component 
{
    state = 
    {
        margin: 0
    }
    

    renderList = items => items.map(item => 
        {
            return (
                <ListItem
                    key={item.mal_id}
                    item={item}
                    fetchItem={this.props.fetchItem}
                    contentType={this.props.contentType}
                />
            )
        }
    )


    handleLeftClick = e => 
    {
        e.preventDefault();
        if (this.state.margin < 350) 
        {
            this.setState(
                {
                    margin: this.state.margin + 350
                }
            )
           
            const el = findDOMNode(this.refs.content)
            $(el).animate(
                {
                    marginLeft: "+=350px"
                },
                "fast"
            )
        }
    }


    handleRightClick = e => 
    {
        e.preventDefault()
        if (this.state.margin > -7700) 
        {
            this.setState(
                {
                    margin: this.state.margin - 350
                }
            )
           
            const el = findDOMNode(this.refs.content)
            $(el).animate(
                {
                    marginLeft: "-=350px"
                },
                "fast"
            )
        }
    }



    render() 
    {
        const { items } = this.props

        return (
             <div className="list-container">             

                <span
                    onClick={this.handleLeftClick}
                    className="left-controls"
                    role="button"
                >
                    <i className="material-icons medium icon">
                        keyboard_arrow_left
                    </i>    
                </span>

                <div className="module-section clearfix">                 

                    <ul id="content" ref="content">

                        <div id="rowTile">
                            {this.renderList(items)}
                        </div>
                        
                    </ul>
                
                </div>

                <span
                    onClick={this.handleRightClick}
                    className="right-controls"
                    role="button"
                >
                    <i className="material-icons medium icon">
                        keyboard_arrow_right
                    </i> 
                </span>

            </div>
        )
    }
}

export default ContentList