import React from 'react';

import './App.sass';
import './App.css';
import './styles.css'

import Table from './components/Table/Table';


function App() {
  return (
    <>
      <h1 className="title is-1 has-text-dark">Books</h1>
      <Table />
    </>
  );
}

export default App;
