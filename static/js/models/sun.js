define(
    ['libs/underscore', 'libs/backbone'],

    function (_, Backbone) {
        var Sun = Backbone.Model.extend({
            url: '/sun/',
            getAltitude: function() {
                return this.get("altitude").toFixed(2);
            }
        });

        return Sun;
    }
);
