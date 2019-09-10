import React, { Component } from 'react';
import {Tab, Tabs, Button} from 'react-bootstrap'
import Geolocation from './geolocation';
import Pokemon from './pokemon';
import Convertor from './convertor';


class Options extends Component {
    render() {
      return (
        <div className='page-container'> 
          <div style={{display: 'flex', justifyContent: 'flex-end'}}>
            <Button size='sm' variant="outline-primary" type="button" onClick={this.props.goToLogin} >
                  LOGOUT 
            </Button>
          </div>
          <Tabs defaultActiveKey="pokemon" id="options-tab">
            <Tab eventKey="geo" title="Geolocation" >
                <Geolocation/>
            </Tab>
            <Tab eventKey="pokemon" title="Pokemon" >
              <Pokemon/>
            </Tab>
            <Tab eventKey="convertor" title="USD -> INR" >
               <Convertor/>
            </Tab>
        </Tabs>
        </div>
      );
    }
}

export default Options