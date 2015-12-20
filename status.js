import { CableMixin, ChannelMixin } from 'action-cable-react';
import React from 'react';

module.exports = React.createClass({
  mixins: [CableMixin(React), ChannelMixin('AppearanceChannel')],

  appear() {
    this.perform('appear');
  },

  away() {
    this.perform('away');
  },

  render() {
    return <div />
  }
});
