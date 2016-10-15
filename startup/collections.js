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
}))
