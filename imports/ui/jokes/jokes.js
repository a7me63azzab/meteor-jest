import '../../../lib/collections/jokes'

Template.jokes.rendered = function(){
    $('#profile-link').removeClass('selected');
    $('#jokes-link').addClass('selected');
    $('#rankings-link').removeClass('selected');
    $('#search-link').removeClass('selected');
    $('#login-link').removeClass('selected');
    $('#logout-link').removeClass('selected');
}

Template.jokes.helpers({
    jokes:function(){
        var jokes = Jokes.find({},{sort:{createdAt:-1}});
        console.log('jokes',jokes);
        return jokes;
    }
});

Template.jokes.events({
    'click #laugh':function(){
        var thisUser = Meteor.userId();
        var jokeId = Jokes.findOne({_id:this._id})._id;
        var jokeAuthorId = Jokes.findOne({_id:this._id}).userId;
        var userName = Meteor.user().username;
        var votedUsers = Jokes.findOne({_id:this._id},{voted:{$in:userName}}).voted;
         
        if(votedUsers.indexOf(userName) > -1){
            Bert.alert('You already voted at this joke before.','danger','growl-top-right');
        }else{
            Meteor.call('countVote',jokeId, userName);
            Meteor.call('userPointLaugh',jokeAuthorId);
            Meteor.call('laughVote',thisUser,jokeId);
            Bert.alert('You\'r vote was palced','success','growl-top-right');
        }

        if(userName == votedUsers){
            Bert.alert('You can not vote for your own joke.','danger','growl-top-right');
        }
    },
    'click #frown':function(){
        var thisUser = Meteor.userId();
        var jokeId = Jokes.findOne({_id:this._id})._id;
        var jokeAuthorId = Jokes.findOne({_id:this._id}).userId;
        var userName = Meteor.user().username;
        var votedUsers = Jokes.findOne({_id:this._id},{voted:{$in:userName}}).voted;
         
        if(votedUsers.indexOf(userName) > -1){
            Bert.alert('You already voted at this joke before.','danger','growl-top-right');
        }else{
            Meteor.call('countVote',jokeId, userName);
            Meteor.call('userPointFrown',jokeAuthorId);
            Meteor.call('frownVote',thisUser,jokeId);
            Bert.alert('You\'r vote was palced','success','growl-top-right');
        }

        if(userName == votedUsers){
            Bert.alert('You can not vote for your own joke.','danger','growl-top-right');
        }
    },
    'click #puke':function(){
        var thisUser = Meteor.userId();
        var jokeId = Jokes.findOne({_id:this._id})._id;
        var jokeAuthorId = Jokes.findOne({_id:this._id}).userId;
        var userName = Meteor.user().username;
        var votedUsers = Jokes.findOne({_id:this._id},{voted:{$in:userName}}).voted;
         
        if(votedUsers.indexOf(userName) > -1){
            Bert.alert('You already voted at this joke before.','danger','growl-top-right');
        }else{
            Meteor.call('countVote',jokeId, userName);
            Meteor.call('userPointPuke',jokeAuthorId);
            Meteor.call('pukeVote',thisUser,jokeId);
            Bert.alert('You\'r vote was palced','success','growl-top-right');
        }

        if(userName == votedUsers){
            Bert.alert('You can not vote for your own joke.','danger','growl-top-right');
        }
    },
})