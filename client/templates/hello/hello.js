Template.hello.onCreated(function helloOnCreated() {
    // counter starts at 0
    this.counter = new ReactiveVar(0);
});


Template.hello.helpers({
    counter() {
        return Template.instance().counter.get();
    },
    alleDaten() {
        return Events.find({});
        //return "Hallo";
    },
});

Template.hello.events({

    'click button'(event, instance) {
        // increment the counter when button is clicked
        instance.counter.set(instance.counter.get() + 1);
    },
});
