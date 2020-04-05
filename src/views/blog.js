import React, { useState } from 'react'
import '/Users/sammitafoya/SoloTraveler/src/css/text.css'

class Blog extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      blogText: "",
      textAreaVal: "",
      isVisible: false,
      postList: [],
      count: 0
    }
  }

  // event handler implementation
  componentDidMount() {
    console.log("calling this.callApi()");
    this.callApi()
      .then(res => this.setState({ textAreaVal: res.express }))
      .catch(err => console.log(err));
  }

  // Implementation of the "callApi" function called above
  callApi = async () => {
    console.log("inside callApi()");
    var urlGetBlog = "/api/blog";
    const response = await fetch(urlGetBlog);
    const body = await response.json();
    var test = JSON.parse(body);
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

    var submitUrl = "/api/blog";
    const response = await fetch(submitUrl, {
      method: 'POST',

      // need these headers for post
      headers: {
        'Content-Type': 'application/json',
      },

      // maybe add these to an array and then call each index
      // thing entered in the form
      body: JSON.stringify({ blogText: this.state.textAreaVal }),
      //body: JSON.stringify({first_name: this.state.first_name}),
    });

    this.setState({ blogText: this.state.textAreaVal });

    const body = await response.text();

    this.setState({ blogText: this.state.textAreaVal });

    console.log(body);
    console.log(this.state.blogText);
  };

  // updates the blog post
  handleChange = (e) => {
    this.setState({
      textAreaVal: e.target.value
    });
    this.setState({ count: 1 });
  }

  // submits the post
  publishPost = () => {
    this.setState({ blogText: this.state.textAreaVal });
    this.setState({ isVisible: true });

    // fix key, count isnt working
    let newList = this.state.postList.concat(
      <div key={this.state.count} >
        <div class="card-header">
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex justify-content-between align-items-center">
              <div class="ml-2">
                <div class="h5 m-0">@samtafoya</div>
                <div class="h7 text-muted">Sammi Tafoya</div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body">
          <p class="card-text">{this.state.textAreaVal}</p>
        </div>
        <div class="card-footer">
          <a href="#" class="card-link"><i class="fa fa-gittip"></i> Like</a>
          <a href="#" class="card-link"><i class="fa fa-comment"></i> Comment</a>
          <a href="#" class="card-link"><i class="fa fa-mail-forward"></i> Share</a>
        </div>
      </div>);
    this.setState({ postList: newList });
  }

  render() {

    // figure out how to keep them on there, learn to pull from db on refresh

    const postList = this.state.postList;

    return (
      <div>
        <div>
          <h1>MY FEED</h1>
        </div>

        <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" id="posts-tab" data-toggle="tab" href="#posts" role="tab"
                aria-controls="posts" aria-selected="true">Make
            a publication</a>
            </li>
          </ul>
        </div>

        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="posts" role="tabpanel" aria-labelledby="posts-tab">
            <div class="form-group">
              <label class="sr-only" for="message">post</label>
              <textarea class="form-control" id="message" rows="3"
                placeholder="What are you thinking?" value={this.state.textareaVal} onChange={this.handleChange}></textarea>
            </div>

          </div>

          <div class="btn-toolbar justify-content-between">
            <div class="btn-group">
              <button onClick={this.publishPost} type="submit" class="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>

        {postList}

      </div>
    );
  }
}
export default Blog