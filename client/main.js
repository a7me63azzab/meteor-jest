import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

// IMPORT SIDEBAR UI
import '../imports/ui/sidebar/sidebar.html'
import '../imports/ui/sidebar/sidebar.css'

//IMPORT JOKES UI
import '../imports/ui/jokes/jokes.html'
import '../imports/ui/jokes/jokes.css'

//IMPORT LOGIN UI
import '../imports/ui/login/login.html'
import '../imports/ui/login/login.css'

//IMPORT SIGNUP UI
import '../imports/ui/signup/signup.html'
import '../imports/ui/signup/signup.css'

//Routes
import '../lib/routers/routes'

//Import SIGNUP.JS
import './js/signup'


