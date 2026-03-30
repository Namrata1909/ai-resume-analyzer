from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Backend is running successfully 🚀"

@app.route("/upload", methods=["POST"])
def upload_resume():
    file = request.files["resume"]
    
    return jsonify({
        "message": "Resume received successfully!",
        "filename": file.filename
    })

if __name__ == "__main__":
    app.run(debug=True)