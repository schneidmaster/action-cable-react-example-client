import { ActionCable, Cable } from 'action-cable-react';
import Status from './status';

actionCable = ActionCable.createConsumer('ws://example.com:28080');

cable = new Cable({
  AppearanceChannel: actionCable.subscriptions.create('AppearanceChannel', cable, ['didAppear', 'didGoAway'])
});

ReactDOM.render(<Status cable={cable} />, document.getElementById('app'))
