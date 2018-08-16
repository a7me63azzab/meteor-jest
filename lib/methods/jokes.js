if(Meteor.isServer){
    Meteor.methods({
        // Method to add jokes
        addJokes:function(jokeName, jokePost){
            if(!Meteor.userId()){
                throw new Meteor.Error('not authorized.');
                return false;
            }else{
                var username = Meteor.user().username;
                var year = new Date().getFullYear();
                var month = new Date().getMonth() + 1;
                var day = new Date().getDate();
                var date = (month +'/'+ day +'/'+ year).toString();

                Jokes.insert({
                    jokeName:jokeName,
                    jokePost:jokePost,
                    author:username,
                    date:date,
                    createdAt:new Date(),
                    laughScore:0,
                    frownScore:0,
                    pukeScore:0,
                    voted:[username],
                    userId:Meteor.userId()
                });
            }
        },

        //remove joke
        removeJoke:function(jokeId){
            if(!Meteor.userId()){
                throw new Meteor.Error('not authorized.');
                this.stop();
                return false;
            }else{
                Jokes.remove({_id:jokeId});
            }
        },

        //Count Vote
        countVote:function(jokeId, votedUserName){
            if(!Meteor.userId()){
                throw new Meteor.Error('Not authenticated.');
                this.stop();
                return false;
            }else{
                Jokes.update(jokeId, {$addToSet:{voted:votedUserName}});
            }

        },

        //laughVote
        laughVote:function(userId,jokeId){
            if(!userId){
                throw new Meteor.Error('Not authenticated.');
                this.stop();
                return false;
            }else{
                Jokes.update(jokeId, {$inc:{laughScore:+1}});
            }
        },
        //frownVote
        frownVote:function(userId,jokeId){
            if(!userId){
                throw new Meteor.Error('Not authenticated.');
                this.stop();
                return false;
            }else{
                Jokes.update(jokeId, {$inc:{frownScore:+1}});
            }
        },
        //pukeVote
        pukeVote:function(userId,jokeId){
            if(!userId){
                throw new Meteor.Error('Not authenticated.');
                this.stop();
                return false;
            }else{
                Jokes.update(jokeId, {$inc:{pukeScore:+1}});
            }
        },


        // inc user Point Laugh
        userPointLaugh:function(jokeOwnerId){
            if(!Meteor.userId()){
                throw new Meteor.Error('Not authenticated.');
                this.stop();
                return false;
            }else{
                Meteor.users.update(jokeOwnerId, {$inc:{"profile.laughScore":+1}});
            }
        },

        // inc user Point Frown
        userPointFrown:function(jokeOwnerId){
            if(!Meteor.userId()){
                throw new Meteor.Error('Not authenticated.');
                this.stop();
                return false;
            }else{
                Meteor.users.update(jokeOwnerId, {$inc:{"profile.frownScore":+1}});
            }
        },
        // inc user Point Puke
        userPointPuke:function(jokeOwnerId){
            if(!Meteor.userId()){
                throw new Meteor.Error('Not authenticated.');
                this.stop();
                return false;
            }else{
                Meteor.users.update(jokeOwnerId, {$inc:{"profile.pukeScore":+1}});
            }
        }
    });
}