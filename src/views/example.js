class example extends React.Component {
    constructor() {
      super();
      this.state = { user: {} };
      this.onSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
      e.preventDefault();
      var self = this;
      // On submit of the form, send a POST request with the data to the server.
      fetch('/account', { 
          method: 'POST',
          data: {
            name: self.refs.name,
            age: self.refs.age
          }
        })
        .then(function(response) {
          return response.json()
        }).then(function(body) {
          console.log(body);
        });
    }
    render() {
      return (
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="Name" ref="name"/>
          <input type="text" placeholder="Age" ref="age"/>
          <input type="submit" />
        </form>
      );
    }
  }