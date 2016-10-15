Template.DemoList.helpers({
    events:function(){
        return Events.find({},{sort:{"teilnehmerzahl":-1,"ueberschrift":1}})
    }
})
