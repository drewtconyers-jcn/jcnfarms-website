from flask import Flask, render_template, request, jsonify, redirect
from pymongo import MongoClient
from bson.objectid import ObjectId
from flask_cors import CORS

app = Flask(__name__)

client = MongoClient('')
db = client['users']
users_collection = db['users']

CORS(app)

@app.route('/home')
def home():
    return {'success': True, 'message': 'Reached home page successfully'}

      
# Running app
if __name__ == '__main__':
    app.run(debug=True)