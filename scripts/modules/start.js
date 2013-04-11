requirejs.config({
    paths: {
        'jquery': '../libs/jquery/jquery-1.9.0.min',
        'underscore': '../libs/underscore/underscore',
        'tpl': '../libs/tpl/tpl',
        'backbone': '../libs/backbone/backbone',
        'bootstrap': '../libs/bootstrap/bootstrap',
        'modernizr': '../libs/modernizr/modernizr-2.6.2.min',
        'marionette': '../libs/marionette/backbone.marionette',
        'backbone.wreqr': '../libs/backbone/backbone.wreqr.min',
        'backbone.babysitter': '../libs/backbone/backbone.babysitter.min',
        'mockjax': '../libs/mockjax/jquery.mockjax',
        'flip': '../libs/jquery/jquery.flip.min',
        'jeditable': '../libs/jquery/jquery.jeditable.min'
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'jquery': {
            exports: '$'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'marionette': {
            exports: 'Backbone.Marionette'
        },
        'bootstrap': ['jquery'],
        'backbone.wreqr': ['backbone'],
        'backbone.babysitter': ['backbone'],
        'mockjax': ['jquery'],
        'flip': ['jquery'],
        'jeditable': ['jquery']
    }
});

require(['./Contact.Application'], function (app) {
    app.start();
});
