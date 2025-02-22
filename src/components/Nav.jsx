// assets
import { Form, NavLink } from "react-router-dom";
import logomark from "../assets/logomark.svg";

import { TrashIcon } from "@heroicons/react/24/solid";

export const Nav = ({ userName }) => {
  return (
    <nav>
      <NavLink to="/">
        <img src={logomark} alt="logo" height={30} />
        <span>HomeBudget</span>
      </NavLink>
      {userName && (
        <Form
          method="post"
          action="/logout"
          onSubmit={(event) => {
            if (!confirm("Delete user and all Data")) {
              event.preventDefault();
            }
          }}
        >
          <button type="submit" className="btn btn--warning">
            <span>Delete User</span>
            <TrashIcon width={20} />
          </button>
        </Form>
      )}
    </nav>
  );
};
