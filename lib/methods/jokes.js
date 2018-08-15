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
        }
    });
}