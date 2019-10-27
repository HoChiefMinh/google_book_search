import React, { Component } from 'react';
import { Col, Row, Container } from '../components/Grid';
class BookSearch extends Component {
    state = {
        books: [],
        title: '',
        author: '',
        summary: ''
    };

    render () {
        return (
            <Container fluid>
                <Row>
                    <Col size='lg-10 md-8 sm-6'>
                        
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default BookSearch;