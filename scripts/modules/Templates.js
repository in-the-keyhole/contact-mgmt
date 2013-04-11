'use strict';

define(function(require) {

    return {
        header      : require('tpl!./header.tmpl'),
        content     : require('tpl!./content.tmpl'),
        contact     : require('tpl!./contact.tmpl')
    };
});