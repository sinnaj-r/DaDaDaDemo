Meteor.methods({
    "insert_Event":function(data){
        if(!(Meteor.userId()) && data.userId.veranstalter.indexOf(Meteor.userId()) >= 0 ){
            throw new Meteor.Error("not-authorized");
        }
        Event.insert(data)
    },
    "update_Vokabeln":function(id,data){
        if(!(Meteor.userId()) && data.userId.veranstalter.indexOf(Meteor.userId()) >= 0){
            throw new Meteor.Error("not-authorized");
        }
        Event.update(id,{$set:data})
    },
    "delete_Vokabeln":function(id){
        if(!(Meteor.userId()) && data.userId.veranstalter.indexOf(Meteor.userId()) >= 0){
            throw new Meteor.Error("not-authorized");
        }
        Event.remove(id)
    }
})
