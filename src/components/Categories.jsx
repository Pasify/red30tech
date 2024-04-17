import { Outlet, NavLink } from "react-router-dom";
import { getCategories } from "../api";

export default function Categories() {
  const categories = getCategories();

  return (
    <div className="container">
      <h1>Session Categories</h1>
      <ul className="categories">
        {categories.map(({ id, name }) => (
          <li key={id}>
            <NavLink
              to={id}
              className={({ isActive }) =>
                isActive ? "category-active" : null
              }
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
