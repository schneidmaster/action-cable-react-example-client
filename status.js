import { CableMixin, ChannelMixin } from 'action-cable-react';
import React from 'react';

module.exports = React.createClass({
  mixins: [CableMixin(React), ChannelMixin('AppearanceChannel')],

  handleConnected() {

  },

  handleDisconnected() {

  },

  handleDidAppear() {
    this.perform('AppearanceChannel', 'appear');
  },

  handleDidGoAway() {
    this.perform('AppearanceChannel', 'away');
  },

  render() {
    return <div />
  }
});
