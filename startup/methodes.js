Meteor.methods({
    "insert_Event":function(data){
        if(!(Meteor.userId()) && data.userId.veranstalter.indexOf(Meteor.userId()) >= 0 ){
            throw new Meteor.Error("not-authorized");
        }
        Events.insert(data)
    },
    "update_Event":function(id,data){
        if(!(Meteor.userId()) && data.userId.veranstalter.indexOf(Meteor.userId()) >= 0){
            throw new Meteor.Error("not-authorized");
        }
        Events.update(id,{$set:data})
    },
    "delete_Event":function(id){
        if(!(Meteor.userId()) && data.userId.veranstalter.indexOf(Meteor.userId()) >= 0){
            throw new Meteor.Error("not-authorized");
        }
        Events.remove(id)
    }
})
