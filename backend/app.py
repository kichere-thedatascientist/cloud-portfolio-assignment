from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return 'Backend is running successfully'

@app.route('/api/profile')
def profile():
    return jsonify({
        'message': 'Backend API connected successfully from Render!'
    })

if __name__ == '__main__':
    app.run(debug=True)