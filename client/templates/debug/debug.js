Template.debug.onCreated(function(){

    Session.set("debug",0)
    Deps.autorun(function(){
        if(Session.get("debug") > 500){
            clearInterval(Template.instance().myVar);
            Session.set("debug",0)
        }
    })
})
Template.debug.events({
    "click #debug_button":function(){
        console.log("Hallo")
        setInterval(function(){
            if(Session.get("debug")<500){
                let event_id = $("#id_input").val()
                Session.set("debug",Session.get("debug")+1)
                Meteor.call("update_Event_raw",event_id,
                              {$push: {teilnehmer: new Meteor.Collection.ObjectID()._str},
                               $inc: {teilnehmerzahl:4}}
                             )
            }
        }, 25);




    }
})
