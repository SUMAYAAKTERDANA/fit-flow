

## Project Name
**Fit-flow** — Train with intent. Log every set.

## Short Description
Fit-flow is a dark-themed gym companion app. You can browse a library of workouts (like Barbell Bench Press, Pull Up, Back Squat), add any lift to today's plan, save others for later, and track your daily progress. The whole app is built with Next.js and matches the Figma design exactly.

## Technologies Used
- **Next.js 15** — React framework (using App Router)
- **TypeScript** — A type-safe version of JavaScript
- **Tailwind CSS** — For styling the UI
- **React Context API** — For managing global app state
- **localStorage** — To save data in the browser (so it survives page reloads)
- **react-hot-toast** — For showing clean toast notifications
- **REST API** — For fetching workout data (api.abcz.workers.dev/api/fitlog)
- **Next.js Image** — For optimized image loading
- **Google Fonts (Inter)** — For clean typography
- **Figma** — For the UI design reference

## 5 Key Features

**1. Workout Library with Live Sorting**
The library page shows twelve compound lifts covering every major muscle group. Each card displays muscle tags, equipment, duration, calories, and rating. When you pick Duration, Calories, or Rating from the Sort By dropdown, the list re-orders instantly — no page reload needed.

**2. Detailed Workout Page**
Every lift has its own detail page (`/library/[id]`). It includes a large hero image, a short description, muscle tags, a spec table (Equipment, Difficulty, Sets, Reps, Duration, Calories, Rating), step-by-step instructions, and two call-to-action buttons: "Add to today's plan" and "Save for later".

**3. My Plan and Saved — Data Stays After Reload**
When you click "Add to today's plan" or "Save for later" on any workout, it gets stored in React Context and saved to localStorage. This means your selected lifts stay even after you refresh the page. The Plan and Saved badge counters in the navbar update live, and the daily plan is capped at a maximum of 5 lifts.

**4. My Plan Dashboard (`/my-plan`)**
A separate dashboard page with two tabs: "Today's Plan" and "Saved". At the top, three metric cards (Exercises, Minutes, Calories) update live. Below, each planned workout shows its thumbnail, name, stats, and buttons for "View Details" and "Remove". If the list is empty, a friendly "Nothing here yet" message appears with a CTA to browse the library.

**5. Dark, Figma-Accurate, Fully Responsive UI**
Every screen — Navbar, Banner, Library, Details, My Plan, and Footer — is built pixel-for-pixel to match the Figma design. The app uses a dark theme with lime-green accents (hex: CCFF00). The navbar is sticky, and the active link is highlighted. It works smoothly on mobile, tablet, and desktop.

