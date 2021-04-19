
import React, { Component } from 'react'
import Book from './Book';
import './BookList.css';

export default class BookList extends Component {
    render() {

        const bookList = this.props.books.map((book , i) => {
            return <Book book ={book}
                         key = {i}
                         />
                         
        })
        
        return (
            <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Booktopia</h2>
                        <h3 className="section-subheading text-muted">Lorem10</h3>
                    </div>
                    <div className="row">
                        {bookList} 
                    </div>
               
            </div>
        </section>
        )
    }
}
