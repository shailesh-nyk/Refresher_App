import React, { Component } from 'react';
import { Form, Button }from 'react-bootstrap';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          valid: false
        }
    }
    render() {
      return (
        <div className='login-container'>
          <h3>Welcome to Shailesh's Refresher Assignment</h3>
          <Form onSubmit={this.props.onLogin}>
            <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required/>
            </Form.Group>
            <Form.Group controlId="remember">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button size='lg' block variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </div>
      );
    }
}

export default Login