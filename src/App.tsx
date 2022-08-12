import "./App.css"; // Global style
import { NavLink, Outlet } from "react-router-dom";

export function App() {
  return (
    <div>
      <h1>React 2022</h1>
      <header>
        <nav style={styles.nav}>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to="/tweets"
          >
            Tweets
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to="/cart"
          >
            Cart
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to="/catalog"
          >
            Catalog
          </NavLink>
        </nav>
        <Outlet />
      </header>
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    gap: "1em",
  },
  active: {
    borderBottom: "1px solid red",
  },
};
