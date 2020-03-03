import React, { Component } from 'react'

class App extends Component {
  // State for passing data around
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };

  // event handler implementation
  componentDidMount() {
    console.log("calling this.callApi()");
    this.callApi()
      .then(res => this.setState({response: res.express}))
      .catch(err => console.log(err));
  }

  // Implementation of the "callApi" function called above
  callApi = async() => {
    console.log("inside callApi()");
    var urlHello = "/api/users";
    const response = await fetch(urlHello);
    const body = await response.json();
    if (response.status === 200) {
      console.log("callApi() succeeded");
    }
    else {
      var errMsg = "ERROR: callApi() failed: (response.status===" + response.status + ") " + body.message;
      throw Error(errMsg);
    }
    return body;
  };

  // Implementation of the postback for the submit button click
  handleSubmit = async e => {
    e.preventDefault();

    var submitUrl = "/api/user";
    const response = await fetch(submitUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( {post: this.state.post} ),
    });

    const body = await response.text();

    this.setState( {responseToPost: body} );
  };

  render() {
    return (
      <div className="App">
        <div>
          <h1>Home XYZ</h1>
        </div>

        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>post to server:</strong>
          </p>
          <input
            type="text"
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })}
          />
          <button type="submit">submit</button>
        </form>
        <p>{this.state.responseToPost}</p>
      </div>
    );
  }
}

export default App;
