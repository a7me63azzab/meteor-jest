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
        Bert.alert('You Clicked A Laugh','success','growl-top-right');
    },
    'click #frown':function(){
        Bert.alert('You Clicked A Frown','success','growl-top-right');
    },
    'click #puke':function(){
        Bert.alert('You Clicked A Puke','success','growl-top-right');
    },
})