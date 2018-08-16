import '../../../lib/collections/jokes'


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
    },
    userJokes:function(){
        var username = Meteor.user().username;
        var userId = Meteor.userId();
        var userJokes = Jokes.find({userId:userId},{sort:{createdAt:-1}});
        return userJokes;
    },
    userLaughScore:function(){
        console.log('Meteor.user().profile.laughScore',Meteor.user().profile.laughScore);
        return Meteor.user().profile.laughScore;
    },
    userFrownScore:function(){
        return Meteor.user().profile.frownScore;
    },
    userPukeScore:function(){
        return Meteor.user().profile.pukeScore;
    }
});

Template.profile.events({
    'click #delete-joke':function(){
        Meteor.call('removeJoke',this._id);
        Bert.alert('Joke remove successfully.','success','growl-top-right');
    }
});
