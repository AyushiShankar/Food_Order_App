# Food Order App ("Zwiggy")

A React + Redux food ordering UI with a small Express backend. The website lets users browse meals, add/remove items from a cart, and complete a checkout form. A promotional toast appears automatically after page load.

## Website Overview

What you see in the UI:
- A branded header with the app name and cart count badge
- A meals grid/cards list fetched from the backend (`/meals`)
- Cart modal with item quantity controls and total pricing
- Checkout form modal with validation (name, email, address, pincode)
- A timed promotional toast banner

## How It Works (Code Overview)

Frontend (React):
- `src/App.js`: main layout; mounts header, meals list, cart modal, and the timed toaster
- `src/components/Meals.js`: fetches meals from the backend and renders the list
- `src/components/MealItems.js`: renders each meal and dispatches add/increment/decrement actions
- `src/components/ModalCart.js`: cart modal with totals and checkout entry point
- `src/components/FormModal.js` and `src/components/UserForm.js`: checkout form and validation
- `src/store/index.js`: Redux slice for cart state and pricing logic

Backend (Express):
- `backend/app.js`: serves `GET /meals`, handles `POST /orders`, and serves meal images from `backend/public`
- `backend/data/available-meals.json`: meal catalog data
- `backend/data/orders.json`: persisted orders (appends new orders)

## Running Locally

1. Install frontend dependencies:

```bash
cd /Users/ayushimishra/Documents/GitHub/Food_Order_App/foodorderapp
npm install
```

2. Install backend dependencies:

```bash
cd /Users/ayushimishra/Documents/GitHub/Food_Order_App/foodorderapp/backend
npm install
```

3. Start the backend (serves API + images on port 3000):

```bash
cd /Users/ayushimishra/Documents/GitHub/Food_Order_App/foodorderapp/backend
npm start
```

4. Start the frontend (Create React App). If port 3000 is already in use by the backend, CRA will prompt to use 3001:

```bash
cd /Users/ayushimishra/Documents/GitHub/Food_Order_App/foodorderapp
npm start
```

Open the app in your browser at the frontend URL printed in the terminal.

## Notes

- The frontend expects the backend at `http://localhost:3000`.
- Meal images are served from `backend/public/images` and referenced by the meal JSON.
- Orders are appended to `backend/data/orders.json` on checkout.
