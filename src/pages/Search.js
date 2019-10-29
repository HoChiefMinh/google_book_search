import React, { Component } from 'react';
// import { Link, Redirent } from 'react-router-dom';
import API from '../utils/API';
import { Container } from '../components/Grid';
import Jumbotron from '../components/Jumbotron';
import { Input, FormBtn } from '../components/Form';

class Search extends Component {
  state = {
    title: '',
    toResults: false,
    results: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getNewBooks()
      .then(res =>
        this.setState({ books: res.data, title: '', author: '', synopsis: '' })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  // handles any changes to the input fields
  handleInputChanges = event => {
    // Pull the name and value properties off of the event.target (the element which triggerd the event)
    const { name, value } = event.target;

    //Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  //When form is submitted, prevent the default event and alert the search
  handleFormSubmit = event => {
    event.preventDefault();
    alert(`Search: ${this.state.search}`);
    this.setState({ search: '' });
  };

  render() {
    return (
      <Container fluid>
        
        {/* <div class='jumbotron jumbotron-fluid'>
          <div class='container'>
            <h1 class='display-4'>Google Book Search (React)</h1>
            <p class='lead'>Look up a book</p>
          </div>
        </div> */}
        
        <Jumbotron>
          <div class='container'>
            <h1 class='display-4'>Google Book Search (React)</h1>
            <p class='lead'>Search for a book!</p>
          </div>
        </Jumbotron>
        <Container>
          <h3>Books Search</h3>
           <form>
             <Input name='books' placeholder='Title of Book (Required)' />
             <FormBtn>Submit</FormBtn> 
           </form>
        </Container>
        <div class='card-body'>

        <div class='card-body'>

        </div>
        </div>
      </Container>
    );
  }
}

export default Search;

// class SearchForm extends Component {
//   // Setting the initial calues of this.state.username and this.state.username and this.state.password
//   state = {
//     search: ''
//   };

//   

//   render() {
//     return (
//       <form>
//         <p>Search: {this.state.search}</p>
//         <input
//           type='text'
//           placeholder='Search'
//           name='search'
//           value={this.state.search}
//           onChange={this.handleInputChanges}
//         />
//         <button onClick={this.handleFormSubmit}>Submit</button>
//       </form>
//     );
//   }
// }
