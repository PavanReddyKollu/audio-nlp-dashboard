import React from 'react';

function TranscriptionDisplay({ text }) {
  return (
    <div>
      <h2>Transcribed Text</h2>
      <p>{text || 'No transcription available yet.'}</p>
    </div>
  );
}

export default TranscriptionDisplay;
