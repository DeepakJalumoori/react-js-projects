# E-Commerce Product Filter App

A beginner-friendly React + Vite project that displays a product catalog and supports multi-source filtering.

Users can filter products by:

- Search text
- Category
- Price
- Color
- Brand (Recommended buttons)

This project focuses on state management, event handling, and reusable component structure in React.

## Tech Stack

- React
- Vite
- React Icons
- ESLint

## Features

- Product card list rendered from local data
- Sidebar radio filters:
  - Category
  - Price
  - Color
- Top search input for title-based filtering
- Brand quick filters using buttons
- Combined filtering flow (search + selected filter)
- Responsive layout suitable for beginner portfolio projects

## Project Structure

```text
src/
	App.jsx
	main.jsx
	index.css
	components/
		Card.jsx
		Buttons.jsx
		Input.jsx
	db/
		data.jsx
	Navigation/
		Nav.jsx
		Nav.css
	Products/
		Products.jsx
		Products.css
	Recommended/
		Recommended.jsx
		Recommended.css
	Sidebar/
		Sidebar.jsx
		Sidebar.css
		Categories/
		Colors/
		Price/
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - start local dev server
- `npm run build` - create production build
- `npm run preview` - preview production build locally
- `npm run lint` - run ESLint

## Learning Goals Covered

- Lifting state to parent component
- Controlled input fields in React
- Reusable UI components with props
- Conditional filtering with array methods
- Debugging common React issues (event wiring, unique keys)

## Notes

- Product data is currently static and stored in `src/db/data.jsx`.
- This project is educational and does not include cart, checkout, authentication, or backend APIs.
