import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./login-page.module.css";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <div className={styles.login_container}>
      <h1>Login</h1>

      <input
        className={styles.input_container}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      ></input>

      <input
        className={styles.input_container}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      ></input>

      <button className={styles.login_button}>Login</button>

      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
};

export default Login;
