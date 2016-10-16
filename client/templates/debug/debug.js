Template.debug.onCreated(function(){

    Session.set("debug",0)
    Deps.autorun(function(){
        if(Session.get("debug") > 108){
            clearInterval(Template.instance().myVar);
            Session.set("debug",0)
        }
    })
})
Template.debug.events({
    "click #debug_button":function(){
        console.log("Hallo")
        setInterval(function(){
            if(Session.get("debug")<408 ){
                if(Session.get("debug") % 3 == 0 || Session.get("debug") % 7 == 0){
                let event_id = $("#id_input").val()

                Meteor.call("update_Event_raw",event_id,
                              {$push: {teilnehmer: new Meteor.Collection.ObjectID()._str},
                               $inc: {teilnehmerzahl:1}}
                             )
                }
                Session.set("debug",Session.get("debug")+1)
            }
        }, 125);




    }
})
