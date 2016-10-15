Template.Create_demo.events({
    'click a#erstellen'(event, instance) {
        console.log("Aallo")
        let ueber = $("#ueberschrift").val();
        let besch = $("#beschreibung").val();

        console.log("-----#########");




        let stadt = $("#stadt").val();
        let landID = $("#bundesland").val();
        let land = $("#bundesland :selected").text();
        let ortV = [stadt, land];

        let datum = $("#datum").val();
        let twitter = $("#twitter").val();
        let kat = [$("#kategorie").val()];

        console.log(kat);

        let teiln = $("#teilnehmer").val();

        let check = $('#checkbox')[0].checked;
        console.log(check);

        if(ueber === "" || !ueber || besch === "" || !besch || !check || datum === "" || !datum){
            console.log("Ungueltige Eingabe");
            $('#alertTag').css('visibility', 'visible');
            event.preventDefault();
        }
        else{


        obj = {
            ueberschrift:ueber,
            beschreibung:besch,
            ort:ortV,
            veranstalter:[Meteor.userId()],
            teilnehmer:[Meteor.userId()],
            teilnZahl:1,
            kategorie:ka,
            datum:datum,
        }

        if( twitter !== "" && twitter){
            obj.twitter = twitter;
        }

        Meteor.call("insert_Event",obj)

        }

        },

    });


