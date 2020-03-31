class blogBtns extends React.Component {
    submitPost() {
      alert("Done!");
    }
    render() {
      return (
        <button onClick={this.submitPost}>Submit</button>
      );
    }
  }
  
  ReactDOM.render(<blogBtns />, document.getElementById('root'))