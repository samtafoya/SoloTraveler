import React, { useState } from 'react'
//import '/Users/sammitafoya/SoloTraveler/src/css/text.css'

class Blog extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      blogText: "",
      textAreaVal: "",
      isVisible: false,
      postList: [],
      userList: [],
      nameList: [],
      bodyList: [],
      allList: [],
      count: 0,
      userV: "",
      nameV: ""
    }
  }

  // Implementation of displaying data always function

  componentDidMount() {
    // console.log("Inside Suggest.handleSubmit")
    //e.preventDefault();

    this.callApi()
      .then(res => {
        console.log("Hello: Inside 'handleSubmit.then'");

        let result = "";
        let resultList, userArr, nameArr, bodyArr = [];
        let testList = Object.values(res);
        console.log(Object.values(res[0]));
        console.log(testList);
        //debugger;

        userArr = [];
        nameArr = [];
        bodyArr = [];
        for (var i in res) {
          let tempAllArr = [];
          tempAllArr = Object.values(res[i]);
          userArr.push(tempAllArr[0]);
          nameArr.push(tempAllArr[1]);
          bodyArr.push(tempAllArr[2]);
        }

        let nList = [];
        for (var i in userArr) {
          nList = this.state.allList.concat(
            <div key={i} >
              <div class="card-header">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="ml-2">
                      <div class="h5 m-0">{userArr[i]}</div>
                      <div class="h7 text-muted">{nameArr[i]}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <p class="card-text">{bodyArr[i]}</p>
              </div>
              <div class="card-footer">
                <a href="#" class="card-link"><i class="fa fa-gittip"></i> Like</a>
                <a href="#" class="card-link"><i class="fa fa-comment"></i> Comment</a>
                <a href="#" class="card-link"><i class="fa fa-mail-forward"></i> Share</a>
              </div>
            </div>);
          this.setState({ allList: nList });
        }

        /*
        this.setState({userList: userArr});
        this.setState({nameList: nameArr});
        this.setState({bodyList: bodyArr});
        */



        this.setState({ allList: nList });

        console.log(userArr.length);
        console.log(nameArr);
        console.log(bodyArr);
        // debugger;
      })
      .catch(err => {
        console.log("Hello: Inside 'handleSubmit.catch'")
        console.log(err);
      });
  };

  // Implementation of the "callApi" function
  callApi = async () => {
    console.log("inside callApi()");

    var urlGetUsers = "/api/allposts";
    const responseT = await fetch(urlGetUsers);
    const body = await responseT.json();
    //debugger;
    if (responseT.status === 200) {
      console.log("callApi() succeeded");
    }
    else {
      console.log("callApi() failed");
      var errMsg = "ERROR: callApi() failed: (response.status===" + responseT.status + ") " + body.message;
      throw Error(errMsg);
    }
    return body;
  };

  // Implementation of the postback for the submit button click
  handleSubmit = async e => {
    console.log("Inside Blog.handleSubmit")
    e.preventDefault();

    //debugger;

    if (localStorage.getItem('isLoggedin')) {

      var submitUrl = "/api/blog";

      var data = {
        blogText: this.state.blogText,
        userV: localStorage.getItem('emailVal'),
        nameV: localStorage.getItem('nameVal')
      };

      const response = await fetch(submitUrl, {
        method: 'POST',

        // need these headers for post
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(data),
      });

      this.setState({ blogText: this.state.textAreaVal });

      const body = await response.text();

      this.setState({ blogText: this.state.textAreaVal });

      // fix key, count isnt working
      let newList = this.state.postList.concat(
        <div key={this.state.count} >
          <div class="card-header">
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex justify-content-between align-items-center">
                <div class="ml-2">
                  <div class="h5 m-0">{localStorage.getItem('emailVal')}</div>
                  <div class="h7 text-muted">{localStorage.getItem('nameVal')}</div>
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

      this.setState({ userV: localStorage.getItem('emailVal') });
      this.setState({ nameV: localStorage.getItem('nameVal') });
      console.log("HEY " + this.state.userV);

    } else {
      console.alert("You are not logged in yet!");
    }

  };

  // updates the blog post
  handleChange = (e) => {
    this.setState({
      textAreaVal: e.target.value
    });
    this.setState({ count: 1 });
  }

  /*
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
                <div class="h7 text-muted">{localStorage.getItem('nameVal')}</div>
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
  */

  render() {

    // figure out how to keep them on there, learn to pull from db on refresh

    const postList = this.state.postList;
    const allList = this.state.allList;

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
              <button onClick={this.handleSubmit} type="submit" class="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>

        {postList.reverse()}
        {allList}

      </div>
    );
  }
}
export default Blog