Router.configure({
    layoutTemplate: 'MainLayout'
});


Router.route('/', function () {
    Session.set("DocumentTitle",'Home');
    this.render('hello');
});

Router.route('/login', function () {
    Session.set("DocumentTitle",'Home');
    this.render('loginButtons');
});

Router.route('/gentestdata', function () {
    Session.set("DocumentTitle",'Home');
    this.render('GenTestData');
});


Router.route('/demo/:_id', {
    data:function () {
        var item = Events.findOne({
            _id: this.params._id
        });
        if(!item){Router.go("/404")}
        return item
    },
    onAfterAction:function(){
        d = this.data()
        if (d){
            Session.set("DocumentTitle",`Event - ${d.ueberschrift}`);
            return true
        }else{
            return false
        }
    },
    action:function(){
        if (this.ready()) {
            this.render("demoDetail")
        }
        else{
            this.render('loading');
        }
    },
    waitOn: function(){
        return Meteor.subscribe("Events")
    }
});
