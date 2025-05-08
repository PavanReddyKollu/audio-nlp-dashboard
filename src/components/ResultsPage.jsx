import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Box, Typography, Grid, Card, CardContent, Button
} from '@mui/material';

function ResultsPage() {
  const { state } = useLocation();
  const navigate = useNavigate();


  return (
    <div style={{ padding: '20px' }}>
      <h2>Analysis Results</h2>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/')}
        >
          ⬅️ Back to Upload
        </Button>
      </Box>
      <div style={{ display: 'flex', gap: '20px' , maxHeight: '600px'}}>
        {/* Left Column: Transcription with scrollbar */}
        <div style={{ width: '50%', overflowY: 'scroll', borderRight: '1px solid #ccc', paddingRight: '20px' }}>
          <h3>Transcription</h3>
          <p>{state.transcribed_text}</p>
        </div>

        {/* Right Column: Emotion, Sentiment, etc. */}
        <div style={{ width: '50%', overflowY: 'scroll', paddingLeft: '20px' }}>
          <section>
            <h3>Emotion</h3>
            <p>{JSON.stringify(state.emotion)}</p>
          </section>

          <section>
            <h3>Sentiment</h3>
            <p>{JSON.stringify(state.sentiment)}</p>
          </section>

          <section>
            <h3>Speech Rate & Tone</h3>
            <p><strong>Fastness:</strong> {state.sr_tone?.speaking_rate_value}</p>
            <p><strong>Tone:</strong> {state.sr_tone?.speaking_rate_comment}</p>
            <p><strong>Pitch rate:</strong> {state.sr_tone?.pitch_value}</p>
            <p><strong>Comment:</strong> {state.sr_tone?.pitch_comment}</p>

            <h4>SR Tone Combined</h4>
            <p><strong>Speaking rate:</strong> {state.sr_tone_combined?.tempo_value}</p>
            <p><strong>Description:</strong> {state.sr_tone_combined?.tempo_description}</p>
            <p><strong>Pitch:</strong> {state.sr_tone_combined?.average_pitch}</p>
            <p><strong>Pitch description:</strong> {state.sr_tone_combined?.pitch_description}</p>
            <p><strong>Overall comment:</strong> {state.sr_tone_combined?.overall_comment}</p>
          </section>

          <section>
            <h3>Pauses</h3>
            <p><strong>Total pauses:</strong> {state.pauses.total_pauses}</p>
            <p><strong>Long pauses:</strong> {state.pauses.long_pauses}</p>
            <p><strong>Average pause duration:</strong> {state.pauses.average_pause_duration}</p>
            <p><strong>Comment:</strong> {state.pauses.pause_comment}</p>
          </section>
        </div>
      </div>

      {/* Bottom: Visualizations */}
      <section style={{ marginTop: '40px' }}>
        <h3>Visualizations (PNGs)</h3>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          <img src={`data:image/png;base64,${state.neutral_image}`} alt="Neutral" width={300} />
          <img src={`data:image/png;base64,${state.negative_image}`} alt="Negative" width={300} />
          <img src={`data:image/png;base64,${state.positive_image}`} alt="Positive" width={300} />
        </div>
      </section>
    </div>
  );
}

export default ResultsPage;
