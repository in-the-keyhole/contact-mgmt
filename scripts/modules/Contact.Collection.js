define(['backbone', './Contact.Model'], function (Backbone, Model) {
    return Backbone.Collection.extend({
        model: Model,
        url: '/sherpa/contacts',

        initialize: function(options) {
            console.log('Intializing Contact.Collection')
        }
    })
})