Template.create_demo.events({
    'click button'(event, instance) {
        let ueber = $("#ueberschrift").val();
        let besch = $("beschreibung").val();

        let ortS = $("stadt").val();
        let ortB = $("bundesland").val();
        ortVar = [ortS,ortB];

        let datum = $("datum").val();
        let twitter = $("twitter").val();
        let kat = $("kategorie").val();
        let teiln = $("teilnehmer").val();


        obj = {
            ueberschrift:ueber,
            beschreibung:besch,
            ort:ortVar,
            datum:datum,
            veranstalter:[Meteor.userId()],
            teilnehmer:[],
            teilnZahl:0,
            kategorie:kat
        }

        if( twitter !== "" && twitter){
            obj.twitter = twitter;
        }

        Meteor.call("insert_Event",obj)



        },
    });
