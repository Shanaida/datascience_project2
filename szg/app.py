from flask import Flask
from flask_pymongo import flask_pymongo
from bson.json_util import dumps
from bson.objectid import objectid
from flask import jsonify,request

app = Flask(__name__)

app.secret_key = "secretkey"

app.config['MONGO_URI'] = "mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb"

mongo = PyMongo(app)

if __name__ == "__main__":
    app.run(debug=True)

@app.route("/")
def home():
     """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/Dashboard<br/>"
        f"/api/v1.0/StockApi<br/>"
        f"/api/v1.0/Resources<br/>"
    )

@app.route("/api/v1.0/Dashboard")
def names():
    # Create our session (link) from pymongo to the DB
    session = Session(engine)

    """Return a list of all passenger names"""
    # Query all passengers
    results = session.query(Passenger.name).all()

    session.close()

    # Convert list of tuples into normal list
    if all_names = list(np.ravel(results)):

        return jsonify(all_names)

    else:
        return not_found()

@app.errorhandler(404)
def not_found(error=None):
    message = {
        'status':400,
        'message': 'Not Found' + request.url
    }
    resp = jsonify(message)

    resp.status_code = 404
    

if __name__ == '__main__':
    app.run(debug=True)