import React, { Component } from 'react'
import '/Users/sammitafoya/SoloTraveler/src/css/styles.css'

class ValidatedLoginForm extends Component {
  // State for passing data around
  constructor(props) {
    super(props)

    this.state = {
      response: '',
      post: '',
      first_name: '',
      responseToPost: '',
    };
  }

  // event handler implementation
  componentDidMount() {
    console.log("calling this.callApi()");
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  // Implementation of the "callApi" function called above
  callApi = async () => {
    console.log("inside callApi()");
    var urlGetTrait = "/api/login";
    const responseT = await fetch(urlGetTrait);
    const body = await responseT.json();
    var test = JSON.parse(body);
    if (responseT.status === 200) {
      console.log("callApi() succeeded");
    }
    else {
      console.log("callApi() failed");
      var errMsg = "ERROR: callApi() failed: (response.status===" + responseT.status + ") " + body.message;
      throw Error(errMsg);
    }
    return test;
  };

  // Implementation of the postback for the submit button click
  handleSubmit = async e => {
    e.preventDefault();

    var submitUrl = "/api/login";
    const response = await fetch(submitUrl, {
      method: 'POST',

      // need these headers for post
      headers: {
        'Content-Type': 'application/json',
      },

      // maybe add these to an array and then call each index
      // thing entered in the form
      body: JSON.stringify({ post: this.state.post }),
      //body: JSON.stringify({first_name: this.state.first_name}),
    });

    const body = await response.text();

    this.setState({ responseToPost: body });
  };

  render() {
    return (
      <div className="Trait">
        <div>
          <h1>Login</h1>
        </div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Login:</strong>
          </p>
          <input type="text" placeholder="email" value={this.state.post} onChange={e => this.setState({ post: e.target.value })} />
          <input type="text" placeholder="password" value={this.state.first_name} onChange={e => this.setState({ first_name: e.target.value })} />
          <button type="submit">login</button>
        </form>
      </div>
    );
  }
}

export default ValidatedLoginForm;
