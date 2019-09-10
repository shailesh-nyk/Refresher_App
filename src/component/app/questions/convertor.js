import React, { Component } from 'react';
import {Form} from 'react-bootstrap'

class Convertor extends Component {
    constructor(props) {
       super(props);
       this.state = {
         inr : ''
       }
    }
    render() {
      return (
         <Form>
            <Form.Group controlId="usd">
                <Form.Label>$USD: </Form.Label>
                <Form.Control name='usd' type="number" placeholder="Enter USD amount" required value={this.state.usd} onChange={(e)=> {this.setState({usd: e.currentTarget.value}); this.convert();}}/>
            </Form.Group>
            <Form.Group controlId="inr">
                <Form.Label>INR: </Form.Label>
                <Form.Control type="number" readOnly placeholder="Enter USD amount above" value={this.state.inr}/>
            </Form.Group>
            {/* <Button variant="primary" type="submit">
              Convert
            </Button> */}
        </Form>
      );
    }
    getINR_promise(){              //Defining PROMISES
      return new Promise((resolve, reject) => {
          fetch('https://api.exchangeratesapi.io/latest?base=USD')
          .then(res => res.json())
          .then(json => resolve(json.rates.INR))
          .catch(e=> reject(e))
      })
    }
    convert(){ 
        this.getINR_promise()
          .then(data => {
              this.setState({
                 inr: (data* this.state.usd).toFixed(2)
              }) 
          })
          .catch((err) => {
              alert(err);
          })
    }
}

export default Convertor