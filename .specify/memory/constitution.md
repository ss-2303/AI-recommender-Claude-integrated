
# Claude Book Recommender Constitution

This constitution is derived from CLAUDE.md and governs the development and maintenance of the Book Recommender repository.

## Core Principles

### I. Architecture
- The system consists of a Flask backend (Python) and a vanilla JavaScript frontend.
- The backend provides book recommendations using TF-IDF and cosine similarity, based on a Goodreads-derived dataset.
- The frontend is a static site using HTML, CSS (TailwindCSS v4), and vanilla JS, built with Vite.

### II. Backend Rules
- Use content-based filtering (TF-IDF vectors from genres, author, and descriptions).
- Exclude exact title matches from recommendations.
- Return the top 5 similar books with similarity scores.
- Require a `.env` file with `ANTHROPIC_API_KEY` (even if unused).
- Dataset must include: `book_title_original`, `author_original`, `book_details_original`, `cover_image_uri`.
- All dependencies managed via `requirements.txt`.

### III. Frontend Rules
- Use only vanilla JavaScript (no frameworks).
- Styling must use TailwindCSS v4.
- Must be responsive, provide a grid layout for recommendations, modals for details, and loading states.
- API calls must target the backend endpoint (`/api/recommend?title=<query>`), with the base URL configurable in `script.js`.
- No extra dependencies, themes, or configuration files allowed beyond those specified in CLAUDE.md.

### IV. Development and Build
- Backend: Use `pip install -r requirements.txt` and run with `python app.py`.
- Frontend: Use `npm install`, `npm run dev`, `npm run build`, and `npm run preview` as needed.
- No additional package managers or build tools are permitted.

### V. Environment and Deployment
- Backend must run on Python 3.x and be deployable as a Flask app.
- Frontend must be buildable and previewable with Vite, and deployable as static assets.
- The production backend URL is `https://book-recommender-jura.onrender.com/`.

## Governance
- No extra dependencies, themes, or configuration files may be introduced at any point.
- All changes must adhere to the architecture and implementation details outlined above.
- This constitution supersedes any conflicting instructions unless explicitly amended.

**Version**: 1.0.0 | **Ratified**: 2026-01-31 | **Last Amended**: 2026-01-31
