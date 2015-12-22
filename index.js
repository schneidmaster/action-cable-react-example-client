import { ActionCable, Cable } from 'action-cable-react';
import ReactDOM from 'react-dom';
import React from 'react';
import Chatroom from './chatroom';

var actionCable = ActionCable.createConsumer('ws://localhost:3000/cable');

var cable = new Cable({
  ChatChannel: actionCable.subscriptions.create({channel: 'ChatChannel', room: 'example_room'}, ['newMessage'])
});

ReactDOM.render(<Chatroom cable={cable} />, document.getElementById('app'))
