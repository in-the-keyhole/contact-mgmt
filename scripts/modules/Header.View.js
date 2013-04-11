define(['marionette', 'Templates'], function(Marionette, Templates) {
    return Marionette.ItemView.extend({
       template: Templates.header,

       onRender: function() {
           console.log("Rendered Header.View")
       }
    });
})