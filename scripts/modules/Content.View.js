define(['marionette', 'templates', './Contact.View', './Contact.Collection'], function (Marionette, Templates, ContactView, ContactCollection) {
    return Marionette.CompositeView.extend({
        template: Templates.content,

        className: 'container',

        itemView: ContactView,
        itemViewContainer: '#contacts',

        initialize: function (options) {
            this.collection = new ContactCollection();
            this.collection.fetch();
            console.log(this.collection)
        },

        onRender: function () {
            console.log("Rendered Content.View")
        }
    })
})