import fitz  # PyMuPDF
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

    # Read PDF
    pdf = fitz.open(stream=file.read(), filetype="pdf")
    
    text = ""
    for page in pdf:
        text += page.get_text()

    return jsonify({
        "message": "Resume processed successfully!",
        "text": text[:500]  # first 500 characters
    })

if __name__ == "__main__":
    app.run(debug=True)