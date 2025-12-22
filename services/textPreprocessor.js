import natural from 'natural';
import stopword from 'stopword';

const tokenizer = new natural.WordTokenizer();
const stemmer = natural.PorterStemmer;

export function preprocessText(text) {
  // lowercase
  let clean = text.toLowerCase();

  // remove punctuation & numbers
  clean = clean.replace(/[^a-z\s]/g, ' ');

  // tokenize
  let tokens = tokenizer.tokenize(clean);

  // remove stopwords
  tokens = stopword.removeStopwords(tokens);

  // stemming
  tokens = tokens.map(t => stemmer.stem(t));

  return {
    clean_text: tokens.join(' '),
    tokens,
   // word_count: tokens.length
  };
}
