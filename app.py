import os

from flask import Flask, jsonify, render_template

import ephem

from utils import get_rise_and_set_time


app = Flask(__name__)
app.config.from_envvar('HOWSTHESKY_SETTINGS', silent=True)


@app.route('/')
def hello():
    return render_template('index.html')


@app.route('/sun/')
def sun():
    location = ephem.city('Warsaw')
    body = ephem.Sun(location)
    rising, setting = get_rise_and_set_time(body, location)
    body.compute(location)
    return jsonify(
        rising=str(rising),
        setting=str(setting),
        altitude=body.alt,
    )


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
