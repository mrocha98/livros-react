import React, { Component } from 'react';

import './styles.css';

import Books from '../Books/Books';

const THead = () => {
    
    return (
        <thead>
            <tr className="books-table-thead">
                <th>Author</th>
                <th>Book</th>
                <th>Pages</th>
                <th>ISBN</th>
            </tr>
        </thead>
    );
}

const TBody = () => {
    
    return (
        <tbody>
            <Books />
        </tbody>
    );
}

class Table extends Component {
    
    render () {
        return (
            <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                <THead />
                <TBody />
            </table>
        );
    }
}

export default Table;