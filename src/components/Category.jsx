import { NavLink, Outlet, useParams } from "react-router-dom";
import { getCategory } from "../api";

export default function Category() {
  const { catId } = useParams();
  const { name, sessions } = getCategory(catId);
  // console.log(name);

  return (
    <>
      <h2>{name} Sessions</h2>
      <ul className="session-list">
        {sessions.map((session) => (
          <li className="session" key={session.name}>
            <NavLink
              className={({ isActive }) => (isActive ? "session-active" : null)}
              to={session.id}
            >
              <p className="session-name">{name}</p>
              <p>
                {session.speaker.name} | {session.speaker.org}
              </p>
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
}
