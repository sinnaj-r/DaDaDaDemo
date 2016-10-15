Template.GeneralList.onCreated(function () {
    // Use this.subscribe with the data context reactively
    this.autorun(() => {
        var dataContext = Template.currentData();
        console.log("Context",dataContext)
        if(dataContext != undefined){
            let itemCount = dataContext.itemCount
            let filter = dataContext.filter
            Session.set("itemCount",itemCount)
            Session.set("filter",filter)
            console.log("F",filter)
        }

    });
});
Template.GeneralList.helpers({
    events:function(){
        let props = {
            sort:{"teilnehmerzahl":-1,"ueberschrift":1},
        }
        var filter = {}
        if(Session.get("itemCount") > 0){
            props["limit"] = Session.get("itemCount")
        }
        if(Session.get("filter") != undefined){
            filter = Session.get("filter")
        }
        console.log(filter)
        return Events.find(filter,props)
    }
})
