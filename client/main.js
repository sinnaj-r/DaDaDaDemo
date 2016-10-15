import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import { Mongo } from 'meteor/mongo';

import './main.html';

Meteor.subscribe("Events")
