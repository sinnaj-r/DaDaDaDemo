Template.Dashboard.helpers({
    myDemosFilter:function(){
        return { veranstalter: { $in: [Meteor.userId()] } }
    },
    myDemosVFilter:function(){
        return { teilnehmer: { $in: [Meteor.userId()] } }
    },
    notmyDemosVFilter:function(){
        return { teilnehmer: { $nin: [Meteor.userId()] } }
    }
})
