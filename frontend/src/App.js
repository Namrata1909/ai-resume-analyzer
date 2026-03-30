import { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function App() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);

    try {
      const res = await fetch("http://127.0.0.1:5000/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setResult(data); // store result
    } catch (error) {
      console.error(error);
      alert("Error uploading file");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center justify-center">
      
      <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-xl w-[400px] text-center border border-white/20">
        
        <h1 className="text-3xl font-bold text-white mb-6">
          AI Resume Analyzer
        </h1>

        <p className="text-gray-300 mb-6 text-sm">
          Upload your resume and get instant AI-powered insights 🚀
        </p>

        {/* File Input */}
        <input 
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="mb-6 w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 
          file:rounded-lg file:border-0 file:text-sm file:font-semibold 
          file:bg-blue-500 file:text-white hover:file:bg-blue-600"
        />

        {/* Button */}
        <button 
          onClick={handleUpload}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition duration-300">
          Analyze Resume
        </button>

        {/* Result Section */}
        {result && (
          <div className="mt-6 text-left text-white">
            
           <div className="w-24 h-24 mx-auto mb-4">
            <CircularProgressbar
              value={result.ats_score}
              text={`${result.ats_score}%`}
              styles={buildStyles({
                textColor: "#fff",
                pathColor: "#3b82f6",
                trailColor: "#374151",
            })}
          />
        </div>

<p className="text-center mb-3 font-semibold">
  ATS Score
</p>

            {/* Skills */}
            <div>
              <h3 className="font-semibold mb-2">Skills:</h3>
              <div className="flex flex-wrap gap-2">
                {result.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="bg-blue-500 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>

    </div>
  );
}

export default App;