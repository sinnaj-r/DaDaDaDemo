Template.GenTestData.events({
    "click #genButton":function(){
        obj = {
            ueberschrift:"Test Event",
            beschreibung:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic consequuntur, dolorum quidem cumque esse modi suscipit voluptas quia maxime et ab provident, sunt molestias at laudantium magnam animi blanditiis laboriosam perspiciatis! Recusandae quas sequi, aperiam aliquam consequatur quia soluta laborum ab totam nihil in necessitatibus velit illum, aspernatur placeat quis.",
            ort:"djsfdhskjfhsd",
            datum:[0,0],
            veranstalter:[Meteor.userId()],
            teilnehmer:["djsfdhskjfhsd","sffdsfdsfsdfsd"]
        }
        Meteor.call("insert_Event",obj)
    }
})
