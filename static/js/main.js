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
    ['libs/jquery', 'libs/underscore', 'libs/backbone'],
    function($, _, Backbone) {
        $(function() {
            /*
            var sun = new Sun();
            var sunView = new SunView({
                model: sun
            });

            sun.fetch();
            */
        });
    }
);
