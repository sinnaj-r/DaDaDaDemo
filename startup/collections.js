Events = new Mongo.Collection("Events");

Events.attachSchema(new SimpleSchema({
    ueberschrift:{
        type: String,
        label: "Überschrift",
    },
    beschreibung:{
        type: String,
        label: "Beschreibung",
    },
    ort: {
        type: [String],
        label: "_id des Ortes, bzw. String Array",
    },
    datum: {
        type: String,
        label: "Von bis UnixDate",
    },
    veranstalter: {
        type: [String],
        label: "Array aus den Veranstalter _id's",
    },
    teilnehmerzahl:{
        type: Number,
        label: "Teilnehmerzahl",
        defaultValue:0
    },
    twitter:{
        type: String,
        label: "Twitter Hashtag",
        optional: true
    },
    kategorie:{
        type: [String],
        label: "Array der Kategorien",
        optional: true
    },
    teilnehmer:{
        type: [String],
        label: "Array der Teilnehmer _ids",
    }
}))



/*

{
ueberschrift:"Test Event",
beschreibung:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic consequuntur, dolorum quidem cumque esse modi suscipit voluptas quia maxime et ab provident, sunt molestias at laudantium magnam animi blanditiis laboriosam perspiciatis! Recusandae quas sequi, aperiam aliquam consequatur quia soluta laborum ab totam nihil in necessitatibus velit illum, aspernatur placeat quis.",
ort:"djsfdhskjfhsd",
dataum:[0,0]
veranstalter:["djsfdhskjfhsd","sffdsfdsfsdfsd"],
teilnehmer:["djsfdhskjfhsd","sffdsfdsfsdfsd"]
}


    ueberschrift:{
        type: String,
        label: "Überschrift",
    },
    beschreibung:{
        type: String,
        label: "Beschreibung",
    },
    ort: {
        type: String,
        label: "_id des Ortes",
    },
    datum: {
        type: [Number],
        label: "Von bis UnixDate",
    },
    veranstalter: {
        type: [String],
        label: "Array aus den Veranstalter _id's",
    },
    teilnehmerzahl:{
        type: String,
        label: "Kategorie",
        autoValue: function() {
            var content = this.field("teilnehmer");
            if (content.isSet) {
                return content.length;
            } else {
                return 0;
            }
        }
    },
    twitter:{
        type: String,
        label: "Twitter Hashtag",
        optional: true
    },
    kategorie:{
        type: [String],
        label: "Array der Kategorien",
        optional: true
    },
    teilnehmer:{
        type: [String],
        label: "Array der Teilnehmer _ids",
    }

*/
