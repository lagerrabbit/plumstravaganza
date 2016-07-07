from flask import Flask, render_template, request


app = Flask(__name__)
app.config["DEBUG"] = True


@app.route('/')
def index1():
    return render_template("home.html", title='Home', page='recognising everything Plumstead has to offer')
@app.route('/index')
def index():
    return render_template("home.html", title='Home', page='recognising everything Plumstead has to offer')

@app.route('/home')
def home():
    return render_template("home.html", title='Home', page='recognising everything Plumstead has to offer')

@app.route('/about')
def about():
    return render_template("about.html",
                            title='About')
@app.route('/events')
def events():
    return render_template("events.html",
                            title='Events', page='Events by Date')

@app.route('/events2')
def events2():
    return render_template("events2.html",
                            title='Events')

@app.route('/events/poetry')
def poetry():
    return render_template("poetry.html",
                            title='Events', page='Poetry Competition')
@app.route('/events/cyanotype')
def cyanotype():
    return render_template("cyanotype.html",
                            title='Events', page='Cyanotype Workshop')
@app.route('/events/orienteering')
def orienteering():
    return render_template("orienteering.html",
                            title='Events',
                            carousel='True', page='Orienteering in Shrewsbury Park')

@app.route('/contact')
def contact():
        return render_template('contact.html',
                                title='Contact')

@app.route("/contact2", methods=["GET", "POST"])
def contact2():


    if request.method == 'GET':
        return render_template("contact2.html")
    return redirect(url_for('index'))