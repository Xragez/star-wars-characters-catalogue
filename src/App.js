import React from 'react'
import './App.css';
import List from './components/list/List'
import Title from './components/title/Title'


function App() {

  return (
    <div className="app">
      <Title size='large'>Star Wars Characters Catalogue</Title>
      <List/>
    </div>
  );
}

export default App;
