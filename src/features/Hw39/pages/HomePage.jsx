import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Contacts App</h1>

      <div >
        <Link to="login">
          <button>Login</button>
        </Link>

        <Link to="register">
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
};
