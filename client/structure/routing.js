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
