import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center justify-center">
      
      <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-xl w-[400px] text-center border border-white/20">
        
        <h1 className="text-3xl font-bold text-white mb-6">
          AI Resume Analyzer
        </h1>

        <p className="text-gray-300 mb-6 text-sm">
          Upload your resume and get instant AI-powered insights 🚀
        </p>

        <input 
          type="file" 
          className="mb-6 w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 
          file:rounded-lg file:border-0 file:text-sm file:font-semibold 
          file:bg-blue-500 file:text-white hover:file:bg-blue-600"
        />

        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition duration-300">
          Analyze Resume
        </button>

      </div>

    </div>
  );
}

export default App;
