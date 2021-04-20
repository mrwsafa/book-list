
import React, { Component } from 'react';
import BookList from './BookList';
import BookContextProvider from '../contexts/BookContextProvider';
import ThemeContextProvider from '../contexts/ThemeContextProvider';


export default class App extends Component {

   
    render() {
        return (
              <ThemeContextProvider>
                  <BookContextProvider>
                    <BookList/>
                  </BookContextProvider>
              </ThemeContextProvider>
        );
    }
}
