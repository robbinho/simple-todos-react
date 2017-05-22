import React from 'react';
import { Meteor } from 'meteor/meteor';
import { react } from 'react-dom';

import App from '../imports/ui/App.jsx';

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});
