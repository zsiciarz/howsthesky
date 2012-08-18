(function($) {
    $(function() {
        var sun = new Sun();
        var sunView = new SunView({
            model: sun
        });

        sun.fetch();
    });
})(jQuery);
