import json
from flask import Flask, request, jsonify
from flask_mongoengine import MongoEngine

app = Flask(__name__)
app.config['MONGODB_SETTINGS'] = {
    'db': 'your_database',
    'host': 'localhost',
    'port': 27017
}


db = MongoEngine()
db.init_app(app)

class player(db.Document):
    name = db.StringField()
    points = db.StringField()
    def to_json(self):
        return {
            "name": self.name,
            "points": self.points
        }
    
@app.route('/', methods=['POST'])
def update_player():
    record = json.loads(request.data)
    user = User.objects(name = record['name']).first()
    if not user:
        return jsonify({'error': 'user not found'})
    else:
        user.update(email = record['email'])
    return jsonify(user.to_json())

@app.route('/', methods=['GET'])
def query_player():
    name = request.args.get('name')
    user = User.objects(name=name).first()
    if not user:
        return jsonify({'error': 'user not found'})
    else:
        return jsonify(user.to_json())

if __name__ == "__main__":
    app.run(debug=True)