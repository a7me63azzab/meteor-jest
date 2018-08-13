Template.signup.rendered = function(){
    
}

Template.signup.events({
    "submit .from-signup": function(event){
        var userName = trimInput(event.target.username.value);
        var email = event.target.email.value;
        var password = event.target.password.value;
        var passwordConfirm = event.target.password2.value;
        
        if(isNotEmpty(userName) && isNotEmpty(email) 
              && isNotEmpty(password) && isNotEmpty(passwordConfirm)){
                    //do stuff here
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

