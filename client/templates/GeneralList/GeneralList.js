Template.GeneralList.onCreated(function () {
    // Use this.subscribe with the data context reactively
    this.itemCount = new ReactiveVar()
    this.filter = new ReactiveVar({})
    this.autorun(() => {
        var dataContext = Template.currentData();
        console.log("Context",dataContext)
        if(dataContext != undefined){
            let itemCount = dataContext.itemCount
            let filter = dataContext.filter
            Template.instance().itemCount.set(itemCount)
            Template.instance().filter.set(filter)
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
        if(Template.instance().itemCount && Template.instance().itemCount.get() > 0){
            props["limit"] = Template.instance().itemCount.get()
        }
        if(Template.instance().filter && Template.instance().filter.get("filter") != undefined){
            filter = Template.instance().filter.get()
        }
        console.log(Template.instance().itemCount.get(),filter)
        return Events.find(filter,props)
    }
})
