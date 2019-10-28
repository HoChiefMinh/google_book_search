import React from 'react';
import Nav from '../components/Nav';
import Jumbotron from '../components/Jumbotron';
// import { Container, Row, Col } from '../components/Grid';

function Search() {
  return (
    // <Container fluid>
    //   <Row>
    //   <Col size='11'>
    <div class='jumbotron jumbotron-fluid'>
      <div class='container'>
        <h1 class='display-4'>Google Book Search (React)</h1>
        <p class='lead'>
          Look up a book or an author.
        </p>
      </div>
    </div>
    //     <Jumbotron>
    //       <h1>Hello World</h1>
    //     </Jumbotron>
    //     </Col>
    //   </Row>
    // </Container>
  );
}

export default Search;

// class SearchForm extends Component {
//   // Setting the initial calues of this.state.username and this.state.username and this.state.password
//   state = {
//     search: ''
//   };

//   // handles any changes to the input fields
//   handleInputChanges = event => {
//     // Pull the name and value properties off of the event.target (the element which triggerd the event)
//     const { name, value } = event.target;

//     //Set the state for the appropriate input field
//     this.setState({
//       [name]: value
//     });
//   };

//   //When form is submitted, prevent the default event and alert the search
//   handleFormSubmit = event => {
//     event.preventDefault();
//     alert(`Search: ${this.state.search}`);
//     this.setState({ search: '' });
//   };

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
