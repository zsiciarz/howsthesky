requirejs.config({
    shim: {
        'libs/jquery': {
            exports: '$'
        },
        'libs/underscore': {
            exports: '_'
        },
        'libs/backbone': {
            deps: ['libs/underscore', 'libs/jquery'],
            exports: 'Backbone'
        }
    }
});

define(
    ['libs/jquery', 'models/sun', 'views/sun'],
    function($, Sun, SunView) {
        $(function() {
            var sun = new Sun();
            var sunView = new SunView({
                model: sun
            });

            sun.fetch();
        });
    }
);
