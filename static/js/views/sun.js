define(
    ['libs/jquery', 'libs/underscore', 'libs/backbone'],

    function ($, _, Backbone) {
        var sunTemplate = _.template(
            'SUN: <div class="sun-box <%= cssClass %>"><%= altitude %></div>'
        );
        var SunView = Backbone.View.extend({
            el: "#sun",
            initialize: function(options) {
                _.bindAll(this, "render");
                this.model.bind("change", this.render);
            },
            render: function() {
                this.$el.html(sunTemplate({
                    cssClass: this.getCssClass(),
                    altitude: this.model.getAltitude()
                }));
            },
            getCssClass: function() {
                var altitude = this.model.getAltitude();
                if (altitude > 0) {
                    return 'day';
                }
                else if (altitude > -6) {
                    return 'civil-twilight';
                }
                else if (altitude > -12) {
                    return 'nautical-twilight';
                }
                else if (altitude > -18) {
                    return 'astronomical-twilight';
                }
                else {
                    return 'night';
                }
            }
        });

        return SunView;
    }
);
