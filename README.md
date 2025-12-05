# Next.js Pages Router + Tailwind Blog (Starter)

This is a starter project implementing your spec:

- Next.js (Pages Router)
- Tailwind CSS
- `getStaticProps` + `getStaticPaths` for static article pages
- Client-side comments fetched from `/api/comments`
- Articles list page and dynamic article pages
- Tailwind-based responsive layout

## Setup Instructions

### Prerequisites

- Node.js
- npm or yarn package manager

### Installation Steps

1. Clone or download this repository to your local machine

2. Navigate to the project directory:

   cd blog_project

3. Install dependencies:

   npm install

   This will install all required packages including:

   - Next.js
   - React and ReactDOM
   - Tailwind CSS
   - PostCSS and Autoprefixer

4. Run the development server:

   npm run dev

5. Open your browser and visit `http://localhost:3000` to view the application

## Project Structure

```
.
├── components/          # Reusable UI components
│   ├── bars/           # Navigation and sidebar components
│   ├── comment/        # Comment section components
│   ├── common/         # Shared components
│   └── layout/         # Main layout component
├── data/               # Static data files
├── pages/              # Next.js pages using Pages Router
│   ├── api/           # API routes
│   ├── articles/      # Dynamic article pages
│   └── _app.js        # Custom App component
├── public/             # Static assets (images, fonts, etc.)
├── styles/             # Global styles and Tailwind configuration


## Special Notes

### Styling System

- Uses Tailwind CSS for styling with a custom color palette defined in `tailwind.config.js`
- Custom fonts: Lato font family imported in `styles/globals.css`
- Responsive design with custom breakpoints configured in Tailwind

### Data Management

- Articles are stored in `data/articles.json`
- Comments are served via the API route `/api/comments?slug=...`
- Comments are handled client-side and are not persisted to disk





```
