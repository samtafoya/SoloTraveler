import React, { Component } from 'react'

class Suggest extends Component {

    constructor() {
        super();
        this.state = {
            someVal: 123,
            userList: [],
        };
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
                    resultList.push(result);
                }

                this.setState({userList: resultList});
            })
            .catch(err => {
                console.log("Hello: Inside 'handleSubmit.catch'")
                console.log(err);
            });
    };

    render() {
        
        return (<div>
            <button onClick={this.handleSubmit}>get users</button>
            <p> Here is a list of similar users:  {this.state.userList}</p>
        </div>)
    }

}

export default Suggest