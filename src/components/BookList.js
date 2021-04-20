
import React, { Component } from 'react'
import Book from './Book';
import './BookList.css';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';

export default class BookList extends Component {
    render(){
        return (
            <ThemeContext.Consumer> {(contextTheme) => (
                 <BookContext.Consumer>

                  {contextBook => {
                    
                    const { books } = contextBook;
                    const {changeTheme, isDarkTheme, dark, light } = contextTheme;
                    const theme = isDarkTheme ? dark : light;
                   
                   return(<section className="page-section bg-light" id="portfolio">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Booktopia</h2>
                            <h3 className="section-subheading text-muted">Lorem10</h3>
                        </div>
                        <div className="row">
                            {value.books.map((book , i) => {
            return <Book book ={book}
                         key = {i}
                         />
                         
        })

                            }
                        </div>
                   
                </div>
            </section>

                    )
                }}

            </BookContext.Consumer>
            )}
            </ThemeContext.Consumer>
              
        )}
}
