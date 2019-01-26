import flask
from flask import request, jsonify, make_response

app = flask.Flask(__name__)
app.config["DEBUG"] = True

# Create some test data 
ratings = [
    {'id': 0,
     'userid': '01',
     'name': 'John Doe',
     'rating': '5',
     'additional_comments': 'Good!'},
    {'id': 1,
     'userid': '02',
     'name': 'Captain America',
     'rating': '3',
     'additional_comments': 'Satisfactory!'},
    {'id': 2,
     'userid': '03',
     'name': 'Baba Ramdev',
     'rating': '5',
     'additional_comments': 'Outstanding!'},
]


@app.route('/', methods=['GET'])
def home():
    return '''<h1>MayDay</h1>
<p>A prototype API for rating services provided.</p>'''


@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)

# A route to return all of the available entries.
@app.route('/api/v1/services/rating/all', methods=['GET'])
def api_all():
    return make_response(jsonify(ratings),200)

# A route to return entry for a specific user id.
@app.route('/api/v1/services/rating', methods=['GET'])
def api_id():
    if 'id' in request.args:
        id = int(request.args['id'])
    else:
        return "Error: No id field provided. Please specify an id."
    # Create an empty list for our results
    results = []
    for rating in ratings:
        if rating['id'] == id:
            results.append(rating)

    # Use the jsonify function from Flask to convert our list of
    # Python dictionaries to the JSON format.
    return jsonify(results),200


app.run()