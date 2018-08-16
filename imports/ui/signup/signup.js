Template.signup.rendered = function(){
        
}

Template.signup.events({
    "submit .from-signup": function(event){
        var username = trimInput(event.target.username.value);
        var email = event.target.email.value;
        var password = event.target.password.value;
        var passwordConfirm = event.target.password2.value;
        
        if(isNotEmpty(username) && isNotEmpty(email) 
              && isNotEmpty(password) && isEmail(email) && areValidPasswords(password, passwordConfirm)){
                    // Create new user
                    Accounts.createUser({
                        username: username,
                        email: email,
                        password: password,
                        profile:{
                            laughScore:0,
                            frownScore:0,
                            pukeScore:0,
                            voted:[]
                        }
                    }, function(err){
                        if(err){
                            Bert.alert(err.reason,'danger','growl-top-right');
                        }else{
                            Bert.alert('Account Created! You Are Now Logged In','success','growl-top-right');
                            Router.go('/jokes');
                        }
                    })
        }
        return false;
    }
})


//Validation Rules

//Trim Helpers
var trimInput = function(val){
    return val.replace(/^\s*|\s*$/g,"");
}

//Make sure that user filled all fields
var isNotEmpty = function(val){
    if(val && val !== ""){
        return true
    }
    Bert.alert('Please fill in all fields','danger','growl-top-right');
    return false;
}

// Email Validation
var isEmail = function(val){
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(filter.test(val)){
        return true;
    }

    Bert.alert("Please use a valid email address", "danger", "growl-top-right");
    return false;
}

// Check Password Field
var isValidPassword = function(password){
        if(password.length <6) {
            Bert.alert("Password must be at least 6 characters", "danger", "growl-top-right");
            return false;
        }
        return true;
};

// Match Password
var areValidPasswords = function(password, confirm) {
    if(!isValidPassword(password)) {
        return false;
    }
    if(password !== confirm) {
        Bert.alert("Passwords do not match", "danger", "growl-top-right");
        return false;
    }
    return true;
};