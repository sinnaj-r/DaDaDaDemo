import moment from 'moment';
Template.DemoDetail.helpers({
    "beschreibung_kurz":function(){
        var besch = this.beschreibung
        if (this.beschreibung.length > 140){
            besch=this.beschreibung.substring(0, 140)+"[...]"
        }
        return besch
    },
    "formatedDate":function(){
        return moment.unix(this.datum).format("DD.MM.YYYY");
    }
});
