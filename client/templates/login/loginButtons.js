import notie from "notie";

Template.loginButtons.onRendered(function(){
    Session.set("LogReg",1)
    Session.set("PWC",1)
})

Template.loginButtons.events({
    'click #PWCButton':function(){
        Session.set("PWC",0)
    },
    'click #PWCAbbr':function(){
        Session.set("PWC",1)
    },
    'click #PWCSpeichern':function(){
        let oldPW = $("#oldPW").val(),
            newPW = $("#newPW").val()
        Accounts.changePassword(oldPW, newPW, function(err){
            if (err){
                Meteor.call("log","Error",err)
                notie.alert(2,"Es ist ein Fehler aufgetreten, bitte überprüfe deine Eingaben.",2)
            }
            else{
                notie.alert(1,"Dein Password wurde geändert",2)
            }
        })
    },
    'click #login-button': function (e, t) {
        e.preventDefault();
        // retrieve the input field values
        var username = $('#login-form #login-email').val(),
            password = $('#login-form #login-password').val();

        // Trim and validate your fields here....

        // If validation passes, supply the appropriate fields to the
        // Meteor.loginWithPassword() function.
        Meteor.loginWithPassword(username, password, function (err) {
            if (err){
                notie.alert(2,"Es ist ein Fehler aufgetreten, bitte überprüfe deine Eingaben.",2)
            }
            // The user might not have been found, or their passwword
            // could be incorrect. Inform the user that their
            // login attempt has failed.
            else{
                notie.alert(1,"Du wurdest erfolgreich eingeloggt",2)
            }
            // The user has been logged in.
        });
        $(".reveal .close-button").trigger("click")

        return false;
    },
    'submit #register-form' : function(e, t) {
        e.preventDefault();
        var username = $('#register-form #account-email').val()
        , password = $('#register-form #account-password').val();

        // Trim and validate the input
        Accounts.createUser({username: username, password : password}, function(err){
            if (err) {
                notie.alert(2,"Es ist ein Fehler aufgetreten, bitte überprüfe deine Eingaben.",2)
            } else {
                notie.alert(1,"Dein Account wurde erfolgreich erstellt",2)
                // Success. Account has been created and the user
                // has logged in successfully.
            }

        });
        $(".reveal .close-button").trigger("click")
        return false;
    },
    "click #logOutButton":function(e){
        e.preventDefault();
        notie.alert(1,"Du wurdest erfolgreich ausgeloggt",2)
        Meteor.logout()
        $(".reveal .close-button").trigger("click")


    },
    "click #toggleLogReg":function(e){
        Session.set("LogReg",(Number(Session.get("LogReg")) ? 0 : 1));
    }
});

Template.loginButtons.helpers({
    "LogReg":function(){
        return Number(Session.get("LogReg"))
    },
    "PWC":function(){
        return Number(Session.get("PWC"))
    }
})



Template.LogOutButton.events({
    'click #login-button-head': function (e, t) {
        e.preventDefault();
        // retrieve the input field values
        var username = $('#login-form-head #login-email-head').val(),
            password = $('#login-form-head #login-password-head').val();

        // Trim and validate your fields here....

        // If validation passes, supply the appropriate fields to the
        // Meteor.loginWithPassword() function.
        Meteor.loginWithPassword(username, password, function (err) {
            if (err){
                notie.alert(2,"Es ist ein Fehler aufgetreten, bitte überprüfe deine Eingaben.",2)
            }
            // The user might not have been found, or their passwword
            // could be incorrect. Inform the user that their
            // login attempt has failed.
            else{
                notie.alert(1,"Du wurdest erfolgreich eingeloggt",2)
            }
            // The user has been logged in.
        });


        return false;
    },
    "click #logOutButton-head":function(e){
        e.preventDefault();
        notie.alert(1,"Du wurdest erfolgreich ausgeloggt",2)
        Meteor.logout()



    },
});

