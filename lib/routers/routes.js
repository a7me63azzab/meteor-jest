Router.configure({
    layoutTemplate:'main_layout'
})

Router.map(function(){
    //jokes
    this.route('jokes',{
        path:'/jokes',
        template:'jokes'
    })

    //login
    this.route('login',{
        path:'/',
        template:'login'
    })

    //signup
    this.route('signup',{
        path:'/signup',
        template:'signup'
    })
})