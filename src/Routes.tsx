import { BrowserRouter, Routes, Route } from "react-router-dom";

import { App } from "./App";
import { Cart } from "./pages/Cart";
import { Catalog } from "./pages/Catalog";
import { SingleTweet } from "./pages/Tweet";
import { Tweets } from "./pages/Tweets";
import { NotFound } from "./pages/NotFound";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<h1>Use the navigation above ⬆️</h1>} />
          <Route path="cart" element={<Cart />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="/tweets" element={<Tweets />} />
          <Route path="/tweets/:tweetId" element={<SingleTweet />} />
        </Route>
        <Route
          path="*"
          element={<NotFound message="Uh, oh. Page not Found" />}
        />
      </Routes>
    </BrowserRouter>
  );
}
