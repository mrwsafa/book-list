import React, { Component } from 'react'

export default class Book extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.book.title}</h2>
                <h4>{this.props.book.author}</h4>
                    
            </div>
        )
    }
}