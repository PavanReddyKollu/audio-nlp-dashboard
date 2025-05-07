import React from 'react';
import { useLocation } from 'react-router-dom';

function ResultsPage() {
  const { state } = useLocation();

  return (
    <div className="results-container">
      <h2>Analysis Results</h2>
      
      <section>
        <h3>Transcription</h3>
        <p>{state.transcribed_text}</p>
      </section>

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

        <h3>SR Tone Combined</h3>

        <p><strong>Speaking rate:</strong> {state.sr_tone_combined?.tempo_value}</p>
        <p><strong>Speaking description:</strong> {state.sr_tone_combined?.tempo_description}</p>
        <p><strong>Pitch:</strong> {state.sr_tone_combined?.average_pitch}</p>
        <p><strong>Pitch description:</strong> {state.sr_tone_combined?.pitch_description}</p>
        <p><strong>Overall comment:</strong> {state.sr_tone_combined?.overall_comment}</p>

      </section>

      <section>
        <h3>Pauses</h3>
        <p>Total pauses:{state.pauses.total_pauses}</p>
        <p>Long pauses:{state.pauses.long_pauses}</p>
        <p>Average pauses:{state.pauses.average_pause_duration}</p>

        <p>Comment:{state.pauses.pause_comment}</p>

      </section>

      <section>
        <h3>Visualizations (PNGs)</h3>
        <div style={{ display: 'flex', gap: '20px' }}>
          <img src={`data:image/png;base64,${state.neutral_image}`} alt="Neutral" width={400} />
          <img src={`data:image/png;base64,${state.negative_image}`} alt="Negative" width={400} />
          <img src={`data:image/png;base64,${state.positive_image}`} alt="Positive" width={400} />
        </div>
      </section>
    </div>
  );
}

export default ResultsPage;
