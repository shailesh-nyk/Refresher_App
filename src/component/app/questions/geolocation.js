import React, { Component } from 'react';
import { Form, Button, Row, Col, Container, Card }from 'react-bootstrap';

class Geolocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addr : null,
            called: false,
            lat: '',
            long: '',
        }
    }
    render() {
        if(!this.state.called)  {
            this.getCurrent();
        } 
        return (
            <Container>
                <Row>
                    <Col>
                        <Form style={{outerWidth : 500 + 'px' }} onSubmit={(e) => this.submitForm(e)}>
                            <Form.Group controlId="lat">
                                <Form.Label>Latitude</Form.Label>
                                <Form.Control type="number" placeholder="Enter latitude" required value={this.state.lat} onChange={(e) => this.setState({lat: e.target.value})}/>
                            </Form.Group>
                            <Form.Group controlId="long">
                                <Form.Label>Longitude</Form.Label>
                                <Form.Control type="number" placeholder="Enter longitude" required value={this.state.long} onChange={(e) => this.setState({long: e.target.value})}/>
                            </Form.Group>
                            <Button variant="primary" type="submit" >
                                Get Address
                            </Button>
                        </Form>
                    </Col>
                    <Col style={{paddingTop: 48}}>
                        <Card style={{padding: 3.25 + 'rem'}}>
                            <Card.Body>
                                <Card.Title>Your address</Card.Title>
                                <Card.Text style={{whiteSpace: 'pre-line', fontSize: 19 }}>
                                    {this.state.addr}
                             </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
    getAddress(lat, long) {
        return new Promise((resolve, reject) => {
                    let url = 'https://us1.locationiq.com/v1/reverse.php?key=7cc15b451afa70&lat=' + lat + '&lon=' + long + '&format=json';
                    fetch(url)
                    .then(res => res.json())
                    .then(json => resolve(json.display_name))
                    .catch(e => reject('Sorry we coulnt find your address'));  
        })
   }
   getCurrent() {
        navigator.geolocation.getCurrentPosition(
         (success)=> {
            this.setState({
                called: true,
                lat: success.coords.latitude,
                long: success.coords.longitude
            })
            this.getAddress(success.coords.latitude, success.coords.longitude) 
            .then(addr => this.parse(addr))
            .catch(msg => alert(msg))
        },
         (err)=> {  alert('Sorry we coulnt find your current location') }
        );
   }
   submitForm(e) {
        e.preventDefault();
        this.getAddress(this.state.lat, this.state.long) 
        .then(addr => this.parse(addr))
        .catch(msg => alert(msg))
   }
   parse(addr) {
       this.setState({
           addr: addr.replace(/,/g,',\n')
       })
   }
}

export default Geolocation