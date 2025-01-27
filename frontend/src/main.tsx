import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import AuthProvider from "./contexts/AuthProvider.tsx";
import { CartProvider } from "./contexts/CartContext.tsx";
import { BookProvider } from "./contexts/BooksContext.tsx";

createRoot(document.getElementById("root")!).render(
  <BookProvider>
    <CartProvider>
      <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </CartProvider>
  </BookProvider>
);
