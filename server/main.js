import { Meteor } from 'meteor/meteor';

import '../lib/collections/jokes'
import '../lib/methods/jokes'

import '../lib/publications/jokes.publish';

Meteor.startup(() => {
  // code to run on server at startup
});
