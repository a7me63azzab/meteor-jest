if(Meteor.isServer){
    Meteor.publish('Jokes',function(){
        if(!this.userId){
            return false;
            throw new Meteor.Error('not authorized.');
        }
        return Jokes.find({},{sort:{createdAt:-1}});
    });
}