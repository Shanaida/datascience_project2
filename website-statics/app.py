from flask import Flask, jsonify
import pymongo
from flask import request

app = Flask(__name__)

# setup mongo connection
conn = "mongodb://localhost:27017"
client = pymongo.MongoClient(conn)

# 1connect to mongo db and collection
dbmac = client.test
collectionmac = db.macrodata

# 2connect to mongo db and collection
dbgold = client.Gold
collectiongold = db.Golddata

# 3connect to mongo db and collection
dbrec = client.Recession
collectionrec = db.recdata

# 4connect to mongo db and collection
dbixic= client.ixic
collectionixic = db.ixicdata

# 5connect to mongo db and collection
dbgspc = client.gspc
collectiongspc = db.gspcdata

# Flask Routes
#################################################

@app.route("/api/v1.0/Resources")
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
    macro_documents = collectionmac.find()
    macro_response = []
    for macro_document in macro_documents:
        document['_id'] = str(document['_id'])
        macro_response.append(document)
    return jsonify(macro_response)

@app.route("/api/v1.0/GOLD", methods=['GET'])
def gold():
    gold_documents = collectiongold.find()
    gold_response = []
    for gold_document in gold_documents:
        document['_id'] = str(document['_id'])
        gold_response.append(document)
    return jsonify(gold_response)

@app.route("/api/v1.0/Recession", methods=['GET'])
def rec():
    rec_documents = collectionrec.find()
    rec_response = []
    for rec_document in rec_documents:
        document['_id'] = str(document['_id'])
        rec_response.append(document)
    return jsonify(rec_response)

@app.route("/api/v1.0/IXIC", methods=['GET'])
def ixic():
    ixic_documents = collectionixic.find()
    ixic_response = []
    for ixic_document in ixic_documents:
        document['_id'] = str(document['_id'])
        ixic_response.append(document)
    return jsonify(ixic_response)

@app.route("/api/v1.0/GSPC", methods=['GET'])
def gspc():
    gspc_documents = collectiongspc.find()
    gspc_response = []
    for gspc_document in gspc_documents:
        document['_id'] = str(document['_id'])
        gspc_response.append(document)
    return jsonify(gspc_response)

if __name__ == "__main__":
    app.run(debug=True)
