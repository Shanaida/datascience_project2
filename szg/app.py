from flask import Flask, jsonify
import pymongo
from flask import request

app = Flask(__name__)

# setup mongo connection
conn = "mongodb://localhost:27017"
client = pymongo.MongoClient(conn)

# 1connect to mongo db and collection
dbmac = client.test
collectionmac = dbmac.macrodata

# 2connect to mongo db and collection
dbgold = client.Gold
collectiongold = dbgold.Golddata

# 3connect to mongo db and collection
dbrec = client.Recession
collectionrec = dbrec.recdata

# 4connect to mongo db and collection
dbixic= client.ixic
collectionixic = dbixic.ixicdata

# 5connect to mongo db and collection
dbgspc = client.gspc
collectiongspc = dbgspc.gspcdata

# Flask Routes
#################################################

@app.route("/")
def welcome():
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/Dashboard<br/>"
        f"/api/v1.0/StockApi<br/>"
        f"/api/v1.0/Resources<br/>"
        f"/api/v1.0/Macro<br/>"
        f"/api/v1.0/GOLD<br/>"
        f"/api/v1.0/Recession<br/>"
        f"/api/v1.0/IXIC<br/>"
        f"/api/v1.0/GSPC<br/>"
    )

@app.route("/api/v1.0/Macro", methods=['GET'])
def macro():
    macrodata = collectionmac.find()
    macro_response = []
    for macrodata in macrodata:
        object['_id'] = str(object['_id'])
        macro_response.append(object)
    return jsonify(macro_response)

@app.route("/api/v1.0/GOLD", methods=['GET'])
def gold():
    Golddata = collectiongold.find()
    gold_response = []
    for Golddata in Golddata:
        object['_id'] = str(object['_id'])
        gold_response.append(object)
    return jsonify(gold_response)

@app.route("/api/v1.0/Recession", methods=['GET'])
def rec():
    recdata = collectionrec.find()
    rec_response = []
    for recdata in recdata:
        object['_id'] = str(object['_id'])
        rec_response.append(object)
    return jsonify(rec_response)

@app.route("/api/v1.0/IXIC", methods=['GET'])
def ixic():
    ixicdata = collectionixic.find()
    ixic_response = []
    for ixicdata in ixicdata:
        object['_id'] = str(object['_id'])
        ixic_response.append(object)
    return jsonify(ixic_response)

@app.route("/api/v1.0/GSPC", methods=['GET'])
def gspc():
    gspcdata = collectiongspc.find()
    gspc_response = []
    for gspcdata in gspcdata:
        object['_id'] = str(object['_id'])
        gspc_response.append(object)
    return jsonify(gspc_response)

if __name__ == "__main__":
    app.run(debug=True)
