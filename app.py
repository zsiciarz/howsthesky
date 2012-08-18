import os

from flask import Flask, jsonify, render_template

import ephem


app = Flask(__name__)


@app.route('/')
def hello():
    return render_template('index.html')


@app.route('/sun')
def sun():
    location = ephem.city('Warsaw')
    s = ephem.Sun(location)
    altitude = s.alt
    year, month, day = location.date.triple()
    start_date = ephem.date((year, month, int(day)))
    rising_time = str(ephem.localtime(location.next_rising(s, start=start_date)))
    setting_time = str(ephem.localtime(location.next_setting(s, start=start_date)))

    return jsonify(
        rising=rising_time,
        setting=setting_time,
        altitude=altitude,
    )


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
