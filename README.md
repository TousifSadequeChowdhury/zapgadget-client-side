#  ZapGadget 

A user-friendly web platform for exploring, purchasing, and reviewing gadgets.
![ZapGadget Screenshot](https://github.com/TousifSadequeChowdhury/zapgadget-client-side/blob/main/zapgadget_ss.png)
## Live Website Link
[ZapGadget  Live](https://zapgadget.netlify.app/)


## React Fundamental Concepts Used in the Project
- Components: Utilized functional components for creating UI elements like buttons, product cards, and forms.
- JSX: Used JSX for combining HTML and JavaScript to render dynamic content.
- Props and State: Managed data flow using props for passing data and state for internal data management within components.
- Event Handling: Handled user inputs and actions through events like onClick, onChange, etc.
- Conditional Rendering: Displayed content based on conditions (e.g., user authentication status, product availability).
- Hooks: Used React hooks like `useState` for managing state and `useEffect` for performing side-effects like fetching data.
- React Router: Implemented navigation between different pages (Home, Products, Cart, etc.).
- Context API: Used for state management across multiple components without prop drilling.

## Data Management
- Context API: Used to manage global state across components, especially for user authentication and cart data.
- Local Storage: Utilized local storage to persist the cart data across sessions and ensure that users don’t lose their selected items when they refresh the page.

## Project Features
1. **Product Availability**: Users can view whether a product is available for purchase or out of stock.
2. **Add to Wishlist**: Users can add products to their wishlist for future purchase.
3. **Add to Cart**: Users can add products to their shopping cart and proceed to checkout.
4. **Remove from Cart**: Users can remove products from their cart if they change their mind.
5. **View Products Categorized**: Products are displayed according to categories, allowing users to browse more efficiently.
6. **Add Product**: Admins or authorized users can add new products to the platform by providing details like name, description, price, category, and stock.


