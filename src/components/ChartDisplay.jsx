import React from 'react';
import { Bar, Pie, Radar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    BarElement,
    PointElement,
    LineElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    RadialLinearScale,
  } from 'chart.js';
  
  // REGISTER ALL NECESSARY ELEMENTS ONCE
  ChartJS.register(
    ArcElement,
    BarElement,
    PointElement,          // This line is CRUCIAL for radar/line charts
    LineElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    RadialLinearScale
  );
  


function ChartDisplay({ sentimentData, emotionData, voiceFeatures }) {
  return (
    <div>
      <h2>Analysis Charts</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div style={{ width: '30%' }}>
          <h3>Sentiment</h3>
          <Pie data={sentimentData} />
        </div>
        <div style={{ width: '30%' }}>
          <h3>Emotion</h3>
          <Bar data={emotionData} />
        </div>
        <div style={{ width: '30%' }}>
          <h3>Voice Features</h3>
          <Radar data={voiceFeatures} />
        </div>
      </div>
    </div>
  );
}

export default ChartDisplay;
