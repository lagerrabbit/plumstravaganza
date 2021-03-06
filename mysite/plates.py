from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
@app.route('/index')
@app.route('/index/<name>/')
@app.route('/colour/<colourStr>')

def index(name="default", colourStr="green,red"):
    col1, col2 = colourStr.split(",")
    return render_template('index.html', title=name, c1=col1, c2=col2)

app.run(host='0.0.0.0', port=8080, debug=True)