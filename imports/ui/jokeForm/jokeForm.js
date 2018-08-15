Template.jokeForm.rendered = function(){

};

Template.jokeForm.events({
    'submit .joke-post':function(event){
        var jokeName = event.target.jokeName.value;
        var jokePost = event.target.jokePost.value;

        if(isNotEmpty(jokeName) && isNotEmpty(jokePost)){
            Meteor.call('addJokes', jokeName, jokePost);
            event.target.jokeName.value = '';
            event.target.jokePost.value = '';
            
            Bert.alert('Your joke was posted!','success','growl-top-right');
        }else{
            Bert.alert('Something went wrong.','danger','growl-top-right');
        }

        return false;
    }
});

//VALIDATION RULES

//Make sure that user filled all fields
var isNotEmpty = function(val){
    if(val && val !== ""){
        return true
    }
    Bert.alert('Please fill in all fields','danger','growl-top-right');
    return false;
}