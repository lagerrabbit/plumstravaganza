from flask import Flask, render_template


app = Flask(__name__)


@app.route('/')
@app.route('/index')
def index():
    return render_template("index.html")

@app.route('/home')
def home():
    return render_template("home.html", title='Home')

@app.route('/about')
def about():
    return render_template("about.html",
                            title='About')
@app.route('/events')
def events():
    return render_template("events.html",
                            title='Events')

@app.route('/events/poetry')
def poetry():
    return render_template("poetry.html",
                            title='Events')
@app.route('/events/cyanotype')
def cyanotype():
    return render_template("cyanotype.html",
                            title='Events')
@app.route('/events/orienteering')
def orienteering():
    return render_template("orienteering.html",
                            title='Events',
                            carousel='True')

@app.route('/contact')
def contact():
        return render_template('contact.html',
                                title='Contact')
