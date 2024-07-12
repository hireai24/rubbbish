import spacy

# Load SpaCy model
nlp = spacy.load('en_core_web_sm')

def evaluate_text(text, keywords):
    doc = nlp(text)
    score = sum(token.text.lower() in keywords for token in doc)
    return score / len(keywords) * 10
