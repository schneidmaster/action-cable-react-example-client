import { CableMixin, ChannelMixin } from 'action-cable-react';
import React from 'react';

module.exports = React.createClass({
  mixins: [CableMixin(React), ChannelMixin('ChatChannel')],

  getInitialState() {
    return {
      messages: []
    }
  },

  handleConnected() {
    console.log('Connected!')
  },

  handleDisconnected() {
    console.log('Disconnected!')
  },

  handleNewMessage(data) {
    console.log('New message: ' + data.message);
    this.setState((state) => { messages: state.messages.push(data) });
  },

  handleSend() {
    this.perform('ChatChannel', 'newMessage', { timestamp: Date.now(), message: document.getElementById('message').value });
    document.getElementById('message').value = '';
  },

  render() {
    var messages = [];
    for(var i = 0; i < this.state.messages.length; i++) {
      messages.push(<div key={this.state.messages[i].timestamp}>{this.state.messages[i].message}</div>)
    }
    return (
      <div>
        <div>
          {messages}
        </div>
        <input id={'message'} />
        <button onClick={this.handleSend}>Send</button>
      </div>
    )
  }
});
