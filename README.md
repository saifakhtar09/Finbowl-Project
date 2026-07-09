# FinBowl — Loan Disbursement Detail

A loan disbursement detail screen built in React, matching the FinBowl RMS
design in Figma. Shows applicant info, loan details, disbursement history,
commission and broker breakdowns, notes, and documents for a single loan.

## Running it

```bash
npm install
npm run dev
```

Build for production:
```bash
npm run build
```
Output goes to `dist/`.

## Stack

- React (function components + hooks only)
- Vite
- lucide-react for a few generic UI icons (chevrons, search, bell) — all
  content/nav icons are real assets exported from Figma
- Plain CSS with a token-based design system (see `src/index.css`) —
  no CSS framework

## Project structure