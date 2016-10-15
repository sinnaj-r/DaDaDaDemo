Template.DemoSite.helpers({
    "anzahl":function(){
        return this.teilnehmer.length
    },
    "teilnehmer":function(){
        return Events.findOne(this._id).teilnehmer.indexOf(Meteor.userId()) >= 0
    }
})

Template.DemoSite.events({
    "click #join":function(){
        if(Events.findOne(this._id).teilnehmer.indexOf(Meteor.userId()) >= 0){
            Meteor.call("leave_Event",this._id)
        }else{
            Meteor.call("join_Event",this._id)
        }

    }
})
