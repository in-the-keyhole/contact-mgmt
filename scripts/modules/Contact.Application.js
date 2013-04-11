'use strict';

define(['marionette', './Header.View', './Content.View', 'mockjax'], function (Marionette, HeaderView, ContentView) {

    var _contactMgmtApp = new Marionette.Application();

    _contactMgmtApp.addRegions({
        header: '#header',
        content: '#content'
    });

    _contactMgmtApp.on('initialize:before', function () {
        $.mockjaxSettings.contentType = 'text/json';

        console.log('Initializing MockJAX endpoint: /sherpa/contacts')
        $.mockjax({
            responseTime: 0,
            url: '/sherpa/contacts',
            responseText: '[' +
                '{"id":1,"firstname" : "John","lastname" : "Doe", "line1" : "123 Main St.", "city" : "Lees Summit", "state" : "MO", "zip" : "64082", "home" : "(123) 456-7890", "mobile" : "(987) 654-3210"},' +
                '{"id":2,"firstname" : "Jane","lastname" : "Doe", "line1" : "123 Main St.", "city" : "Lees Summit", "state" : "MO", "zip" : "64082", "home" : "(123) 456-7890", "mobile" : "(876) 543-2109"},' +
                '{"id":3,"firstname" : "Bob","lastname" : "Smith", "line1" : "456 Oak St.", "city" : "Kansas City", "state" : "MO", "zip" : "64102", "home" : "(234) 567-8901", "mobile" : "(789) 012-3456"},' +
                '{"id":4,"firstname" : "Jack","lastname" : "Jones", "line1" : "789 31st St.", "city" : "Denver", "state" : "CO", "zip" : "80201", "home" : "(345) 678-9012", "mobile" : "(678) 901-2345"}]'
        });
    });

    _contactMgmtApp.addInitializer(function () {
        this.header.show(new HeaderView());
        this.content.show(new ContentView());
    });

    _contactMgmtApp.on('initialize:after', function () {
        Backbone.history.start();
    });

    return _contactMgmtApp;
});