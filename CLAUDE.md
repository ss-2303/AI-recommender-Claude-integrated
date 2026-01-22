# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Architecture Overview

This is a book recommendation system with a Flask backend and vanilla JavaScript frontend:

- **Backend** (`backend/`): Flask API that serves book recommendations using TF-IDF vectorization and cosine similarity
  - Main entry point: `app.py`
  - Dataset: `Book_Details_cleaned2.csv` (~5,000 books from Goodreads)
  - Content-based filtering using scikit-learn
  - Single API endpoint: `/api/recommend?title=<query>`

- **Frontend** (`frontend/`): Static HTML/CSS/JS with Vite build system
  - Entry point: `index.html`
  - Styling: TailwindCSS v4
  - JavaScript: Vanilla JS in `script.js`
  - API calls to deployed backend on Render

## Key Implementation Details

### Backend Model
- Uses TF-IDF vectors from book content (genres + author + descriptions)
- Excludes exact title matches from recommendations
- Returns top 5 similar books with similarity scores
- Requires `ANTHROPIC_API_KEY` environment variable (though not currently used)

### Frontend Architecture
- Pure vanilla JavaScript (no frameworks)
- Responsive grid layout for book recommendations
- Modal system for detailed book descriptions
- Loading states for cold start delays

## Development Commands

### Backend
```bash
cd backend
pip install -r requirements.txt
python app.py  # Development server on localhost:5000
```

### Frontend
```bash
cd frontend
npm install
npm run dev     # Development server with Vite
npm run build   # Build for production
npm run preview # Preview production build
```

## Environment Setup

Backend requires:
- `.env` file with `ANTHROPIC_API_KEY` (currently required but unused)
- Python 3.x with dependencies from `requirements.txt`

Frontend uses:
- Vite for development and building
- TailwindCSS v4 for styling
- No additional configuration files needed

## API Integration

The frontend is configured to call the production backend at:
- `https://book-recommender-jura.onrender.com/`
- Change `API_BASE` in `script.js` for local development

## Dataset Structure

The CSV expects these columns:
- `book_title_original`: Display title
- `author_original`: Author name
- `book_details_original`: Description
- `cover_image_uri`: Book cover URL
- Content is auto-generated from genres, author, and details