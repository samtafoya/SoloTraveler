import React, { Component } from 'react'
import { Launcher } from 'react-chat-window'
//import 'react-chatbox-component/dist/style.css';
import { ChatBox } from 'react-chatbox-component';

/*class Chat extends Component {
    constructor(props) {
        super(props);
        const DUMMY_DATA = [
            {
                senderId: "perborgen",
                text: "who'll win?"
            },
            {
                senderId: "janedoe",
                text: "who'll win?"
            }
        ]
        this.state = {
            messages: DUMMY_DATA
        }
    }

    render() {
        return (
            <div className="app">
                <MessageList messages={this.state.messages} />
                <SendMessageForm />
            </div>
        )
    }
}*/

/*class Chat extends Component {

    constructor() {
        super();
        this.state = {
            messages: [
                {
                    "text": "Hello there",
                    "id": "1",
                    "sender": {
                        "name": "Ironman",
                        "uid": "user1",
                        "avatar": "https://data.cometchat.com/assets/images/avatars/ironman.png",
                    },
                },
            ]
        }
    }

    render() {
        return (
            <div className='container'>
                <div className='chat-header'>
                    <h5>React Chat Box Example</h5>
                </div>
                <ChatBox messages={this.state.messages} />
            </div>
        )
    }
}*/

class Chat extends Component { 

    constructor() {
        super();
        this.state = {
            messageList: []
        };
    }

    _onMessageWasSent(message) {
        this.setState({
            messageList: [...this.state.messageList, message]
        })
    }

    _sendMessage(text) {
        if (text.length > 0) {
            this.setState({
                messageList: [...this.state.messageList, {
                    author: 'them',
                    type: 'text',
                    data: { text }
                }]
            })
        }
    }

    render() {
        return (<div>
            <Launcher
                agentProfile={{
                    teamName: 'react-chat-window',
                    imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
                }}
                onMessageWasSent={this._onMessageWasSent.bind(this)}
                messageList={this.state.messageList}
                showEmoji
            />
        </div>)
    }
}

export default Chat