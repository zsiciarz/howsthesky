var Sun = Backbone.Model.extend({
    url: '/sun/',
    getAltitude: function() {
        return this.get("altitude").toFixed(2);
    }
});

var SunView = Backbone.View.extend({
    el: $("#sun"),
    initialize: function(options) {
        _.bindAll(this, "render");
        this.model.bind("change", this.render);
    },
    render: function() {
        this.$el.removeClass().addClass(this.getCssClass());
        this.$el.html("Sun's altitude: " + this.model.getAltitude() + "°");
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
