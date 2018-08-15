Template.profile.rendered = function(){
    $('#profile-link').addClass('selected');
    $('#jokes-link').removeClass('selected');
    $('#rankings-link').removeClass('selected');
    $('#search-link').removeClass('selected');
    $('#logout-link').removeClass('selected');
}

Template.profile.helpers({
    email :function(){
        if(!Meteor.user()){
            Bert.alert('You Are Not Logged In, Permission Denied', 'danger', 'growl-top-right');
            return false;
        }else{
            return Meteor.user().emails[0].address;
        }
    },
    username :function(){
        if(!Meteor.user()){
            Bert.alert('You Are Not Logged In, Permission Denied', 'danger', 'growl-top-right');
            return false;
        }else{
            return Meteor.user().username;
        }
    }
});
