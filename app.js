import express from 'express';
import nlpRoutes from './routes/nlpRoutes.js';

const app = express();
app.use(express.json());

app.use('/nlp', nlpRoutes);

app.listen(6000, () => {
  console.log('NLP service running on port 6000');
});
