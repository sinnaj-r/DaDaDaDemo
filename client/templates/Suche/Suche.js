Template.Suche.onCreated(function(){
    Session.set("search_string","")
    Session.set("search_bl","")
})

Template.Suche.helpers({
    filterO:function(){
        let search_string = Session.get("search_string")
        let search_bl = Session.get("search_bl")
        if (search_string != ""){
            var filter = { $or: [{"ueberschrift" : {$regex : search_string}},{"beschreibung" : {$regex : search_string}}] }
            } else {
                var filter = {}
            }
        if (search_bl != ""){
            filter = {$and:[filter,{"ort.1" : {$regex : search_bl}}]}
            }
        //console.log("Hallo",filter)
        return filter
    }
})

Template.Suche.events({
    "keyup #search_input":function(event){
        let search_string = $("#search_input").val()
        Session.set("search_string",search_string)
    },
    "select #bl_select":function(){
        Session.set("search_bl",search_string)
    }
})
