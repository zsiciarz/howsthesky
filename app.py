import os
from flask import Flask, render_template

PROJECT_ROOT = os.path.dirname(os.path.realpath(__file__))

app = Flask(
    __name__,
    static_folder=os.path.join(PROJECT_ROOT, 'public'),
    static_url_path='/public'
)

@app.route('/')
def hello():
    return render_template('index.html')

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
