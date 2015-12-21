import { ActionCable, Cable } from 'action-cable-react';
import ReactDOM from 'react-dom';
import React from 'react';
import Status from './status';

var actionCable = ActionCable.createConsumer('ws://example.com:28080');

var cable = new Cable({
  AppearanceChannel: actionCable.subscriptions.create('AppearanceChannel', ['didAppear', 'didGoAway'])
});

ReactDOM.render(<Status cable={cable} />, document.getElementById('app'))
