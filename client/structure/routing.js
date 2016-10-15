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

Router.route('/listTest', function () {
    Session.set("DocumentTitle",'Home');
    this.render('DemoList');
});


Router.route('/demo/:_id', {
    data:function () {
        console.log(this.params._id)
        let item = Events.findOne({
            _id: this.params._id
        });
        console.log(item)
        //if(!item){Router.go("/loadi")}
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
        this.render("DemoSite")
    },
});
