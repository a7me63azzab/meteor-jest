import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';



//IMPORT CSS FILES
import '../imports/ui/css/fonts.css'

// IMPORT SIDEBAR UI
import '../imports/ui/sidebar/sidebar.html'
import '../imports/ui/sidebar/sidebar.css'
import '../imports/ui/sidebar/sidebar'

//IMPORT JOKES UI
import '../imports/ui/jokes/jokes.html'
import '../imports/ui/jokes/jokes.css'
import '../imports/ui/jokes/jokes'

// IMPORT JOKEFORM
import '../imports/ui/jokeForm/jokeForm.css'
import '../imports/ui/jokeForm/jokeForm.html'
import '../imports/ui/jokeForm/jokeForm.js'

//IMPORT LOGIN UI
import '../imports/ui/login/login.html'
import '../imports/ui/login/login.css'
import '../imports/ui/login/login'

//IMPORT SIGNUP UI
import '../imports/ui/signup/signup.html'
import '../imports/ui/signup/signup.css'
import '../imports/ui/signup/signup'

//IMPORT PROFILE UI
import '../imports/ui/profile/profile.css'
import '../imports/ui/profile/profile.html'
import '../imports/ui/profile/profile.js'

//IMPORT RANKINGS UI
import '../imports/ui/rankings/rankings.css'
import '../imports/ui/rankings/rankings.html'
import '../imports/ui/rankings/rankings.js'

//IMPORT SEARCH UI
import '../imports/ui/search/search.css'
import '../imports/ui/search/search.html'
import '../imports/ui/search/search.js'

// Subscriptions
import '../lib/subscriptions/jokes.subscribe'


//Routes
import '../lib/routers/routes'


