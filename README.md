# Event Platform Coming Soon Page

A beautiful, animated coming soon page for an event management platform with email waitlist functionality.

## Features

- 🎨 Modern, responsive design with gradient background
- ✨ Smooth animations using Framer Motion
- 🎉 Confetti effect on successful email submission
- 📝 Email waitlist with MongoDB integration
- 🔔 Toast notifications for user feedback
- 🎯 Beautiful UI with glassmorphism effects

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```
   MONGODB_URI=your_mongodb_connection_string
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- MongoDB
- React Hot Toast
- Canvas Confetti

## Project Structure

- `src/app/page.tsx` - Main landing page component
- `src/app/api/waitlist/route.ts` - API route for waitlist submissions
- `src/lib/models/waitlist.ts` - MongoDB model for waitlist
- `src/lib/db/mongodb.ts` - MongoDB connection utility

## Contributing

Feel free to submit issues and enhancement requests!
