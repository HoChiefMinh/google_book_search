import React, { Component } from 'react';

class SearchForm extends Component {
  // Setting the initial calues of this.state.username and this.state.username and this.state.password
  state = {
    search: ''
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
      <form>
        <p>Search: {this.state.search}</p>
        <input
          type='text'
          placeholder='Search'
          name='search'
          value={this.state.search}
          onChange={this.handleInputChanges}
        />
        <button onClick={this.handleFormSubmit}>Submit</button>
      </form>
    );
  }
}

export default SearchForm;
