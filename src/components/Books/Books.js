import React, { Component } from 'react';

import api from '../../services/api';


export default class Book extends Component {

    state = {
        books: [],
    };

    componentDidMount() {

        api.get(`/livros`)
        .then(res => {
            const books = res.data;
            this.setState({ books });
        })
    }

    generateBookTr() {
        
        return this.state.books.map(item =>  
            <tr key={item.id}>
                <td>{item.author}</td>
                <td>{item.book}</td>
                <td>{item.pages}</td>
                <td>{item.isbn}</td>
            </tr>
        );
    }

    render() {
        
        return this.generateBookTr();
    }
}

