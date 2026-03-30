import fitz
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

SKILLS_DB = [
    "python", "java", "c++", "sql", "html", "css", "javascript",
    "machine learning", "data analysis", "deep learning",
    "react", "node.js", "flask", "django", "mongodb"
]

@app.route("/")
def home():
    return "Backend is running successfully 🚀"

@app.route("/upload", methods=["POST"])
def upload_resume():
    file = request.files["resume"]

    pdf = fitz.open(stream=file.read(), filetype="pdf")
    
    text = ""
    for page in pdf:
        text += page.get_text()

    text_lower = text.lower()

    # Skill extraction
    found_skills = []
    for skill in SKILLS_DB:
        if skill in text_lower:
            found_skills.append(skill)

    # ATS Score
    total_skills = len(SKILLS_DB)
    matched_skills = len(found_skills)
    ats_score = int((matched_skills / total_skills) * 100)

    return jsonify({
        "message": "Resume analyzed successfully!",
        "skills": found_skills,
        "ats_score": ats_score
    })

if __name__ == "__main__":
    app.run(debug=True)