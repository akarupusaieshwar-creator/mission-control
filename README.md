# Mission Control

Mission Control is my personal home base for coding practice.

## Why I built it

I want to become a stronger and more consistent problem solver. I found it easy to lose focus when practice questions, topic lists, contest calendars, and progress were scattered across different places. I wanted one simple dashboard that helps me answer: **What should I work on today, and am I keeping up with my practice?**

The project is meant to make that daily routine easier to start and easier to stick with. It brings together a rotating set of worthwhile problems, topic based practice, contest links, a weekly consistency view, and a record of solved questions. It is also a project I can keep improving as I learn.

## What it does today

- Shows a daily selection of Easy, Medium, and Hard questions from a curated question list.
- Lets me filter questions by topic and highlights landmark problems.
- Records problems I mark as practiced, along with practice dates, a solved count, and a streak.
- Shows a weekly consistency tracker and a simple progress indicator.
- Opens LeetCode's contest page first, loads upcoming Codeforces contests, and links to contest calendars for CodeChef, HackerRank, GeeksforGeeks, and InterviewBit.
- Includes a coding timetable, light and dark themes, rotating AI practice tips, and a CSV progress export.

## What it does not do yet

- Daily questions rotate from the question list stored in this project. The app does not currently fetch a fresh question from every platform each day.
- It does not automatically read a LeetCode or other platform profile to detect solved problems. Questions are marked in the app manually.
- Progress is saved in this browser's local storage. It does not sync between devices or use an online account. The name entry screen is a local welcome screen, not account authentication.
- Codeforces contests load from its public API. The other contest platforms are links to their calendars, not live feeds inside the app.

## Run it locally

You need Node.js and npm installed.

```bash
npm install
npm run dev
```

To create a production build:

```bash
npm run build
```

## Built with

React, TypeScript, and Vite.
