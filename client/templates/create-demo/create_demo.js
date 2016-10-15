Template.Create_demo.events({
    'click a#erstellen'(event, instance) {
        console.log("Aallo")
        let ueber = $("#ueberschrift").val();
        let besch = $("#beschreibung").val();

        console.log("-----#########")
        console.log(besch);

        let ortS = $("#stadt").val();
        let ortB = $("#bundesland").val();
        ortVar = [ortS,ortB];

        let datum = $("#datum").val();
        let twitter = $("#twitter").val();
        let kat = [$("#kategorie").val()];

        console.log(kat);

        let teiln = $("#teilnehmer").val();


        obj = {
            ueberschrift:ueber,
            beschreibung:besch,
            ort:ortVar,
            veranstalter:[Meteor.userId()],
            teilnehmer:[],
            teilnZahl:0,
            kategorie:kat,
            datum:[1233455],
        }

        if( twitter !== "" && twitter){
            obj.twitter = twitter;
        }

        Meteor.call("insert_Event",obj)



        },
    });

/*Template.Create_demo.onCreated( function(){
        Console.log("Ha");
        $('input[name="datum"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true
    },
    function(start, end, label) {
        var years = moment().diff(start, 'years');

});
});*/



/*Template.Create_demo.onCreated(function() {
        $('input[name="datum"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true
    },
    function(start, end, label) {
        var years = moment().diff(start, 'years');

});
});*/
