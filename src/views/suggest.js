import React, { Component } from 'react'

class Suggest extends Component {

    constructor() {
        super();
        this.state = {
            someVal: 123,
            currentUser: '',
            userList: [],
            userToPrint: [],
            traitList: []
        };
        this.findUser = this.findUser.bind(this);
    }

    // Implementation of the "callApi" function called above
    callApi = async () => {
        console.log("inside callApi()");

        var urlGetUsers = "/api/users";
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

    callApiTwo = async () => {
        console.log("inside callApiTwo()");

        var urlGetUsers = "/api/usersTraits";
        const responseT = await fetch(urlGetUsers);
        const body = await responseT.json();
        //debugger;
        if (responseT.status === 200) {
            console.log("callApiTwo() succeeded");
        }
        else {
            console.log("callApiTwo() failed");
            var errMsg = "ERROR: callApi() failed: (response.status===" + responseT.status + ") " + body.message;
            throw Error(errMsg);
        }
        return body;
    }

    // Implementation of the postback for the submit button click
    handleSubmit = async e => {
        console.log("Inside Suggest.handleSubmit")
        e.preventDefault();

        this.callApi()
            .then(res => {
                console.log("Hello: Inside 'handleSubmit.then'");

                let result = "";
                let resultList = [];

                for (var i in res) {
                    result = JSON.stringify(res[i]);
                    let front = result.indexOf(":") + 2;
                    let back = result.length - 2;
                    let newSub = result.substring(front, back);
                    resultList.push(newSub + "\n      ");
                }

                this.setState({ userList: resultList });
                console.log(this.state.userList[0]);
                //debugger;
                //this.findUser();
            })
            .catch(err => {
                console.log("Hello: Inside 'handleSubmit.catch'")
                console.log(err);
            });

        this.callApiTwo()
            .then(res => {
                console.log("Hello: Inside 'handleSubmitTwo.then'");

                let result = "";
                let resultList = [];

                for (var i in res) {
                    result = JSON.stringify(res[i]);
                    let front = result.indexOf(":") + 2;
                    let back = result.length - 2;
                    let newSub = result.substring(front, back);
                    resultList.push(newSub + "\n      ");
                }

                console.log("test " + resultList[0]);

                this.setState({ traitList: resultList });
                //console.log(this.state.userList[0]);
                //debugger;
                this.findUser();
            })
            .catch(err => {
                console.log("Hello: Inside 'handleSubmit.catch'")
                console.log(err);
            });
    };

    findUser = () => {
        console.log("in find user");

        let testName = localStorage.getItem('traitVal');
        let printArr = [];

        console.log("trait list " + this.state.traitList[1] + " trait " + testName);
        console.log("user list " + this.state.userList[0]);

      //  console.log(localStorage.getItem('traitVal'));

      if (this.state.traitList[1].trim() === testName) {
          console.log("yessir");
      } else {
          console.log(testName.indexOf(this.state.traitList[1]));
      }

        for (var i in this.state.userList) {
            let curName = this.state.userList[i].trim();
            if (this.state.traitList[i].trim() === testName) {
                console.log("they are the same trait + " + curName + "  " + testName);
                printArr.push(curName);
            } else {
                console.log("they are the same");
            }
        }
        this.setState({ userToPrint: printArr });
    }

    findTrait = () => {

    }

    render() {

        let newList = this.state.userToPrint;
        return (<div>
            <button onClick={this.handleSubmit}>get users</button>
            <p> Here is a list of similar users:  </p>
            <div>
                {newList.map(function (u, idx) {
                    return (<p key={idx}>{u}</p>)
                })}
            </div>
            <button onClick={this.getLocal}>Get</button>
        </div>)
    }

}

export default Suggest