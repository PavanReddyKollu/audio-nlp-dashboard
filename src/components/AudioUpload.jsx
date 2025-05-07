import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import './Loader.css'; 

const quotes = [
  "Data is the new oil.",
  "Without data, you're just another person with an opinion.",
  "In God we trust, all others bring data.",
  "The goal is to turn data into information, and information into insight.",
  "Data science is the art of turning data into decisions.",
];



function AudioUpload({ onResults }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  useEffect(() => {
    let interval;
    if (loading) {
      interval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setCurrentQuote(quotes[randomIndex]);
      }, 2500); // Change quote every 2.5 seconds
    }
    return () => clearInterval(interval);
  }, [loading]);

  const handleUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    setLoading(true);
    try{
      const response = await axios.post('http://localhost:8000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const result = JSON.parse(response.data.transcript.body)
      navigate('/results', { state: result });
    }
    catch (error) {
      console.error("Upload failed:", error);
      alert("Failed to upload file. Please try again.");
    } finally {
      setLoading(false);
    }
    
    }

  
    return (
      <div className="upload-container">
        {!loading ? (
          <>
            <h1>Upload Your Audio File</h1>
            <input type="file" accept="audio/*" onChange={handleUpload} />
          </>
        ) : (
          <div className="loader">
            <div className="spinner"></div>
            <p className="quote">{currentQuote}</p>
            <p>Analyzing audio... please wait!</p>
          </div>
        )}
      </div>
    );
  }
  
  export default AudioUpload;
