import React, { Component } from 'react';
import { Form, Button, Row, Col, Container,Card }from 'react-bootstrap';

class Pokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            poke: '',
            details: null
        }
    }
    render() {
      return (
        <Container>
            <Row>
                <Col>
                        <Form  style={{outerWidth : 500 + 'px' }} onSubmit={(e) => {e.preventDefault(); this.getPokemon()}}>
                            <Form.Group controlId="pokemon">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Pokemon's Name" required onChange={(e) => this.setState({poke: e.target.value}) }/>
                            </Form.Group>
                            <Button variant="primary" type="submit" >
                                 GO!
                            </Button>
                        </Form>
                </Col>
                {
                    this.state.details !== null &&
                        <Col style={{marginTop: 50}}>
                            <Card style={{padding: 2.25 + 'rem'}}>
                            <Card.Body>
                                <Card.Title>Type: {this.state.details.types[0].type.name.toUpperCase()}</Card.Title>
                                <Card.Text style={{whiteSpace: 'pre-line', fontSize: 19 }}>
                                  Weight : <b>{this.state.details.weight*100 + ' grams'}</b> <br/>
                                  Height : <b>{this.state.details.height*10 + ' Cms'}</b> <br/>
                                  Abilities: <b>{this.state.details.abilities[0].ability.name.toUpperCase()}, {this.state.details.abilities[1].ability.name.toUpperCase()}</b> <br/>
                                  Moves: <b>{this.state.details.moves[0].move.name.toUpperCase()}, {this.state.details.moves[1].move.name.toUpperCase()}</b> <br/>
                                </Card.Text>
                            </Card.Body>
                            </Card> 
                        </Col>
                }
            </Row>
        </Container>
      );
    }
    getPokemon() {
        fetch('https://pokeapi.co/api/v2/pokemon/' + this.state.poke)
        .then(res => res.json())
        .then(json => {
            this.setState({
                details: json
            })
        })
        .catch(e => console.log('Sorry we coulnt find your Pokemon'));  
    }
}

export default Pokemon