Template.Dashboard.helpers({
    myDemosFilter:function(){
        return { veranstalter: { $in: [Meteor.userId()] } }
    },
    myDemosVFilter:function(){
        return { teilnehmer: { $in: [Meteor.userId()] } }
    }
})
