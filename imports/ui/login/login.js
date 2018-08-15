Tracker.autorun(function(){
    if(Meteor.userId()){
        Router.go('/jokes');
    }
})

Template.login.rendered = function(){
    $('#profile-link').removeClass('selected');
    $('#jokes-link').removeClass('selected');
    $('#rankings-link').removeClass('selected');
    $('#search-link').removeClass('selected');
    $('#login-link').addClass('selected');
} 

Template.login.events({
    'submit .from-signin':function(event){
        var email = trimInput(event.target.email.value);
        var password = trimInput(event.target.password.value);

        if(isNotEmpty(email) 
            && isNotEmpty(password)
            && isEmail(email) 
            && isValidPassword(password)){
                Meteor.loginWithPassword(email, password, function(err){
                    if(err){
                        Bert.alert(err.reason, 'danger','growl-top-right');
                        return false;
                    }else{
                        Router.go('/jokes');
                        Bert.alert('You Are Now Logged In','success','growl-top-right');
                    }
                });  
        }
        return false;
    }
});


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