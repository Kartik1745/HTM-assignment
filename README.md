# Property Listing Application

A modern React application for displaying and filtering property listings, built with Vite, React, TypeScript, and shadcn/ui.

## Features

- Display property listings in a responsive grid layout
- Filter properties by name or description
- Modern UI components using shadcn/ui
- Responsive design for all screen sizes
- Property details including:
  - Number of bathrooms
  - Guest capacity
  - Floor area
  - Booking functionality

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui components
- Lucide React icons

## Project Structure

```
src/
├── components/          # React components
│   ├── BookButton.tsx  # Booking button component
│   ├── PropertyCard.tsx # Property card component
│   └── SearchInput.tsx  # Search input component
├── data/
│   └── properties.json  # Property data
├── App.tsx             # Main application component
└── main.tsx           # Application entry point
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```