Template.Suche.onCreated(function(){
    Session.set("search_string","")
})

Template.Suche.helpers({
    events:function(){
        let search_string = Session.get("search_string")
        if (search_string != ""){
            var filter = { $or: [{"ueberschrift" : {$regex : search_string}},{"beschreibung" : {$regex : search_string}}] }
            } else {
                var filter = {}
                }
        return Events.find(filter,{sort:{"teilnehmerzahl":-1,"ueberschrift":1}})
    }
})

Template.Suche.events({
    "keyup #search_input":function(event){
        let search_string = $("#search_input").val()
        Session.set("search_string",search_string)
    }
})
