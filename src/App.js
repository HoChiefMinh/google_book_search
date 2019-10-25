import React from 'react';
import './App.css';

const App = () => {
  return (
    <section>
      <form>
        <label> 
          <span>Search for books</span>
          <input
            type='search'
            placeholder='Insert Book'
          />
          <button type='submit'>Search</button>
        </label>
      </form>
    </section>
  );
}

export default App;
