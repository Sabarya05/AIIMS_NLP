import { preprocessText } from '../services/textPreprocessor.js';

export const preprocessComplaint = async (req, res) => {
  try {
    const { complaint_id, subject, body } = req.body;

    if (!subject && !body) {
      return res.status(400).json({ error: 'No text provided' });
    }

    const combinedText = `${subject || ''} ${body || ''}`;

    const processed = preprocessText(combinedText);

    return res.json({
      complaint_id,
      ...processed
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
